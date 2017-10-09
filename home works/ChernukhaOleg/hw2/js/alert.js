let name = prompt('What is your name?');
let age = prompt('How old are you?');
let gender = confirm('You are a man?');

if (gender == true) {
    gender = 'man';

}else {
    gender = 'woman'
}
let pet = prompt('who is your favorite pet ?');

alert('Hi, '+ name +'. You are '+ gender +', you are '+ age + ' years old. Is it your '+ pet + ' ?');






