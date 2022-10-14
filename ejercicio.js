// script 
// usando for e if, con variables

let  fizz ="Fizz";
let  buzz ="Buzz";

for (let index = 1; index <= 100; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
        //multiplo de 3 y multiplo de 5
        console.log (fizz + buzz);
    } else if (index % 3 == 0) {
        //multiplo de 3
        console.log (fizz);
    } else if (index % 5 == 0) {
        //multiplo de 5
        console.log (buzz);
    } else {
        console.log (index);
    } 
} 
