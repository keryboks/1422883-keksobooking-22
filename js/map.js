import { createCard } from './popup.js'
import { onErrorGetData, debounce } from './util.js';
import { getData } from './fetch.js';
import { filterChange } from './filtration.js';
import { mapFilters, activeForm } from './form.js';

const SIMILAR_POPUP_COUNT = 10;

let markers = [];
let numbersAfterDot = 5;
let address = document.querySelector('#address');
let arrayFromServer;
let arrayModefied = [];
let LAT = 35.6895;
let LNG = 139.692;
let advertisements = []

let setDefaultAddress = function () {
  address.value = LAT + ',' + LNG;
};
const map = L.map('map-canvas')
  .on('load', () => {
    address.setAttribute('readonly', true);
    setDefaultAddress()
  })
  .setView({
    lat: LAT,
    lng: LNG,
  }, 10);
const pinIcon = L.icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
})


L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
)
  .addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const mainPinMarker = L.marker(
  {
    lat: LAT,
    lng: LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);


let resetMainPinMarker = function () {
  mainPinMarker.setLatLng(L.latLng(LAT, LNG));
}


mainPinMarker.on('moveend', (evt) => {

  address.value = evt.target.getLatLng().lat.toFixed(numbersAfterDot) + ', ' + evt.target.getLatLng().lng.toFixed(numbersAfterDot);
});


let createMarker = function (author, offer, location) {

  const marker = L.marker({

    lat: location.lat,
    lng: location.lng,
  },
    {
      icon: pinIcon,
    });

  marker
    .addTo(map)
    .bindPopup(createCard({ author, offer }),
  );
  markers.push(marker)

}


let genMap = function (data) {
  data.slice(0, SIMILAR_POPUP_COUNT).forEach(({ author, offer, location }) => {

    createMarker(author, offer, location);

  })
}


let layerGroup = L.layerGroup().addTo(map)


let removeElements = function () {
  layerGroup.clearLayers();
}


let displayOnMap = function () {
  mapFilters.reset();
  mapFiltersChange()
}

let removeMainPinIcon = function () {
  markers.forEach(item => {
    map.removeLayer(item);
  });
};

let mapFiltersChange = debounce(function () {
  removeElements();
  removeMainPinIcon();
  let filterData = filterChange(advertisements);
  filterData.forEach(({ author, offer, location }) => {

    createMarker(author, offer, location);

  })
})


let onSuccess = function (data) {
  advertisements = data.slice(0);
  genMap(data)
  mapFilters.addEventListener('change', mapFiltersChange)
  activeForm()
}


getData(onSuccess, onErrorGetData);



export { removeMainPinIcon, displayOnMap, genMap, createMarker, arrayFromServer, arrayModefied, setDefaultAddress, resetMainPinMarker };
