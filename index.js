// Import stylesheets
import './style.css';

function evaluateScore(){
  
  var score = document.getElementById("scoreInput").value;

  // Konversi nilai input ke dalam bentuk angka
  score = parseFloat(score);

  // Inisialisasi variabel result
  let result;

  //    Todo
  if (!isNaN(score)) { // Memastikan input adalah angka
    if (score >= 90) {
        result = 'Selamat! Anda mendapatkan nilai A.';
    } else if (score >= 80 && score <= 89) {
        result = 'Anda mendapatkan nilai B.';
    } else if (score >= 70 && score <= 79) {
        result = 'Anda mendapatkan nilai C.';
    } else if (score >= 60 && score <= 69) {
        result = 'Anda mendapatkan nilai D.';
    } else {
        result = 'Anda mendapatkan nilai E.';
    }
} else {
    result = 'Masukkan nilai yang valid.';
}

  document.getElementById('result').innerHTML = result;
}

module.exports = evaluateScore;

