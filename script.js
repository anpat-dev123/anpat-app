
function ambilAntrian() {
  let nomor = localStorage.getItem("nomor") || 0;
  nomor++;
  localStorage.setItem("nomor", nomor);
  document.getElementById("nomorSekarang").innerText = "Nomor Anda: " + nomor;
}

function resetAntrian() {
  localStorage.setItem("nomor", 0);
  localStorage.setItem("dipanggil", 0);
  document.getElementById("nomorTerakhir").innerText = "0";
  document.getElementById("nomorDipanggil").innerText = "";
}

function panggilSelanjutnya() {
  let dipanggil = parseInt(localStorage.getItem("dipanggil") || 0) + 1;
  let total = localStorage.getItem("nomor") || 0;
  if (dipanggil <= total) {
    localStorage.setItem("dipanggil", dipanggil);
    document.getElementById("nomorDipanggil").innerText = "Memanggil nomor: " + dipanggil;
    document.getElementById("nomorTerakhir").innerText = total;
  } else {
    document.getElementById("nomorDipanggil").innerText = "Semua nomor sudah dipanggil.";
  }
}

window.onload = () => {
  document.getElementById("nomorTerakhir").innerText = localStorage.getItem("nomor") || 0;
};
