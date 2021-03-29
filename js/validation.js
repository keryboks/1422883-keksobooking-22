let minLength = 30;
let maxLength = 100;
let maxPrice = 1000000;
let minPrice = 0;
let maxRoom = 100;
let notForGuests = 0;

let price = document.querySelector('#price');
let roomNumber = document.querySelector('#room_number');
let capicity = document.querySelector('#capacity');
let title = document.querySelector('#title');

title.addEventListener('input', function () {
  let valueLengthTitle = title.value.length;
  if (valueLengthTitle < minLength) {
    title.setCustomValidity('Введите ещё ' + (minLength - valueLengthTitle) + ' символов');
  } else if (valueLengthTitle > maxLength) {
    valueLengthTitle.setCustomValidity('Превышен лимит вводимых символов на ' + (valueLengthTitle - maxLength) + ' символов');
  } else {
    title.setCustomValidity('');
  }
  title.reportValidity();
});

price.addEventListener('input', function () {
  let valueLength = price.value;
  if (valueLength < minPrice) {
    price.setCustomValidity('До минмимальной суммы нужно ' + (minPrice - valueLength) + 'руб');
  } else if (valueLength > maxPrice) {
    price.setCustomValidity('Превышет лимит максимальной суммы на ' + (valueLength - maxPrice) + 'руб');
  } else {
    price.setCustomValidity('');
  }
  price.reportValidity();
});


const validationRoomsAndGuests = function () {
  const roomValue = Number(roomNumber.value);
  const guestsValue = Number(capicity.value);

  if (roomValue < guestsValue && guestsValue !== notForGuests) {
    roomNumber.setCustomValidity('Слишком мало комнат');
  } else if (roomValue === maxRoom & guestsValue !== notForGuests) {
    roomNumber.setCustomValidity('Такое количество комнат не для гостей');
  } else if (roomValue !== maxRoom && guestsValue === notForGuests) {
    roomNumber.setCustomValidity('Выберите другой вариант');
  } else {
    roomNumber.setCustomValidity('');
  }

  roomNumber.reportValidity();
};

roomNumber.addEventListener('change', function () {
  validationRoomsAndGuests();
});

capicity.addEventListener('change', function () {
  validationRoomsAndGuests();
});

