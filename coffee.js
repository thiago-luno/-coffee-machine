let credit = 0.00;

updateCreditView();

function getCredit() {
  return credit.toFixed(2);
}

function change(order) {
  if(getCredit() > 0) {
    alert(`Seu pedido foi ${order}. Seu troco é de R$${getCredit()}`)
  } else {
    alert(`Seu pedido foi ${order}. Não há troco`)
  }
  credit = 0.00;
  updateCreditView();
}

function updateCreditView() {
  const element = document.querySelector("#credit");
  element.innerHTML = `R$${getCredit()}`;
}

function addCredit(value) {
  if (value <= 0.05)
    return alert("Moedas de R$0,01 e R$0,05 não são aceitas");

  credit = + (value + credit).toFixed(2);
  updateCreditView();
}

function error() {
  alert(`Você não possui crédito suficiente. Crédito atual: R$${getCredit()}`)
}

function buy(opt, evt) {
  switch (opt) {
    case 1:
      if (credit < 3.50)
        return error();

      credit -= 3.50;
      break;

    case 2:
      if (credit < 4.00)
        return error();

      credit -= 4.00;
      break;

    case 3:
      if (credit < 3.00)
        return error();

      credit -= 3.00;
      break;
  }

  fillCup();
  updateCreditView();
  change(evt.target.innerText);
}

function fillCup() {
  const element = document.querySelector(".coffee-medium");

  let container = document.querySelector(".coffee-animation");
  let liquid = document.createElement("div");
  let smokeOne = document.createElement("div");
  let smokeTwo = document.createElement("div");
  let smokeThree = document.createElement("div");
  let smokeFor = document.createElement("div");
  
  liquid.className= "coffee-medium__liquid";
  smokeOne.className= "coffee-medium__smoke coffee-medium__smoke-one";
  smokeTwo.className= "coffee-medium__smoke coffee-medium__smoke-two";
  smokeThree.className= "coffee-medium__smoke coffee-medium__smoke-three";
  smokeFor.className= "coffee-medium__smoke coffee-medium__smoke-for";
  
  container.appendChild(liquid);
  container.appendChild(smokeOne);
  container.appendChild(smokeTwo);
  container.appendChild(smokeThree);
  container.appendChild(smokeFor);

  element.appendChild(container);
}