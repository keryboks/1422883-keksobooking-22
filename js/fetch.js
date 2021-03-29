const getData = function (onSuccess, onFail) {
  fetch("https://22.javascript.pages.academy/keksobooking/data")
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail("При загрузке данных с сервера произошла ошибка");
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    "https://22.javascript.pages.academy/keksobooking",
    {
      method: "POST",
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail("Не удалось отправить форму. Попробуйте еще раз");
      }
    })
    .catch(() => {
      onFail("Не удалось отправить форму. Попробуйте еще раз");
    });
};
export { sendData, getData};
