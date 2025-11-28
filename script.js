var formulario = document.getElementById("formulario-compu");

function calcular (){

var total = 0;

var gabinete = formulario.Gabinete.value;

var procesador = formulario.Procesador.value;

var discoduro = formulario.Discoduro.value;

var memoriaram = formulario.MemoriaRAM.value;

var monitor = formulario.Monitor.value;

//Gabinete
if (gabinete == "Minitorre") {

    total = total + 700; }

else if (gabinete == "Torre") {

    total = total + 1200; }

else if (gabinete == "Desktop") {

    total = total + 550; }

else if (gabinete == "Gamer") {

    total = total + 2500; }

//Procesador
if (procesador == "Celeron") {

    total = total + 900; }

else if (procesador == "Intel i3") {

    total = total + 1500; }

else if (procesador == "Intel i5") {

    total = total + 3500; }

else if (procesador == "Intel i7") {

    total = total + 5000; }

//Disco duro
if (discoduro == "500GB") {

    total = total + 500; }

else if (discoduro == "750GB") {

    total = total + 800; }

else if (discoduro == "1TB") {

    total = total + 1000; }

else if (discoduro == "250GB-SSD") {

    total = total + 900; }

else if (discoduro == "500GB-SSD") {

    total = total + 1380; }

//Memoria RAM
if (memoriaram == "4GB") {

    total = total + 600; }

else if (memoriaram == "8GB") {

    total = total + 1050; }

else if (memoriaram == "16GB") {

    total = total + 1950; }

    

}