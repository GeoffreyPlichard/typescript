// Wrap google map pour exposer uniquement les méthodes dont on a besoin pour
// éviter que d'autres personnes puissent accéder aux autres méthodes

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
}