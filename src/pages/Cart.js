import React, { useContext } from 'react'
import styled from 'styled-components';
import { Colors } from '../theme';
import ProductContext from '../context';
import { GiCancel } from 'react-icons/gi';
import { confirmAlert } from 'react-confirm-alert';

const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1%;
background-color: ${Colors.PrimaryBackground};
`;

const CartContainer = styled.div`
    width: 90%;
    background-color: ${Colors.SecondaryBackground};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1%;
    color: ${Colors.TextBlack};
    border: 1px solid ${Colors.Shadow};
    box-shadow: 0px 0px 10px 1px ${Colors.Shadow};

`;

const CartItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Colors.PrimaryBackground};
    margin: 1%;
    border: 1px solid ${Colors.Secondary};
`;

const ItemImage = styled.img`
    width: 30%;  
`;

const ItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const ItemDetail = styled.h5`
    align-self: 'center';
`;

const Cart = () => {

    // eslint-disable-next-line
    const { state, dispatch } = useContext(ProductContext);

    const remove = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { ...product } });
        confirmAlert({
            title: 'Cart',
            message: 'Item removed from your Cart Successfully',
            buttons: [
                {
                    label: 'Okay',
                    onClick: () => void 0,
                }
            ],
            closeOnEscape: true,
            closeOnClickOutside: true,
        });
    }

    const products = state.cart;

    return (
        <Body>
            <CartContainer>
                {
                    products.map((product, index) => (
                        <CartItemContainer key={index}>
                            <ItemImage></ItemImage>
                            <ItemDetails>
                                <ItemDetail>Title: {product.title}</ItemDetail>
                                <ItemDetail>Price: {product.price}</ItemDetail>
                                <ItemDetail>Quantity: {product.quantity}</ItemDetail>
                                <ItemDetail>Size: {product.size}</ItemDetail>
                                <ItemDetail>Color: {product.color}</ItemDetail>
                                <ItemDetail onClick={() => remove(product)}><GiCancel /></ItemDetail>
                            </ItemDetails>
                        </CartItemContainer>
                    ))
                }
                <ItemDetail>Total: {state.total}</ItemDetail>
            </CartContainer>
        </Body>
    )
}

export default Cart
