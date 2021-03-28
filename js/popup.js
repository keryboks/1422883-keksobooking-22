const createCard = (card) => {

  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const cardElement = cardTemplate.cloneNode(true);
  const {offer, author} = card;

  const titleInput = cardElement.querySelector('.popup__title')
  const addressInput = cardElement.querySelector('.popup__text--address')
  const priceInput = cardElement.querySelector('.popup__text--price')
  const typeInput = cardElement.querySelector('.popup__type')
  const roomsInput =cardElement.querySelector('.popup__text--capacity')
  const checkinInput = cardElement.querySelector('.popup__text--time')
  const featuresInput = cardElement.querySelector('.popup__features')
  const descriptionInput =cardElement.querySelector('.popup__description')
  const photosIMG = cardElement.querySelector('.popup__photo')
  const avatarIMG = cardElement.querySelector('.popup__avatar')

  offer.title ?  titleInput.textContent = offer.title : titleInput.remove();
  offer.address ? addressInput.textContent = offer.address : addressInput.remove();
  offer.price ? priceInput.textContent = `${offer.price} ₽/ночь` : priceInput.remove();
  offer.type ? typeInput.textContent = offer.type : offer.type.remove();
  offer.rooms ? roomsInput.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей ` : roomsInput.remove();
  offer.checkin ? checkinInput.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}` : checkinInput.remove();
  offer.features ? featuresInput.textContent = offer.fetures : featuresInput.remove();
  offer.description ? descriptionInput.textContent = offer.description : descriptionInput.remove();
  offer.photo ? photosIMG.src = offer.photos : photosIMG.remove();
  author.avatar ? avatarIMG.src = author.avatar : avatarIMG.remove();
  return cardElement;
}

export { createCard };