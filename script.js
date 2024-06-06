
//cambiar color texto
const btn = document.getElementById("btn");
const parrafo = document.getElementById("parrafo");
EventListener();

function EventListener(){
    btn.addEventListener("click", function(){
        parrafo.style.color = "blue";//pone el estilo
        
    })
}
//hasta aqui

//ocultar y mostrar al hacer click
const btn2 = document.getElementById("btn2");
const parrafo2 = document.getElementById("parrafo2");

EventListener2();
function EventListener2(){
    btn2.addEventListener("click", function(){
        if(parrafo2.style.display === "none" || parrafo2.style.display === "") {
            parrafo2.style.display = "block";
        }else {
            parrafo2.style.display = "none";
        }
    })
}
//ocultar y mostrar al hacer click


//poner quitar atributos
const btn3 = document.getElementById('atributo');

btn3.setAttribute("disabled", "true");//pone

btn3.removeAttribute("disabled");//quita
//poner quitar atributos


//poner quitar clases
const btn4 = document.getElementById("clases");

btn4.classList.add("new-class");
btn4.classList.remove("new-class");
button.classList.toggle('another-class');

const hasClass = button.classList.contains('new-class');
console.log('Has new-class?', hasClass);
//poner quitar clases


//crear y añadir elementos
const contentDiv = document.getElementById('contenido');

const newParagraph = document.createElement("p");

newParagraph.textContent = "este es un nuevo parrafo";

newParagraph.classList.add("este-parrafo");

newParagraph.id = "este-parrafo";

contentDiv.appendChild(newParagraph);
// de esta forma se pueden agregar mas elementos sin necesidad de clase o id solo crearelemento
contentDiv.insertBefore(newParagraph, firstChild); //lo hice aparte pq no va aqui se usa para poner etiqueta antes del padre
//e ingresarlo en appenchild del div o padre
contentDiv.innerHTML = `
    <p>Este es el primer párrafo</p>
    <p>Este es el segundo párrafo</p>
    <p>Este es el tercer párrafo</p>
`;// esto igual lo hice aparte es otra forma de directamente incluir contenido al padre 

//crear y añadir elementos




//eliminar elementos
const contentDiv = document.getElementById('conte');

const paragraphRemove = document.getElementById('parraf1');

contentDiv.removeChild(paragraphRemove);

//y con el metodo remove solamente ahora
const contentDiv = document.getElementById('conte');
paragraphRemove.remove();

//y ahora eliminamos todos los hijos
while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
}
//eliminar elementos


//dezplazarse en la pagina
document.getElementById('elScroll').addEventListener('click', function() {
    document.getElementById('tarjetaElemento').scrollIntoView({ behavior: 'smooth' });
});

// y  la segunda forma es esta
document.getElementById('scrollButton').addEventListener('click', function() {
    const targetElement = document.getElementById('targetElement');
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
});

//dato window.scrollTo() con coordenadas top y left.
//otro dato Para desplazarse una cantidad relativa a la posición actual del scroll, usa window.scrollBy():
//dezplazarse en la pagina




//animaciones, conyeva css
document.getElementById('animBtn').addEventListener('click', function() {
    const animationTarget = document.getElementById('animTarjet');
    animationTarget.classList.toggle('animate'); // Alternar la clase 'animate' para activar o desactivar la animación
});
//animaciones



//reproducir audio en js
document.getElementById('playSoundButton1').addEventListener('click', function() {
    const audio = document.getElementById('audio1');
    audio.play(); // Reproducir el audio
});
//reproducir audio en js

//reproducir video en js
document.getElementById('playVideoButton').addEventListener('click', function() {
    const video = document.getElementById('video');
    video.play(); // Reproducir el video
});
//reproducir video en js



//validacion de formularios
document.getElementById('submitButton').addEventListener('click', function() {
    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    // Validar que los campos no estén vacíos
    if (name === '' || email === '') {
        alert('Por favor, completa todos los campos del formulario.');
        return; // Detener la ejecución de la función si hay campos vacíos
    }

    // Validar el formato del email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, ingresa un email válido.');
        return; // Detener la ejecución de la función si el email no es válido
    }

    // Si todos los campos son válidos, enviar el formulario
    document.getElementById('myForm').submit();
});
//validacion de formularios

//hasta aqui los eventos con el click

























