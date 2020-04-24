import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component {
  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13,
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.map.addListener('idle', () => {
      const LatLngBounds = this.map.getBounds();
      const southWest = LatLngBounds.getSouthWest();
      const northEast = LatLngBounds.getNorthEast();
      const bounds = {
        southWest: { lat: southWest.lat(), lng: southWest.lng() },
        northEast: { lat: northEast.lat(), lng: northEast.lng() },
      };
      // console.log(bounds);
      this.props.updateFilter(bounds);
    });
    this.MarkerManager = new MarkerManager(this.map);

    const { benches } = this.props;
    this.MarkerManager.updateMarkers(benches);
  }

  componentDidUpdate() {
    const { benches } = this.props;
    this.MarkerManager.updateMarkers(benches);
  }

  render() {
    return (
      <div id="map-container" ref={(map) => { this.mapNode = map; }} />
    );
  }
}

export default BenchMap;
