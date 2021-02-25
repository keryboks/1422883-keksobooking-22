
import {getRandomIntInclusive, getRandomFloat,arrayRandElement, zeroPad, arrayRandNumber,arrayRandFeatures,arrayRandCheckout,arrayRandCheckin,arrayRandPhotos, arrayRandDescription,arrayRandTitle, unique,featuresArray} from './util.js';
import {similarFeaturesCount,createFeatures, similarFeatures,typeArray,numbersArray,checkinArray,checkoutArray,photosArray,descriptionArray, titleArray} from './data.js';
import {createCard} from './popup.js';
var mapCanvas = document.querySelector('.map__canvas');
let simCards =[];
  similarFeatures.forEach(card =>{
 simCards.push(createCard(card))

})

 mapCanvas.appendChild(simCards[0])































