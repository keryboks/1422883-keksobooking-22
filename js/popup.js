
const createCard = (card) => {

  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = card.offer.tittle;
  cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = card.offer.type;
  cardElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей `;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  cardElement.querySelector('.popup__features').textContent = card.offer.fetures;
  cardElement.querySelector('.popup__description').textContent = card.offer.description;
  cardElement.querySelector('.popup__photo').src = card.offer.photos;
  cardElement.querySelector('.popup__avatar').src = card.author.avatar;
  return cardElement;
}
let adForm = document.querySelector('.ad-form');
let mapFilters = document.querySelector('.map__filters');
let adFormDisabled = document.querySelector('.ad-form--disabled');
let mapFiltersDisabled = document.querySelector('.map__filters--disabled');
adForm.addEventListener('change', function (evt) {
  if (evt.target.checked) {
    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');
  } else {
    adForm.classList.add('ad-form--disabled');
    mapFilters.classList.add('map__filters--disabled')
  };
});



export { createCard };

