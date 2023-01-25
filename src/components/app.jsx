import React, { Component } from "react";
import Flat from "./flat";
// import flats from ".data/flats";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      flats: [],
      selectedFlat: null
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ flats: data });
      });
  }

  render () {
    return (
    <div>
      <div className="flat-list">
      {this.state.flats.map((flat) =>
       <Flat flat={flat} key={flat.id} />
      )}

     </div>
      <div className="map-container">
      </div>
    </div>
    );
  }
}

export default App;
