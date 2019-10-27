var angka = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
];
let hasil = new Array();
let x=0, y=0;
let startX = 0;
let endX = angka.length;
let startY = 0;
let endY = angka[0].length;

while (hasil.length != angka.length*angka[0].length) {
    for (let i = startX; i < endX; i++) {
        hasil.push(angka[startY][i]);
    }
    startX++;

    for (let j = startY; j < endY; j++) {
        hasil.push(angka[j][startX]);
    }
}

console.log(hasil);