import React from 'react'
import styled from 'styled-components';
import { Colors } from '../theme';

const CartButton = props => {

    const Cart = styled.button`
        margin: 10px;
        align-self: center;
        height: 60px;
        width: 120px;
        border-radius: 60px;
        background-color: ${Colors.Secondary};
        color: ${Colors.TextWhite};
        box-shadow: 0px 0px 10px 1px ${Colors.Shadow};
        &:hover {
            box-shadow: 0px 0px 10px 5px ${Colors.Shadow};
        }
    `;

    return (
        <Cart onClick={props.onClick}>Add To Cart</Cart>
    )
}

export default CartButton
