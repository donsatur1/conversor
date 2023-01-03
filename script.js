let valor = document.getElementById("valor");

valor.addEventListener("keyup", convertir);
txtResultado = document.getElementById("resultado");

unidad1 = document.getElementById("unidad1");
unidad1.addEventListener("change", convertir);
unidad2 = document.getElementById("unidad2");
unidad2.addEventListener("change", convertir);

let resultado;

function convertir() {
  if (valor.value == "") {
    return;
  }
  numero = valor.value;
  numero = parseFloat(numero);

  //kilometro a kilometro

  if (unidad1.value == "Kilometro" && unidad2.value == "Kilometro") {
    resultado = numero * 1;
    txtResultado.innerHTML =
      numero + " Kilometros equivalen a " + resultado + " Kilometros";
  }
  if (
    unidad1.value == "Kilometro" &&
    unidad2.value == "Kilometro" &&
    resultado == 1
  ) {
    txtResultado.innerHTML = 1 + " Kilometro equivale a " + 1 + " Kilometro";
  }
  //kilometro a metro

  if (unidad1.value == "Kilometro" && unidad2.value == "Metro") {
    resultado = numero * 1000;
    txtResultado.innerHTML =
      numero + " Kilometros equivalen a " + resultado + " Metros";
  }
  if (unidad1.value == "Kilometro" && unidad2.value == "Metro" && numero == 1) {
    txtResultado.innerHTML = 1 + " Kilometro equivale a " + 1000 + " Metros";
  }
  if (
    unidad1.value == "Kilometro" &&
    unidad2.value == "Metro" &&
    numero == 0.001
  ) {
    txtResultado.innerHTML = 0.001 + " Kilometros equivalen a " + 1 + " Metro";
  }

  //kilometro a centimetro

  if (unidad1.value == "Kilometro" && unidad2.value == "Centimetro") {
    resultado = numero * 100000;
    txtResultado.innerHTML =
      numero + " Kilometros equivalen a " + resultado + " Centimetros";
  }
  if (
    unidad1.value == "Kilometro" &&
    unidad2.value == "Centimetro" &&
    numero == 1
  ) {
    txtResultado.innerHTML =
      1 + " Kilometro equivale a " + 100000 + " Centimetros";
  }
  if (
    unidad1.value == "Kilometro" &&
    unidad2.value == "Centimetro" &&
    numero == 0.00001
  ) {
    txtResultado.innerHTML =
      0.00001 + " Kilometros equivalen a " + 1 + " Centimetro";
  }
  //metro a kilometro

  if (unidad1.value == "Metro" && unidad2.value == "Kilometro") {
    resultado = numero / 1000;
    txtResultado.innerHTML =
      numero + " Metros equivalen a " + resultado + " Kilometros";
  }
  if (unidad1.value == "Metro" && unidad2.value == "Kilometro" && numero == 1) {
    txtResultado.innerHTML = 1 + " Metro equivale a " + 0.001 + " Kilometros";
  }
  if (
    unidad1.value == "Metro" &&
    unidad2.value == "Kilometro" &&
    numero == 1000
  ) {
    txtResultado.innerHTML = 1000 + " Metros equivalen a " + 1 + " Kilometro";
  }
  //metro a metro

  if (unidad1.value == "Metro" && unidad2.value == "Metro") {
    resultado = numero * 1;
    txtResultado.innerHTML =
      numero + " Metros equivalen a " + resultado + " Metros";
  }
  if (unidad1.value == "Metro" && unidad2.value == "Metro" && resultado == 1) {
    txtResultado.innerHTML = 1 + " Metro equivale a " + 1 + " Metro";
  }
  //metro a centimetro

  if (unidad1.value == "Metro" && unidad2.value == "Centimetro") {
    resultado = numero * 100;
    txtResultado.innerHTML =
      numero + " Metros equivalen a " + resultado + " Centimetros";
  }
  if (
    unidad1.value == "Metro" &&
    unidad2.value == "Centimetro" &&
    numero == 1
  ) {
    txtResultado.innerHTML = 1 + " Metro equivale a " + 100 + " Centimetros";
  }
  if (
    unidad1.value == "Metro" &&
    unidad2.value == "Centimetro" &&
    numero == 0.01
  ) {
    txtResultado.innerHTML = 0.01 + " Metros equivalen a " + 1 + " Centimetro";
  }
  //centimetro a kilometro

  if (unidad1.value == "Centimetro" && unidad2.value == "Kilometro") {
    resultado = numero / 100000;
    txtResultado.innerHTML =
      numero + " Centimetros equivalen a " + resultado + " Kilometros";
  }
  if (
    unidad1.value == "Centimetro" &&
    unidad2.value == "Kilometro" &&
    numero == 1
  ) {
    txtResultado.innerHTML =
      1 + " Centimetro equivale a " + 0.0001 + " Kilometros";
  }
  if (
    unidad1.value == "Centimetro" &&
    unidad2.value == "Kilometro" &&
    numero == 100000
  ) {
    txtResultado.innerHTML =
      100000 + " Centimetros equivalen a " + 1 + " Kilometro";
  }
  //centimetro a metro

  if (unidad1.value == "Centimetro" && unidad2.value == "Metro") {
    resultado = numero / 100;
    txtResultado.innerHTML =
      numero + " Centimetros equivalen a " + resultado + " Metros";
  }
  if (
    unidad1.value == "Centimetro" &&
    unidad2.value == "Metro" &&
    numero == 1
  ) {
    txtResultado.innerHTML = 1 + " Centimetro equivale a " + 0.01 + " Metros";
  }
  if (
    unidad1.value == "Centimetro" &&
    unidad2.value == "Metro" &&
    numero == 100
  ) {
    txtResultado.innerHTML = 100 + " Centimetros equivalen a " + 1 + " Metro";
  }

  //centimetro a centimetro

  if (unidad1.value == "Centimetro" && unidad2.value == "Centimetro") {
    resultado = numero * 1;
    txtResultado.innerHTML =
      numero + " Centimetros equivalen a " + resultado + " Centimetros";
  }
  if (
    unidad1.value == "Centimetro" &&
    unidad2.value == "Centimetro" &&
    resultado == 1
  ) {
    txtResultado.innerHTML = 1 + " Centimetro equivale a " + 1 + " Centimetro";
  }
}
