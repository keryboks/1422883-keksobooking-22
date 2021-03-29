const getData = function (onSuccess, onFail) {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then(function (response) {
      return response.json();
    }
    )
    .then(function (data) {
      onSuccess(data);
    })
    .catch(function () {
      onFail('При загрузке данных с сервера произошла ошибка');
    });
};

const sendData = function (onSuccess, onFail, body) {
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then(function (response) {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте еще раз');
      }
    })
    .catch(function () {
      onFail('Не удалось отправить форму. Попробуйте еще раз');
    });
};

export {sendData, getData};
