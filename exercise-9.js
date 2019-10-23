//===================================================================================================================================== exercise 9 soal 1
console.log('============================================================================== Soal No. 1');
/*
 BUATLAH KODE FUNCTION DISINI
*/
function shoutOut() {
    return 'Halo Function!';
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console

//===================================================================================================================================== exercise 9 soal 2
console.log('============================================================================== Soal No. 2');
/*
 BUATLAH KODE FUNCTION DISINI
*/
function calculateMultiply(num1,num2) {
    return num1*num2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30


//===================================================================================================================================== exercise 9 soal 3
console.log('============================================================================== Soal No. 3');
/*
 BUATLAH KODE FUNCTION DISINI
*/
function processSentence(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"