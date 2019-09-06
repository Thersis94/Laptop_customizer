import React from 'react';
import Summary_Option from './Cart_Items/Summary_Option';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});


export default function Summary(props) {
    const summary = Object.keys(props.state.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.state.selected[feature];
        console.log(props)
  
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        );
      });




    return (
        <div>
            {summary}
        </div>
    )
}