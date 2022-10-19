//factorial-break.js 

let num = 1;
let mul = 10;

while(true){
    num = num * mul;
    mul--;

    if(mul==0){
        break;
    }
}
console.log(num);