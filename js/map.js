import{simCards} from './data.js'
import{createCard} from './popup.js'
const map = L.map('map-canvas')
.on('load',() =>{
console.log('Карта Инициализирована');
})
.setView({
   lat: 35.6895,
   lng: 139.692,
  },10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  )
  .addTo(map);


  const pinIcon = L.icon({
    iconURL:'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize:[40,40],
    iconAnchor:[20,40],
  })

  const mainPinIcon = L.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
    iconSize: [52,52],
    iconAnchor: [26,52],
  });

  const mainPinMarker = L.marker(
    {
      lat: 35.6895,
      lng: 139.692,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  mainPinMarker.addTo(map);

mainPinMarker.on('move',(evt)=>{
    console.log(evt.target.getLatLng());
});


 simCards.forEach(({author,offer,location})=>{

  const marker = L.marker({

    lat:location.y,
    lng:location.x,
  },

  {
    icon: pinIcon,
  });

  marker
  .addTo(map)
  .bindPopup(createCard({author,offer}),
  );
 });

console.log(addOnMap);

export{map,mainPinIcon,mainPinMarker};
