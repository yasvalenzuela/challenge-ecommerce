import React, { Component } from 'react';
import Items from './../../../Items/';
import Cart from './../../../Cart/';
import Subtitle from './../../../Subtitle/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="cart">
          <Cart/>
        </div>
        <div className="subtitle">
          <subtitle/>
        </div>
        <div className="items">
          <Items/>
        </div>
      </div>
    );
  }
}

export default App;
