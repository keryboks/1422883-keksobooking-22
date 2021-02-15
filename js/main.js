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
console.log(getRandomFloat(1, 10, 5));






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


let titleArray = ['New York', 'Monaco', 'Minsk', 'Rome', 'Barcelona', 'Madrid']
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];
let typeArray = ['place', 'flat', 'house', 'bungalow'];
let featuresArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
function unique(arr) {
  let result = [];
  for (let str of featuresArray) {
    if (!result.includes(str)) {
      result.push(str);
    };
  };
  return result;

};


let checkinArray = ['12:00', '13:00', '14:00'];
let checkoutArray = ['12:00', '13:00', '14:00'];
let photosArray = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
let descriptionArray = ['The best hotel room', 'It could be bettet', 'The worst hotel number', 'Really bad', 'It is not our lvl'];
const similarFeaturesCount = 10;

const createFeatures = () => {

  let randomTypeIndex = arrayRandElement(typeArray);
  let randomNumbersArrayIndex = arrayRandNumber(numbersArray);
  let featuresUnique = unique(featuresArray);
  let randomCheckinIndex = arrayRandCheckin(checkinArray);
  let randomCheckoutIndex = arrayRandCheckout(checkoutArray);
  let randomPhotosIndex = arrayRandPhotos(photosArray);
  let randomRooms = getRandomIntInclusive(10, 30);
  let randomGuests = getRandomIntInclusive(1, 15);
  let randomPrice = getRandomIntInclusive(5000, 70000);
  let randomLocationX = getRandomFloat(35.650, 35.700, 3);
  let randomLocationY = getRandomFloat(139.70000, 139.80000, 5);
  let randomAddressX = getRandomIntInclusive(1, 100);
  let randomAddressY = getRandomIntInclusive(1, 100);
  let randomDescriptionIndex = arrayRandDescription(descriptionArray);
  let randTitleIndex = arrayRandTitle(titleArray);
 
  return {
    author :{
    avatar: 'img/avatars/user' + randomNumbersArrayIndex + '.png',
    }
    ,offer:{
    title: randTitleIndex,
    type: randomTypeIndex,
    features: featuresUnique,
    checkin: randomCheckinIndex,
    checkout: randomCheckoutIndex,
    photos: randomPhotosIndex,
    rooms: randomRooms,
    guests: randomGuests,
    price: randomPrice,
    address: 'location ' + randomAddressX + ' location ' + randomAddressY,
    description: randomDescriptionIndex,
    }
    ,location:{
    X: randomLocationX,
    Y: randomLocationY,
    }
  };
};

const similarFeatures = new Array(similarFeaturesCount).fill(null).map(() =>
createFeatures());
;
console.log( similarFeatures);
