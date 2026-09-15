let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid numbers!");
} else {
    alert(
        `Sum: ${num1 + num2}\n` +
        `Difference: ${num1 - num2}\n` +
        `Product: ${num1 * num2}\n` +
        `Quotient: ${num2 !== 0 ? num1 / num2 : "Cannot divide by 0"}`
    );
}

let a=BigInt(100);
console.log(a);
let b=BigInt(99);
console.log(b);
console.log(a+b);
let x;
console.log(typeof x);

function add(){
    let a=1;
    let b=2;
    let c=a+b;
}
console.log(add());