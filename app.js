let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMaximoDeJuego = 4;


function asinarTextoElemento(elemento,texto){
    let elemetoHTML = document.querySelector(elemento);
    elemetoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroMaximoDeJuego == intentos) {
        asinarTextoElemento('p', `Ya culmino tu partida. Gastaste tus ${numeroMaximoDeJuego}`);

    }else {
        if (numeroDeUsuario === numeroSecreto){
            asinarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            //El usuario no acertó.
            if(numeroDeUsuario > numeroSecreto){
                asinarTextoElemento('p', 'El número secreto es menor');
            }else{
                asinarTextoElemento('p', 'El número secreto es mayor');
            }
            intentos++;
            limpiarCaja();
        }
    }
    
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
        //Si ya sortiamos todos los números
        if(listaNumerosSorteados.length == numeroMaximo){
            asinarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        }else{
            //Si el número generado esta incluido en la lista
            if (listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            }else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }

        }

}

function condicionesIniciales(){
    asinarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    asinarTextoElemento('h1', 'Juego del número secreto!');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de número
    //generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

