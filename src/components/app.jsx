import React, { Component } from "react";
import Flat from "./flat";
import Marker from "./marker";
import GoogleMapReact from 'google-map-react';
// import flats from ".data/flats";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      selectedFlat: null,
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ flats: data });
      });
  }

  selectFlat = (flat) => {
    console.log(flat);
    this.setState({
      selectedFlat: flat,
    });
  }

  render () {
    let center = {
      lat: 48.8566,
      lng: 2.3522
    };

    if (this.state.selectedFlat) {
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      };
    }

    return (
      <div>
      <div className="flat-list">
        {this.state.flats.map((flat) =>
          <Flat
            flat={flat}
            key={flat.id}
            selectFlat={this.selectFlat}
            selectedFlat={this.state.selectedFlat}
            />
      )}

      </div>
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBiVzxLyZCW5pQOnWemDlN6c_TVxZEYmeM" }}
            center={center}
            zoom={11} >

            {this.state.flats.map((flat) => {
              return <Marker lat={flat.lat} lng={flat.lng} text={flat.price} key={flat.id} />;
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
