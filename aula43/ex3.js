// function recebeNum(n1) {
//     n1 = Math.floor(Math.random() * 100);
//     console.log(n1);
    
//     if (n1 % 3 === 0 && n1 % 5 === 0) {
//         return console.log('FizzBuzz');
//     } else if (n1 % 3 === 0) {
//         return console.log('Fizz');
//     } else if (n1 % 5 === 0) {
//         return console.log('Buzz');
//     } else {
//         return console.log(`${n1} não é divisível por 3 ou 5.`);
//     }
// }

// recebeNum();

function fizzBuzz(n1) {
    if (typeof n1 !== 'number') return n1;
    if (n1 % 3 === 0 && n1 % 5 === 0) return 'FizzBuzz';
    if (n1 % 3 === 0) return 'Fizz';
    if (n1 % 5 === 0) return 'Buzz';
    return n1;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}
