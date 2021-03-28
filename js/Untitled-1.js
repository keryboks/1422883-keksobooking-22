//Код для оправки данныъ

// import { getData, sendData } from "./api";

// fetch('https://22.javascript.pages.academy/keksobooking/data')
//   .then((response) => response.json())
//   .then((data) => {
//     createCards(data);
//   });

//   setUserFormSumbit(функция, которая открывает меню)
//   //новый код отправки данныъ
//   getData((data) =>{
//     createCards(data)
//   });
//   setUserFormSumbit(функция, которая открывает меню)


//   //новый код для получения данных
//   let setUserFormSumbit = function(onSuccess){
//     adForm.addEventListener('submit',function(evt){
//       evt.preventDefault()
//       const formData = new FormData(evt.target);

//       sendData(
//     () => onSuccess(),
//     () => showAlert('Не удалось отправить форму'),
//     new FormData(evt.target),
//   );
//       });
//     };

//   // функция для передачи значений

//   const createCard = (similarCards) => {

//     const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
//     const cardElement = cardTemplate.cloneNode(true);

//     cardElement.querySelector('.popup__title').textContent = card.offer.tittle;
//     cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
//     cardElement.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;
//     cardElement.querySelector('.popup__type').textContent = card.offer.type;
//     cardElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей `;
//     cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
//     cardElement.querySelector('.popup__features').textContent = card.offer.fetures;
//     cardElement.querySelector('.popup__description').textContent = card.offer.description;
//     cardElement.querySelector('.popup__photo').src = card.offer.photos;
//     cardElement.querySelector('.popup__avatar').src = card.author.avatar;
//     return cardElement;

//     //Форма

//     let adForm = document.querySelector('.ad-form');
//     let setUserFormSumbit = function(onSuccess){
//     adForm.addEventListener('submit',function(evt){
//       evt.preventDefault()
//       const formData = new FormData(evt.target);
//       fetch(
//         'https://22.javascript.pages.academy/keksobooking',
//         {
//           method: 'POST',
//           body: formData,
//         },
//       )
//       .then((response) => {
//         if(response.ok){
//           onSuccess();
//         }else{
//           showAlert("Не удалось отправить форму");
//         }
//       })
//       .catch(() =>{
//         showAlert('Не удалось опарвить форму');
//       });
//     });
//   };

//   // функция показа сообщения

//   let showAlert = function(message){
//     let alertContainer = document.createElement('div');
//     alertContainer.style.zIndex = 100;
//     alertContainer.style.position='absolute';
//     alertContainer.style.left = 0;
//     alertContainer.style.right=0;
//     alertContainer.style.top=0;
//     alertContainer.style.padding='10px 3px';
//     alertContainer.style.fontSize='30px';
//     alertContainer.style.textAlign='center';
//     alertContainer.style.backgroundColor='red';
//     alertContainer.textContent=message;
//     document.body.append(alertContainer);
//     setTimeout(() =>{
//       alertContainer.remove();
//     },5000);
//   }

//   //модуля двух методов
//   let sendData = function(onSuccess){
//     fetch('https://22.javascript.pages.academy/keksobooking/data')
//   .then((response) => response.json())
//   .then((data) => {
//     createCards(data);
//   });
//   };

//   let sendData = function(onSuccess,onFail,body){
//     fetch(
//       'https://22.javascript.pages.academy/code-and-magick',
//       {
//         method: 'POST',
//         body,
//       },
//     )
//       .then((response) => {
//         if (response.ok) {
//           onSuccess();
//         } else {
//           onFail('Не удалось отправить форму. Попробуйте ещё раз');
//         }
//       })
//       .catch(() => {
//         onFail('Не удалось отправить форму. Попробуйте ещё раз');
//       });
//   };
//   }
