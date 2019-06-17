import React from 'react';

import Aux from '../../../hoc/Auxiliary';

const orderSummary = ( props ) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(ing => (
        <li key={ing}><span style={{textTransform: 'capitalize'}}>{ing}</span>: {props.ingredients[ing]}</li>
    ));
    return (
        <Aux>
            <h3>Your order summary</h3>
            <p>A Delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
};

export default orderSummary;