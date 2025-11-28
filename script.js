var formulario = document.getElementById("formulario-compu");

function calcular (){

var total = 0;

var gabinete = document.getElementById("Gabinete").value;

var procesador = document.getElementById("Procesador").value;

var discoduro = document.getElementById("Discoduro").value;

var memoriaram = document.getElementById("MemoriaRAM").value;

var monitor = document.getElementById("Monitor").value;

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

//Monitor
if (monitor == "17") {

    total = total + 2500; }

else if (monitor == "19") {

    total = total + 2500; }

else if (monitor == "21.5") {

    total = total + 2500; }

else if (monitor == "24") {

    total = total + 2500; }

else if (monitor == "27") {

    total = total + 2500; }

else if (monitor == "32") {

    total = total + 2500; }

alert ("Precio total: " + total);
}