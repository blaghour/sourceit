//квадратное уравнение
// для данного уравнения "2x^2 + 4x - 5 = 0"
let a=2, b=4, c= -5;
let diskrim = b*b - 2 * a * c;
let x1, x2;
if(diskrim>0){
x1 = (-1*b + Math.sqrt(diskrim))/(2*a);
x2 = (-1*b - Math.sqrt(diskrim))/(2*a);
console.log('Answer is ' + x1 + ' and ' + x2);
}
else if(diskrim = 0){
console.log('there is one answer!');
x1 = (-1*b + Math.sqrt(diskrim))/(2*a);
console.log('Answer is ' + x1);
}
else{
console.log('there is no answers!');
}