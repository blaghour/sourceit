//числа фибоначчи

let a = 1, b = 1, c = 0;
for(let i = 1; i<13; i++){
    a=b;
    b=c;
    c = a+b;
}


console.log(c);