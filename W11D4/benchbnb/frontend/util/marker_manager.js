export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromBench(bench) {
    const {
      id, lat, lng, description,
    } = bench;
    const marker = new google.maps.Marker({
      position: { lat, lng },
      title: description,
    });
    marker.setMap(this.map);
    this.markers[id] = marker;
  }

  updateMarkers(benches) {
    const benchesObj = { ...benches };
    Object.keys(this.markers).forEach((id) => {
      if (!benchesObj[id]) {
        this.markers[id].setMap(null);
        delete this.markers[id];
      }
    });

    // eslint-disable-next-line no-restricted-syntax
    for (const bench of benches) {
      if (!this.markers[bench.id]) {
        this.createMarkerFromBench(bench);
      }
    }
  }
}
