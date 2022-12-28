const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid'); 
const input = document.querySelector('input'); 

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})


h1.innerHTML = 'Patito'; //permite modificar el html
h1.innerText = 'Texto'; //permite modifcar solo texto
h1.getAttribute('pantalla'); //permite leer atributo
h1.setAttribute('class', 'rojo');//modificar atributos en html

h1.classList.add('negro'); //agregar clase
//h1.classList.remove('') //remover clases
//h1.classList.toggle('verde'); 
//h1.classList.contains('verde'); return true or false

input.value = '456'

const img = document.createElement('img');

img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');

pid.append(img);