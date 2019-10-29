/**
 * ============
 * Checkerboard
 * ============
 * 
 * [Instruction]
 * Buatlah sebuah function yang mengembalikan string berupa
 * asterisk yang berbentuk pola seperti papan catur.
 * 
 * [Resctrictions]
 * 1. Result selalu dimulai dari asterisk '*' bukan spasi ' '
 * 2. Function mengembalikan 'Invalid' jika input kurang dari 1
 *    ATAU input bukan number
 */

function checkerBoard(num) {
  // Write your code here
  var hasil;
  if(typeof num == 'number' && num >= 0){
    hasil = '';
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        // jika i ganjil maka semua j ganjil adalah *
        // jika i genap maka semua j genap adalah *
        // selain itu adalah blank space
        (i%2==0 && j%2==0) || (i%2!=0 && j%2!=0) ? hasil+='*' : hasil+=' ';
      }
      hasil += '\n';
    }
  } else {
    hasil = 'Invalid';
  }
  return hasil;
}

console.log(checkerBoard(1))
// *
console.log('=============================================')
console.log(checkerBoard(2))
// * 
//  *
console.log('=============================================')
console.log(checkerBoard(3))
// * *
//  *
// * *
console.log('=============================================')
console.log(checkerBoard(4))
// * *
//  * *
// * *
//  * *
console.log('=============================================')
console.log(checkerBoard(5))
// * * *
//  * *
// * * *
//  * *
// * * *
console.log('=============================================')
console.log(checkerBoard(-1)) // Invalid
console.log(checkerBoard('5')) // Invalid
console.log(checkerBoard(false)) // Invalid