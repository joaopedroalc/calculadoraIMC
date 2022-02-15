function calcular(){
const nome = document.getElementById("nome").value
const peso = document.getElementById("peso").value
const altura = document.getElementById("altura").value

const IMC = peso / (altura**2)
let classificacao = '';

if(IMC < 18.5){
  classificacao = 'abaixo do peso'
}else if(IMC >= 18.5 || IMC <= 24.9){
  classificacao = 'com peso normal'
}else if(IMC >= 25 || IMC <= 29.9){
  classificacao = 'com sobrepeso'
}else if(IMC >= 30 || IMC <= 34.9){
  classificacao = 'com obesidade grau I'
}else if(IMC >= 35 || IMC <= 39.9){
  classificacao = 'com obesidade grau II'
}else{
  classificacao = 'com obesidade grau III ou Mórbida'
}

let resultado = document.querySelector(".resultado")

resultado.style.background = "rgb(65, 89, 223)"

resultado.innerHTML = `${nome} você está com ${peso}kg e ${altura}m, seu IMC é: ${IMC} e você está ${classificacao}`
}