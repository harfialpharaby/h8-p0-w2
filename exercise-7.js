//===================================================================================================================================== exercise 7 soal 1
console.log('============================================================================== Soal No. 1');
var rows1=5; // input the number of rows

// do loops to display asterisks in the console.
for (let i = 0; i < rows1; i++) {
    console.log('*');
}

//===================================================================================================================================== exercise 6 soal 2
console.log('============================================================================== Soal No. 2');
var rows2=5; // input the number of rows

// do loops to display asterisks in the console.
var str2;
for (let i = 0; i < rows2; i++) {
    str2 = '';
    for (let j = 0; j < rows2; j++) {
        str2 += '*';
    }
    console.log(str2);
}

//===================================================================================================================================== exercise 6 soal 3
console.log('============================================================================== Soal No. 3');
var rows3=5; // input the number of rows

// do loops to display asterisks in the console.
var str3;
for (let i = 1; i <= rows3; i++) {
    str3='';
    for (let j = 1; j <= i; j++) {
        str3 += '*';
    }
    console.log(str3);
}