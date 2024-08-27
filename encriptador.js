const textArea = document.querySelector(".form__input");
const imagenMuneco = document.querySelector(".result__img");
const loaderPacman = document.querySelector(".loader");
const resultTitle = document.querySelector(".result__title");
const resultText = document.querySelector(".result__text");
const botonEncriptar = document.querySelector(".form__btn");
const botonDesencriptar = document.querySelectorAll(".form__btn");
const botonCopiar = document.querySelectorAll(".result__btn");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];
//Funcion para Encriptar
function encriptarmensaje(mensaje){
    let mensajeEncriptado = "";
   for(let i=0;i < mensaje.length; i++){
    let letra = mensaje[i];
   let encriptada = letra ;
   for(let j = 0; j < llaves.length; j++){
    if (letra === llaves [j][0]){
        encriptada = llaves [j][1]; //Remplaza la letra por su equivalente encriptado
        break;    //Termina en bucle cuando se cumple la condición 
}
   }
   mensajeEncriptado += encriptada;
}
return mensajeEncriptado;
}

//funcion para desencriptar

 function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1],'g');
        mensajeDesencriptado = mensajeDesencriptado.replace (regex, llaves[i][0]);
    } 
    return mensajeDesencriptado;
}
 //Ocultar elementos
 textArea.addEventListener("input", (e)=>{
    imagenMuneco.style.display = "none";  
    loaderPacman.classList.remove("hidden");
    resultTitle.textContent = "Capturando Mensaje.";
    resultText.textContent = "";

 });
//Funcion del boton Encriptar
botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultTitle.textContent = "El resultado es:";
});

botonDesencriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado  = desencriptarMensaje(mensaje);
    resultText.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove("hidden");
});
 
botonCopiar.addEventListener("click", ()=>{
    let textoCopiado = resultText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        imagenMuneco.style.display = "block";
        loaderPacman.classList.add("hidden");
        resultText.textContent = "El texto se"
    })
});