/*
Iki Javascript
oleh Uhuy
Jakarta, 02/06/2024
*/

function replaceNama() {
    let nama = prompt("Masukkan nama Anda?","");
    document.getElementById("nama-header").innerHTML = nama;
}
document.getElementById("tombol").addEventListener("click", function() {replaceNama()});

function kirimForm() {
    const tglSaiki = new Date();
    const namanya = document.forms["myForm"]["fnama"].value;
    const tglnya = document.forms["myForm"]["ftgl"].value;
    const jkelnya = document.forms["myForm"]["fjkel"].value;
    const pesannya = document.forms["myForm"]["fpesan"].value;
    if(namanya == "" || tglnya == "" || jkelnya == "" || pesannya == ""){
        document.getElementById("hasil-error").innerHTML = "<b>*Form tidak boleh kosong.</b>";
        document.getElementById("hasil-tglsaiki").innerHTML = "";
        document.getElementById("hasil-nama").innerHTML = "";
        document.getElementById("hasil-tgl").innerHTML = "";
        document.getElementById("hasil-jkel").innerHTML = "";
        document.getElementById("hasil-pesan").innerHTML = "";
    } else {
        document.getElementById("hasil-error").innerHTML = "";
        document.getElementById("hasil-tglsaiki").innerHTML = "<b>Tanggal Sekarang : </b><br>" + tglSaiki;
        document.getElementById("hasil-nama").innerHTML = "<b>Nama : </b>" + namanya;
        document.getElementById("hasil-tgl").innerHTML = "<b>Tanggal Lahir : </b>" + tglnya;
        document.getElementById("hasil-jkel").innerHTML = "<b>Jenis Kelamin : </b>" + jkelnya;
        document.getElementById("hasil-pesan").innerHTML = "<b>Pesan : </b>" + pesannya;    
    }    
}
document.getElementById("submit").addEventListener("click", function() {kirimForm()});
