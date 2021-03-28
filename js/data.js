import { getRandomIntInclusive, getRandomFloat, arrayRandElement, zeroPad, arrayRandNumber, arrayRandFeatures, arrayRandCheckout, arrayRandCheckin, arrayRandPhotos, arrayRandDescription, arrayRandTitle, unique, featuresArray } from './util.js'

let typeArray = ['place', 'flat', 'house', 'bungalow'];
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];
let checkinArray = ['12:00', '13:00', '14:00'];
let checkoutArray = ['12:00', '13:00', '14:00'];
let photosArray = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
let descriptionArray = ['The best hotel room', 'It could be bettet', 'The worst hotel number', 'Really bad', 'It is not our lvl'];
let titleArray = ['New York', 'Monaco', 'Minsk', 'Rome', 'Barcelona', 'Madrid'];

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
    author: {
      avatar: 'img/avatars/user' + randomNumbersArrayIndex + '.png',
    }
    , offer: {
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
    , location: {
      X: randomLocationX,
      Y: randomLocationY,
    }
  };
};

const similarFeatures = new Array(similarFeaturesCount).fill(null).map(() =>
  createFeatures());

export { similarFeaturesCount, createFeatures, similarFeatures, typeArray, numbersArray, checkinArray, checkoutArray, photosArray, descriptionArray, titleArray };
