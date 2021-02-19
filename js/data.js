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

console.log( similarFeatures);

export{similarFeaturesCount,createFeatures, similarFeatures};
