//Зёрна на шахматной доске
let zerno = 1;
// Вес одного зерна в тоннах
let weight_wheat = 0.000000035;
let weight_rice = 0.000000018;
//цена за тону в $
let moneyForRice = 608, moneyForWheat = 180;
console.log(zerno);
for(let i = 0; i<64; i++){
    zerno *= 2;
}

console.log('he have had ' + zerno + ' seeds on the board');

weight_wheat *= zerno;
weight_rice *= zerno;
console.log('Wheat - ' + weight_wheat + ' tonn Rice - ' + weight_rice + ' tonn');
moneyForWheat = weight_wheat * moneyForWheat;
moneyForRice = weight_rice * moneyForRice;
console.log('he have ' + moneyForWheat + '$ if it was wheat, or ' + moneyForRice + '$ if it was rice!')