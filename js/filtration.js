const PriceRange = {
  LOW: {
    MIN: 0,
    MAX: 10000,
  },
  MIDDLE: {
    MIN: 10000,
    MAX: 50000,
  },
  HIGH: {
    MIN: 50000,
    MAX: 1000000000000,
  },
};

let mapFilters = document.querySelector(".map__filters");
let housingType = mapFilters.querySelector("#housing-type");
let housingPrice = mapFilters.querySelector("#housing-price");
let housingRooms = mapFilters.querySelector("#housing-rooms");
let housingGuests = mapFilters.querySelector("#housing-guests");
let housingFeatures = mapFilters.querySelector("#housing-features");

let setFiltrationItem = function (evt, item, key) {
  return evt.value === "any" ? true : evt.value === item[key];
};

let filterByType = function (item) {
  return setFiltrationItem(housingType, item.offer, "type");
};

let setFiltrationByPrice = function (item) {
  let filteringPrice = PriceRange[housingPrice.value.toUpperCase()];
  return filteringPrice ? item.offer.price >= filteringPrice.MIN && item.offer.price <= filteringPrice.MAX : true;
};

let filterByRooms = function (item) {
  return setFiltrationItem(housingRooms, item.offer, "rooms");
};

let filterByGuest = function (item) {
  return setFiltrationItem(housingGuests, item.offer, "guests");
};

let filterByFeature = function (item) {
  let cheackedFeaturesItem = housingFeatures.querySelectorAll("input:checked");
  return Array.from(cheackedFeaturesItem).every(function (element) {
    return item.offer.features.includes(element.value);
  });
};

let filterChange = function (array) {
  return array.filter(filterByType).filter(setFiltrationByPrice).filter(filterByRooms).filter(filterByGuest).filter(filterByFeature);
};

export { filterChange };
