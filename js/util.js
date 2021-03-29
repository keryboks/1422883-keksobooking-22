let DEBOUNCE_INTERVAL = 500;
let ALERT_SHOW_TIME = 500;

let setDebounce = function (fun) {

  let lastTimeout = null;
  return function () {
    let args = arguments;
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      fun.apply(null, args);
    }, DEBOUNCE_INTERVAL);
  };
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, number) {
  let a = Math.random() * (max - min) + min;
  let b = parseFloat(a.toFixed(number));
  return b;
}

function arrayRandElement(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

function zeroPad(num, places) {
  return String(num).padStart(places, "0");
}

function arrayRandNumber(arr) {
  let randNumber = Math.floor(Math.random() * arr.length);
  return zeroPad(arr[randNumber], 2);
}

function arrayRandFeatures(arr) {
  let randFeatures = Math.floor(Math.random() * arr.length);
  return arr[randFeatures];
}

function arrayRandCheckout(arr) {
  let randCheckout = Math.floor(Math.random() * arr.length);
  return arr[randCheckout];
}

function arrayRandCheckin(arr) {
  let randCheckin = Math.floor(Math.random() * arr.length);
  return arr[randCheckin];
}

function arrayRandPhotos(arr) {
  let randPhotos = Math.floor(Math.random() * arr.length);
  return arr[randPhotos];
}

function arrayRandDescription(arr) {
  let randDescription = Math.floor(Math.random() * arr.length);
  return arr[randDescription];
}

function arrayRandTitle(arr) {
  let randTitle = Math.floor(Math.random() * arr.length);
  return arr[randTitle];
}

const showAlert = (err) => {
  const mapContainer = document.querySelector(".map");
  const errorBlock = document.createElement("div");

  errorBlock.style.zIndex = "1000";
  errorBlock.style.position = "absolute";
  errorBlock.style.left = "0";
  errorBlock.style.bottom = "50px";
  errorBlock.style.right = "0";
  errorBlock.style.padding = "10px 5px";
  errorBlock.style.fontSize = "16px";
  errorBlock.style.textAlign = "center";
  errorBlock.style.color = "white";
  errorBlock.style.backgroundColor = "red";

  errorBlock.textContent = err;

  mapContainer.append(errorBlock);

  setTimeout(() => {
    errorBlock.remove();
  }, ALERT_SHOW_TIME);
};

export {
  showAlert,
  setDebounce,
  getRandomIntInclusive,
  getRandomFloat,
  arrayRandElement,
  zeroPad,
  arrayRandNumber,
  arrayRandFeatures,
  arrayRandCheckout,
  arrayRandCheckin,
  arrayRandPhotos,
  arrayRandDescription,
  arrayRandTitle,
};
