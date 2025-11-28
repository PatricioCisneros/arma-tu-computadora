var formulario = document.getElementById("formulario-compu");

function calcular (){

var total = 0;

var gabinete = formulario.Gabinete.value;

var procesador = formulario.Procesador.value;

var discoduro = formulario.Discoduro.value;

var memoriaram = formulario.MemoriaRAM.value;

var monitor = formulario.Monitor.value;

if (gabinete == "Minitorre") {

    total = total + 700; }

if (gabinete == "Torre") {

    total = total + 1200; }

if (gabinete == "Desktop") {

    total = total + 550; }

if (gabinete == "Gamer") {

    total = total + 2500; }

}


