const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const bntCalcular = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');

bntCalcular.addEventListener('click', btnOnClick)

function btnOnClick(){
    const suma = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = "Resultado: " + suma;
}