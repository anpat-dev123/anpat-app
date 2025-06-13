document.getElementById('ambilAntrian').addEventListener('click', function(){
    document.getElementById('nomorAntrian').innerHTML = 
      'Nomor Antrian Anda: ' + Math.floor(Math.random() * 1000);
});