const contadorElemento = document.querySelector("#contador");

const addButton = document.querySelector(".add-btn");
const removeButton = document.querySelector(".rmv-btn");
const resetButton = document.querySelector(".reset-btn");
const saveButton = document.querySelector(".save-btn");
const loadButton = document.querySelector(".load-btn");

addButton.addEventListener("click", aumentarContador);
removeButton.addEventListener("click", diminuirContador);
resetButton.addEventListener("click", resetarContador);
saveButton.addEventListener("click", salvarContador);
loadButton.addEventListener("click", carregarContador);

let contador = 0;

function atualizarContador() {
  contadorElemento.innerHTML = contador;
}

function aumentarContador() {
  contador++;
  atualizarContador();
}

function diminuirContador() {
  contador--;
  atualizarContador();
}

function resetarContador() {
  contador = 0;
  atualizarContador();
}

function salvarContador() {
  localStorage.setItem("contador", contador);
}

function carregarContador() {
  let itemSalvo = localStorage.getItem("contador");
  if (itemSalvo !== null) {
    contador = Number(itemSalvo);
  }
  atualizarContador();
}