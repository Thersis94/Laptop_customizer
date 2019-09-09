import React from 'react';
import slugify from 'slugify';
import Feature_Item from './Filter_Options/Feature_item';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});


export default function Features(props) {
    const features = Object.keys(props.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = props.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (

                <Feature_Item 
                itemHash={itemHash}
                feature={feature}
                item={item}
                state={props.state}
                updateFeature={props.updateFeature}
                />
            );
        });
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>
        );
    }
    )
    return (
        <div>
            {features}
        </div>

    )
}


