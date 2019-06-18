import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

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
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType={'Danger'} clicked={props.purchaseCanceled} >CANCEL</Button>
            <Button btnType={'Success'} clicked={props.purchaseContinued} >CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;