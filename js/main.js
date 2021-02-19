


import {getRandomIntInclusive, getRandomFloat} from './util.js';
import {createFeatures,similarFeatures,similarFeaturesCount} from './data.js';




















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



