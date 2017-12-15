import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes.js'
import Fish from './Fish';

class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      fishes: {},
      orders: {}
    };
  }

  addFish(fish) {
    const fishes = {...this.state.fishes};
    const timeStamp = Date.now();
    fishes[`fish-${timeStamp}`] = fish
    this.setState({ fishes });
  }

  loadSamples() {
    this.setState({ fishes: sampleFishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          {
            Object
              .keys(this.state.fishes)
              .map(key => <Fish key={key} details={this.state.fishes[key]} />)
          }
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;