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
  
        return (
          <Summary_Option
          key={featureHash}
          selectedOption={selectedOption}
          />
        );
      });




    return (
        <div>
            {summary}
        </div>
    )
}