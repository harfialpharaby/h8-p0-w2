//===================================================================================================================================== exercise 6 soal 1
console.log('============================================================================== Soal No. 1');
var i=2;
console.log('LOOPING PERTAMA');
while (i<=20) {
    console.log(`${i} - I love coding`);
    i++;
}

console.log('LOOPING KEDUA');
i = 20;
while (i>=2) {
    console.log(`${i} - I will become fullstack developer`);
    i--;
}

//===================================================================================================================================== exercise 6 soal 2
console.log('============================================================================== Soal No. 2');
console.log('LOOPING PERTAMA');
for (let i = 1; i <= 20; i++) {
    console.log(`${i} - I love coding`);
}

console.log('LOOPING KEDUA');
for (let i = 20; i >= 1; i--) {
    console.log(`${i} - I will become fullstack developer`);
}

//===================================================================================================================================== exercise 6 soal 3
console.log('============================================================================== Soal No. 3');
for (let i = 1; i <= 100; i++) {
    i%2==0 ? console.log('GENAP') : console.log('GANJIL');
}

console.log('====================pertambahan counter 2=====');
for (let i = 1; i <= 100; i+=2) {
    if (i%3==0) {
        console.log(`${i} KELIPATAN 3`);
    }
}

console.log('====================pertambahan counter 5=====');
for (let i = 1; i <= 100; i+=5) {
    if (i%6==0) {
        console.log(`${i} KELIPATAN 6`);
    }
}

console.log('====================pertambahan counter 9=====');
for (let i = 1; i <= 100; i+=9) {
    if (i%10==0) {
        console.log(`${i} KELIPATAN 10`);
    }
}