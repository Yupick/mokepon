let ataqueJugador = ""
let ataqueNPC = " "
let vidaJugador = 3
let vidaNPC = 3
let estadoBatalla = " "
function inicializar() {
    let seccionSeleccionarAtaque = document.getElementById('seleccionAtaque')
    let botonMascotaJugador = document.getElementById('botonMascota')
    let botonFuego = document.getElementById('botonFuego')
    let botonAgua = document.getElementById('botonAgua')
    let botonTierra = document.getElementById('botonTierra')
    let botonReiniciar = document.getElementById('botonReiniciar')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
    botonReiniciar.style.display = 'none'
    seccionSeleccionarAtaque.style.display = 'none'
    mostrarVidas()
    
}
function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min +1) + min)
}
function mostrarVidas(){
    document.getElementById("vidaJugador").innerHTML = vidaJugador
    document.getElementById('vidaNPC').innerHTML = vidaNPC
}
function reiniciarJuego(){
    let botonReiniciar = document.getElementById('botonReiniciar')
    let seccionSeleccionarAtaque = document.getElementById('seleccionAtaque')
    let seccionSeleccionarMascota = document.getElementById('seleccionMascota')
    //reiniciando vidas
    vidaJugador = 3
    vidaNPC = 3
    seccionSeleccionarMascota.style.display = 'block'
    botonReiniciar.style.display = 'none'
    seccionSeleccionarAtaque.style.display = 'none'
    //muetra vidas
    mostrarVidas()
    //reinicia la consola de mensajes
    reiniciarConsola()

}
function seleccionarMascotaJugador(){
    m1 = document.getElementById('mascota1')
    m2 = document.getElementById('mascota2')
    m3 = document.getElementById('mascota3')
    
    if (m1.checked){
        document.getElementById('mascotaJugador').innerHTML = "Mascota 1"
    }else if (m2.checked){
        document.getElementById('mascotaJugador').innerHTML = "Mascota 2"
    }else if (m3.checked){
        document.getElementById('mascotaJugador').innerHTML = "Mascota 3"
    }else {
        alert("no seleccionastes mascota")
    }
    seleccionarMascotaNPC()

}
function ataqueAgua(){
    ataqueJugador = "Agua"
    seleccionarAtaqueNPC()
    batalla() 
}
function ataqueFuego(){
    ataqueJugador = "Fuego"
    seleccionarAtaqueNPC()
    batalla()    
}
function ataqueTierra(){
    ataqueJugador = "Tierra"
    seleccionarAtaqueNPC()
 }
function seleccionarAtaqueNPC(){
    numeroAtaque = aleatorio(1,3)

    if (numeroAtaque == 1){
        ataqueNPC = "Fuego"
    }else if (numeroAtaque == 2){
        ataqueNPC = "Agua"
    }else {
        ataqueNPC = "Tierra"
    }

}
function seleccionarMascotaNPC(){
    let mascotaAleatorio = aleatorio(1,3)
    let seccionSeleccionarAtaque = document.getElementById('seleccionAtaque')
    seccionSeleccionarAtaque.style.display = 'block'
    let seccionSeleccionarMascota = document.getElementById('seleccionMascota')
    seccionSeleccionarMascota.style.display = 'none'

    if (mascotaAleatorio  == 1) {
        document.getElementById('mascotaNPC').innerHTML = "Mascota 1"
    }else if(mascotaAleatorio == 2){
        document.getElementById('mascotaNPC').innerHTML = "Mascota 2"
    }else {
        document.getElementById('mascotaNPC').innerHTML = "Mascota 3"
    }
}
function mensajeFinal(mensajeFinal){
    let seccionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = mensajeFinal
    seccionMensaje.appendChild(parrafo)
    let botonReiniciar = document.getElementById('botonReiniciar')
    botonReiniciar.style.display = 'block'
}
function reiniciarConsola(){
    //let seccionMensaje = document.getElementById('mensajes')
    //let parent = seccionMensaje.parentNode
    //parent.removeChild(seccionMensaje)
    location.reload
}
function mensajeConsola(){
    let seccionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = "Tu mascota ataco con "+ ataqueJugador + " , la mascota del enemigo ataco con " + ataqueNPC + " " + estadoBatalla
    seccionMensaje.appendChild(parrafo)
} 
function revisarVidas(){
    if (vidaJugador == 0){
        mensajeFinal("PERDISTES")
    }else if (vidaNPC == 0){
        mensajeFinal("GANASTES")
    }
}                          
function batalla(){
    if (vidaJugador > 0 && vidaNPC > 0) {
        if (ataqueJugador == ataqueNPC){
            estadoBatalla = "EMPATE"
        }else if (ataqueJugador == "Agua" & ataqueNPC == "Fuego"){
            estadoBatalla = "GANASTES"
            vidaNPC = vidaNPC - 1
        }else if (ataqueJugador == "Tierra" & ataqueNPC == "Agua"){
            estadoBatalla = "GANASTES"
            vidaNPC =  vidaNPC - 1
        }else if (ataqueJugador == "Fuego" & ataqueNPC == "Tierra"){
            estadoBatalla = "GANASTES"
            vidaNPC = vidaNPC - 1
        }else {
            vidaJugador = vidaJugador - 1
            estadoBatalla = "PERDISTES"
        }
        mostrarVidas()
        mensajeConsola()
        revisarVidas()
    }
    
}
window.addEventListener('load', inicializar)