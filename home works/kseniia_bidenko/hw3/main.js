// fibonacci

	let a1 = 0;
	let b1 = 1;

	for (var i = 3; i <= 12; i++) {
		let c1 = a1 + b1;
		a1 = b1;
		b1 = c1;

		if(i==12){
			console.log(c1);
		}
	}



// арифметическая прогрессия a, a + n, a+2n, ...

	let num = parseInt(prompt('Where we start, type a number, please ', 0));

	let step = parseInt(prompt('What step will we use? ', 1));

	let plength = parseInt(prompt('How many items will we count? ', 10));

	let progression = num + ', ';

	for(var i = 0; i < plength; i++){
		num += step;
		progression += num + ", ";
	}

	console.log(progression);




// корни квадратного уравнения ax + bx + c = 0,
//input: user inputs 3 multipliers

let a = parseInt(prompt('Type value for "a" not 0', 1));
let b = parseInt(prompt('Type value for "b" ', 1));
let c = parseInt(prompt('Type value for "a" not 0', 1));

console.log('уравнение: ' + a + "x^2" + " + "  + b + 'x' + " + " + c);



if(a == 0){
	alert('Эту программу не научили считать такое. Сорян. ');
	a = parseInt(prompt('Type value for "a" not 0', 1));
}

else{

	let d =  (b*b) - (4*a*c);
	console.log("Дискриминант" +d);

	if(d>0){

		let x1 = (-b - Math.sqrt(d))/(2*a);
		let x2 = (-b + Math.sqrt( d))/(2*a);

		console.log('x1 = ' + x1 + ", x2 = " + x2);
	}
	else if(d == 0) {
		let x = -(b / 2*a);
		console.log('d = 0, x1, x2 = ' + x);
	}
	else{

		let x1 = (-b - Math.sqrt(Math.abs(d)))/(2*a);
		let x2 = (-b + Math.sqrt(Math.abs(d)))/(2*a);

		console.log('Действительных корней нет, вещественные: x1 = ' + x1 + ", x2 = " + x2);
	}
}








// задача про мудреца и шахматную доску 8 на 8

let cellsCount = 64;
let startBid = 1;

let aruzza = 0.0186; //gramms. Арузза - мера веса в мусульманских странах если что :)

let totalCount = 1;
let totalWeight = 0;
let revenue = 0;

for( i = 1; i< cellsCount; i++){
	// totalCount += i*i; // если количество зерен - квадрат очередности клетки
	totalCount += totalCount * 2; //если идти по классической версии задачи
}

totalWeight = totalCount * aruzza;

revenue = 20 * totalWeight / 1000;

console.log('count is ' + totalCount);
console.log('weight is ' + totalWeight);
console.log('revenue is ' + revenue + ' UAH');






