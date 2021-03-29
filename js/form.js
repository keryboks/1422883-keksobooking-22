import {
  removeMainPinIcon,
  setDefaultAddress,
  resetMainPinMarker,
  displayOnMap
} from './map.js';
import { sendData } from './fetch.js';

let main = document.querySelector('main');
let typeOfPlace = document.querySelector('#type');
let priceOfPlace = document.querySelector('#price');
let timeIn = document.querySelector('#timein');
let timeOut = document.querySelector('#timeout');
let adForm = document.querySelector('.ad-form');
let mapFilters = document.querySelector('.map__filters');
let textFields = document.querySelectorAll('fieldset');
let selects = document.querySelectorAll('select');
let adFormReset = document.querySelector('.ad-form__reset');

const houseInformation = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const keys = {
  Escape: 'Escape',
  Esc: 'Esc',
};

typeOfPlace.addEventListener('change', function () {

  priceOfPlace.min = houseInformation[typeOfPlace.value];
  priceOfPlace.placeholder = houseInformation[typeOfPlace.value];
});

timeIn.addEventListener('change', function () {
  if (timeIn.value) {
    timeOut.value = timeIn.value;
  }
});

timeOut.addEventListener('change', function () {
  if (timeOut.value) {
    timeIn.value = timeOut.value;
  }
});

let activateForm = function () {

  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');

  for (let i = 0; i < textFields.length; i++) {
    textFields[i].removeAttribute('disabled');
  }
  for (let i = 0; i < selects.length; i++) {
    selects[i].removeAttribute('disabled');
  }
};

let disableForm = function () {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');

  for (let i = 0; i < textFields.length; i++) {

    textFields[i].setAttribute('disabled', 'disabled');
  }

  for (let i = 0; i < selects.length; i++) {
    selects[i].setAttribute('disabled', 'disabled');
  }
};

disableForm();

let closeMessage = function (message) {
  document.addEventListener('keydown', function (evt) {
    if (evt.key === keys.Escape || evt.key === keys.Esc) {
      message.remove();
    }
  });
};

document.addEventListener('click', function () {
  let errorMessage = document.querySelector('.error');
  let successMessage = document.querySelector('.success');
  if (errorMessage) {
    errorMessage.remove();
  } if (successMessage) {
    successMessage.remove();
  }
});

let resetForm = function () {
  removeMainPinIcon();
  adForm.reset();
  mapFilters.reset();
  resetMainPinMarker();
  displayOnMap();
  setDefaultAddress();
};

let showSuccessMessage = () => {
  let messageSuccessTemplate = document.querySelector('#success').content;
  let messageSuccessShow = messageSuccessTemplate.querySelector('.success');
  main.appendChild(messageSuccessShow);
  closeMessage(messageSuccessShow);
  resetForm();
};

let showErrorMesage = () => {
  let messageErrorTemplate = document.querySelector('#error').content;
  let messageErrorShow = messageErrorTemplate.querySelector('.error');

  closeMessage(messageErrorShow);

  main.appendChild(messageErrorShow);
};

const setUserFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(showSuccessMessage, showErrorMesage, new FormData(evt.target));
  });
};

setUserFormSubmit();


adFormReset.addEventListener('click', function (evt) {
  evt.preventDefault();
  resetForm();
});

export {
  setUserFormSubmit,
  activateForm,
  typeOfPlace,
  priceOfPlace,
  timeIn,
  timeOut,
  houseInformation,
  adForm,
  mapFilters,
  disableForm
};
