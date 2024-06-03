/*
Iki Javascript
oleh Uhuy
Jakarta, 02/06/2024
*/

function replaceNama {
    let nama = prompt("Siapa nama Anda?","");
    document.getElementById("nama").innerHTML = nama;
}

document.getElementById("tombol").addEventListener("click", function() {replaceNama()});