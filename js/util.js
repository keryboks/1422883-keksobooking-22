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

const showAlert = (err) => {
  const mapContainer = document.querySelector('.map');
  const errorBlock = document.createElement('div');

  errorBlock.style.zIndex = '1000';
  errorBlock.style.position = 'absolute';
  errorBlock.style.left = '0';
  errorBlock.style.bottom = '50px';
  errorBlock.style.right = '0';
  errorBlock.style.padding = '10px 5px';
  errorBlock.style.fontSize = '16px';
  errorBlock.style.textAlign = 'center';
  errorBlock.style.color = 'white';
  errorBlock.style.backgroundColor = 'red';

  errorBlock.textContent = err;

  mapContainer.append(errorBlock);

  setTimeout(() => {
    errorBlock.remove();
  }, ALERT_SHOW_TIME);
};

export {
  showAlert,
  setDebounce
};
