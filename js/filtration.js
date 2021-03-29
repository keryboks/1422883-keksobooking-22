const PriceRange = {
  LOW: {
    MIN: 0,
    MAX: 10000
  },
  MIDDLE: {
    MIN: 10000,
    MAX: 50000
  },
  HIGH: {
    MIN: 50000,
    MAX: 1000000000000,
  }
};
let mapFilters = document.querySelector(".map__filters");
let housingType = mapFilters.querySelector("#housing-type");
let housingPrice = mapFilters.querySelector("#housing-price");
let housingRooms = mapFilters.querySelector("#housing-rooms");
let housingGuests = mapFilters.querySelector("#housing-guests");
let housingFeatures = mapFilters.querySelector("#housing-features");

let filtrationItem = function (evt, item, key) {
  return evt.value === "any" ? true : evt.value === item[key];
};

let filterByType = function (item) {
  return filtrationItem(housingType, item.offer, "type");
};

var filtrationByPrice = function (item) {
  var filteringPrice = PriceRange[housingPrice.value.toUpperCase()];
  return filteringPrice ? item.offer.price >= filteringPrice.MIN && item.offer.price <= filteringPrice.MAX : true;
};

let filterByRooms = function (item) {
  return filtrationItem(housingRooms, item.offer, "rooms");
};

let filterByGuest = function (item) {
  return filtrationItem(housingGuests, item.offer, "guests");
};

let filterByFeature = function (item) {
  let cheackedFeaturesItem = housingFeatures.querySelectorAll("input:checked");
  return Array.from(cheackedFeaturesItem).every(function (element) {
    return item.offer.features.includes(element.value);
  });
};

let filterChange = function (array) {
  return array.filter(filterByType).filter(filtrationByPrice).filter(filterByRooms).filter(filterByGuest).filter(filterByFeature);
};

export { filterChange };
