import React from 'react';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});


export default function Total(props) {
    const total = Object.keys(props.state.selected).reduce(
        (acc, curr) => acc + props.state.selected[curr].cost,
        0
    );

    return (
        <div>
            {USCurrencyFormat.format(total)}
        </div>
    )
}