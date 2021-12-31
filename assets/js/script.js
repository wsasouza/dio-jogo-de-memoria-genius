let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const azul = document.querySelector('.azul');
const vermelho = document.querySelector('.vermelho');
const verde = document.querySelector('.verde');
const amarelo = document.querySelector('.amarelo');

// função que retorna a cor 
let createColorElement = (color) => {
  if(color == 0) {
    return verde;
  } else if(color == 1) {
    return vermelho;
  } else if(color == 2) {
    return amarelo;
  } else if(color == 3) {
    return azul;
  }
}

// cria ordem aleatória de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder; 
  clickedOrder = [];

  for(let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i)  + 1);
  }
}

// acende a pŕoxima cor 
let lightColor = (element, number) => {
  number = number * 500;

  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);

  setTimeout(() => {
    element.classList.remove('selected');
  },500);
}

// checa se os botões clicados estão na ordem gerados no jogo
let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] !== order[i]) {
      gameOver();
      break;
    }
  }

  if(clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\n Você acertou! Iniciando o próximo nível`);
    nextLevel();
  }
}

// clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);

  
}

// próximo nível 
let nextLevel = () => {
  score++;
  shuffleOrder();
}

// game over 
let gameOver = () => {
  alert(`Pontuação: ${score}\n Você perdeu!\n Clique em ok para iniciar um novo jogo.`);
  order = [];
  clickedOrder = [];

  playGame();
}

// inicia o jogo
let playGame = () => {
  alert('Bem vindo ao Genius!');
  score = 0;

  nextLevel();
}

// eventos de clique
verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);

playGame();



