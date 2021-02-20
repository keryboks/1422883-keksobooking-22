function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
console.log(getRandomIntInclusive(1, 20));


function getRandomFloat(min, max, number) {
  let a = Math.random() * (max - min) + min;
  let b = parseFloat(a.toFixed(number));
  if (b < 0) {
    console.log("Ошибка!минимальное число меньше нуля");
  } if (max < min) {
    console.log("Ошибка!Максимальное значение больше,чем минимальное");
  }
  return b;
}

function arrayRandElement(arr) {
  let rand = Math.floor(Math.random() * arr.length);


  return arr[rand];
}





function zeroPad(num, places) {
  return String(num).padStart(places, '0')
}
console.log(zeroPad(2, 2));

function arrayRandNumber(arr) {
  console.log(arr);
  let randNumber = Math.floor(Math.random() * arr.length);

  return zeroPad(arr[randNumber], 2);
}


let featuresArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

function arrayRandFeatures(arr) {
  let randFeatures = Math.floor(Math.random() * arr.length);
  return arr[randFeatures];

};
function arrayRandCheckout(arr) {
  let randCheckout = Math.floor(Math.random() * arr.length);
  return arr[randCheckout];

};

function arrayRandCheckin(arr) {
  let randCheckin = Math.floor(Math.random() * arr.length);
  return arr[randCheckin];

};

function arrayRandPhotos(arr) {
  let randPhotos = Math.floor(Math.random() * arr.length);
  return arr[randPhotos];

};

function arrayRandDescription(arr) {
  let randDescription = Math.floor(Math.random() * arr.length);
  return arr[randDescription];

};
function arrayRandTitle(arr) {
  let randTitle = Math.floor(Math.random() * arr.length);
  return arr[randTitle];

};
function unique(arr) {
  let result = [];
  for (let str of featuresArray) {
    if (!result.includes(str)) {
      result.push(str);
    };
  };
  return result;

};

export {getRandomIntInclusive, getRandomFloat,arrayRandElement, zeroPad, arrayRandNumber,arrayRandFeatures,arrayRandCheckout,arrayRandCheckin,arrayRandPhotos, arrayRandDescription,arrayRandTitle, unique,featuresArray};
