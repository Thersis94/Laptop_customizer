import React, { Component } from 'react';
import Features from './Components/Customize_Laptop/Features';
import Summary from './Components/Shopping_Cart/Summary';
import Total from './Components/Shopping_Cart/Total/Total';
import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});



class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    //Final render----------------------------------------------------------------------------------
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features
              props={this.props}
              state={this.state}
              updateFeature={this.updateFeature}
            />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <Summary
              state={this.state}
            />
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                <Total
                state={this.state}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
