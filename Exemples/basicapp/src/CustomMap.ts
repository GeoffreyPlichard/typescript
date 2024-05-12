// Wrap google map pour exposer uniquement les méthodes dont on a besoin pour
// éviter que d'autres personnes puissent accéder aux autres méthodes

interface Mappable {
  location: google.maps.LatLngLiteral
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(id: string) {
    // Invoque la class Map en passant l'élement html hôte
    this.googleMap = new google.maps.Map(document.getElementById(id) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }
}