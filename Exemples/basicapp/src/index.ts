// Need to add this to get google types working
/// <reference types="@types/google.maps" />

// import { User } from './User';
// import { Company } from './Company';


// Invoke the Map class and pass the div element to attach it
new google.maps.Map(document.getElementById('map') as HTMLElement, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
});