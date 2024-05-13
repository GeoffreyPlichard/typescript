// Wrap google map pour exposer uniquement les méthodes dont on a besoin pour
// éviter que d'autres personnes puissent accéder aux autres méthodes

// User et Company doivent contenir location, markerContent
export interface Mappable {
  location: google.maps.LatLngLiteral;
  markerContent(): string;
  color: string;
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
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}