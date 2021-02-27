let typeOfPlace = document.querySelector('#type');
let priceOfPlace = document.querySelector('#price');
let timeIn = document.querySelector('#timein');
let timeOut = document.querySelector('#timeout')


let houseInformation ={
  bungalow: 0,
  flat: 1000,
  house: 5000,
  place: 10000,
};


typeOfPlace.addEventListener('change',function(){
  priceOfPlace.min = houseInformation[typeOfPlace.value]  ;
priceOfPlace.placeholder = houseInformation[typeOfPlace.value];

});


timeIn.addEventListener('change',function(){
if(timeIn.value){
timeOut.value = timeIn.value;
}
});

timeOut.addEventListener('change',function(){
  if(timeOut.value){
  timeIn.value = timeOut.value;
  }
  });
export{typeOfPlace,priceOfPlace,timeIn,timeOut,houseInformation};
