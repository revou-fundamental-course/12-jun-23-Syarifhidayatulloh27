// script.js

// Mendapatkan referensi elemen-elemen HTML yang dibutuhkan
var inputCelsius = document.getElementById("inputCelsius");
var inputFahrenheit = document.getElementById("inputFahrenheit");
var btnKonversi = document.getElementById("btnKonversi");
var btnReset = document.getElementById("btnReset");
var btnReverse = document.getElementById("btnReverse");
var resultLabel = document.getElementById("result");

// Fungsi untuk mengkonversi suhu dari Celsius ke Fahrenheit
function konversiCelsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Fungsi untuk mengkonversi suhu dari Fahrenheit ke Celsius
function konversiFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Fungsi untuk menampilkan hasil konversi pada label hasil
function tampilkanHasil(konversi) {
  resultLabel.textContent = "Hasil konversi: " + konversi;
}

// Fungsi untuk mereset input dan label hasil
function resetForm() {
  inputCelsius.value = "";
  inputFahrenheit.value = "";
  resultLabel.textContent = "";
}

// Event listener untuk tombol Konversi
btnKonversi.addEventListener("click", function() {
  var celsius = parseFloat(inputCelsius.value);
  if (!isNaN(celsius)) {
    var fahrenheit = konversiCelsiusToFahrenheit(celsius);
    tampilkanHasil(fahrenheit + " *F");
  } else {
    tampilkanHasil("Masukkan suhu dalam Celsius yang valid.");
  }
});

// Event listener untuk tombol Reset
btnReset.addEventListener("click", function() {
  resetForm();
});

// Event listener untuk tombol Reverse
btnReverse.addEventListener("click", function() {
  var celsius = parseFloat(inputCelsius.value);
  var fahrenheit = parseFloat(inputFahrenheit.value);

  if (!isNaN(celsius) && isNaN(fahrenheit)) {
    fahrenheit = konversiCelsiusToFahrenheit(celsius);
    inputFahrenheit.value = fahrenheit.toFixed(2);
  } else if (isNaN(celsius) && !isNaN(fahrenheit)) {
    celsius = konversiFahrenheitToCelsius(fahrenheit);
    inputCelsius.value = celsius.toFixed(2);
  } else {
    tampilkanHasil("Mohon masukkan hanya satu suhu yang ingin diubah.");
  }
});

