const robot = document.getElementById("robot");
const mensaje = document.getElementById("mensaje");

const frases=[

"Hola Humano",

"¿Cómo estás?",

"Estoy aprendiendo.",

"Soy tu asistente.",

"¡Qué tengas un gran día!",

"¿Necesitas ayuda?",

"Estoy listo."

];

robot.addEventListener("click",function(){

let numero=Math.floor(Math.random()*frases.length);

mensaje.innerHTML=frases[numero];

robot.style.transform="rotate(10deg)";

setTimeout(function(){

robot.style.transform="rotate(-10deg)";

},150);

setTimeout(function(){

robot.style.transform="rotate(0deg)";

},300);

hablar(frases[numero]);

});

function hablar(texto){

const voz=new SpeechSynthesisUtterance(texto);

voz.lang="es-ES";

speechSynthesis.speak(voz);

}

document.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.clientX)/40;

let y=(window.innerHeight/2-e.clientY)/40;

robot.style.transform=`translate(${-x}px,${-y}px)`;

});

