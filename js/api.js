let getData = function(onSuccess){
  fetch(' https://22.javascript.pages.academy/keksobooking/data')
  .then((response)=> response.json())
  .then((data) => {
    similarFeatures(data);
  });
};

let sendData = function(onSuccess, onFail, body){
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
    )
      .then((response) => {
        if(response.ok){
          onSuccess();
        }else{
          onFail('Не удалось отпарвить форму');
        }
      })
      .catch(() => {
        onFail('Не удалось отправить форму');
      });
    };

    export{getData,sendData};
