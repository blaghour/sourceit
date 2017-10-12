//task 1: fibonacci
let x = 0;
let y = 1;
let z;
for (let i = 3; i <= 12; i++){
    z = x + y;
    x = y;
    y = z;
}
console.log(z);

//task 2: Arithmetic progression
let a1 = +prompt('first number of progression', '');
let d = +prompt('step of progression', '');
let n = +prompt('number of progression members','');
let an = a1 +(n- 1)*d;
let sn;
for (let i = 1; i < n; i++){
    sn = ((a1+an)/2)*n
}
console.log('member number n = ' + an);
console.log('Sum of the progression = ' + sn);

//task 3: Square

let a = prompt("Enter value of a");
let b = prompt("Enter value of b");
let c = prompt("Enter value of c");

let disp = (b * b - 4 * a * c);
let denom = 2 * a;

if (disp == 0){
    x1 = ((-b) + Math.sqrt(disp)) / denom;
    x2 = ((-b) - Math.sqrt(disp)) / denom;
    x1 = x2;
    console.log("root: " + x1);
}else if (disp > 0){
    x1 = ((-b) + Math.sqrt(disp)) / denom;
    x2 = ((-b) - Math.sqrt(disp)) / denom;
    console.log ("1st root: "+ x1);
    console.log ("2nd root: "+ x2);
}else {
    console.log("there is no root");
}

//task 4 Chessboard

let grains = 1;
let weightGrain = 0.065; //g
let conversion = 1000000; //g/t
let totalWeight;
let price = 900; //usd
let totalPrice;
for (let i = 0; i < 64; ++i) {
    grains *= 2;
};
totalWeight = (grains * weightGrain)/conversion;
totalPrice = totalWeight*price;

console.log('number of grains: ' + grains);//18446744073709551615 displays 18446744073709552000 https://github.com/dcodeIO/long.js?files=1#background
console.log('weight: ' + totalWeight);
console.log('price: ' + totalPrice);
