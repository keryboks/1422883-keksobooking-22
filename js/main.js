function getRandomIntInclusive(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
console.log(getRandomIntInclusive(1, 20));


function getRandomFloat(min, max,number) {
let a = Math.random() * (max - min) + min;
let b = parseFloat(a.toFixed(number));
if (b <0) {
    console.log("Ошибка!минимальное число меньше нуля");
}if(max<min){
    console.log("Ошибка!Максимальное значение больше,чем минимальное");
}
return b ;
}
console.log(getRandomFloat(1,10,4));
