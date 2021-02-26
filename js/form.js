let typeOfPlace = document.querySelector('#type');
let priceOfPlace = document.querySelector('#price');
let timeIn = document.querySelector('#timein');
let timeOut = document.querySelector('#timeout')


let houseInformation ={
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};


typeOfPlace.addEventListener('change',function(){
  priceOfPlace.min = houseOfInformation[typeOfPlace.value]  ;
priceOfPlace.placeholder = houseOfInformation[typeOfPlace.value];

});


timeIn.addEventListener('change',function(){
if(timeIn.value){
timeIn.value = timeOut.value;
}
});

timeOut.addEventListener('change',function(){
  if(timeOut.value){
  timeOut.value = timeIn.value;
  }
  });
export{typeOfPlace,priceOfPlace,timeIn,timeOut,houseInformation};
