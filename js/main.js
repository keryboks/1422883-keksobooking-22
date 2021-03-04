import {getRandomIntInclusive, getRandomFloat,arrayRandElement, zeroPad, arrayRandNumber,arrayRandFeatures,arrayRandCheckout,arrayRandCheckin,arrayRandPhotos, arrayRandDescription,arrayRandTitle, unique,featuresArray} from './util.js';
import {similarFeaturesCount,createFeatures, similarFeatures,typeArray,numbersArray,checkinArray,checkoutArray,photosArray,descriptionArray, titleArray} from './data.js';
import {createCard} from './popup.js';
import {typeOfPlace, priceOfPlace, timeIn, timeOut, houseInformation} from './form.js';
import{MAX_PRICE,inputPrice} from './validation.js'
import {map,mainPinIcon,mainPinMarker,marker,pinIcon} from './map.js';

console.log( similarFeatures);
let simCards =[];
  similarFeatures.forEach(card =>{
 simCards.push(createCard(card))
});


