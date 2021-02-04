function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}



function getRandomFloat(min, max) {
    let a = Math.random() * (max - min) + min;
   let b = parseFloat(a.toFixed(1));
return b;
  }

