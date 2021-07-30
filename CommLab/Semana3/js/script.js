alert ("te recomendamos usar audifonos para una mejor experiencia")
// var player es una manera de escribir document.getElementById("player") mas corto
var player = document.getElementById("player");
var mensaje = document.getElementById("mensaje");

// ahora si escribimos player es lo mismo que escribir document.getElementById("player")
player.addEventListener("play", playerStarted);
player.addEventListener("timeupdate", playerProgressed);
player.addEventListener("pause", playerPaused);
player.addEventListener("ended", playerEnded);

// cuando el audio empieza a sonar
function playerStarted() {
  mensaje.innerHTML = "El audio se esta reproduciendo";
}
//cuando el audio esta sonando
function playerProgressed() {
  // con esto podemos calcular minutos y segundos
  var minutos = Math.floor(player.currentTime / 60);
  var segundos = Math.floor(player.currentTime) - minutos * 60;
  //ahora insertamos los minutos y segundos en el mensaje
  mensaje.innerHTML = "El audio se ha reproducido por " + minutos + " min  :" + segundos + " seg";
}
//audio en pausa
function playerPaused() {
  //insertamos este otro mensaje cuando el audio se pausa
  mensaje.innerHTML = "El audio esta pausado";
}
//audio terminó de sonar
function playerEnded() {
  //insertamos este otro mensaje cuando el audio termina
  mensaje.innerHTML = "El audio terminó";
}
