function siempreTrue() {
    return true;
}
console.log(siempreTrue());

// 

async function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hola soy una promesa");
            resolve();
        }, 5000);
    });
}
asyncFunction();
console.log(asyncFunction())

asyncFunction()
.then(() => console.log("Promesa cumplida"))
    
// 

function* generatePares() {
    let id = 0;
    while (true) {
    yield id;
    id += 2;
    }
}
const pares = generatePares();
console.log(pares.next().value);
console.log(pares.next().value);
console.log(pares.next().value); 
console.log(pares.next().value);