import React, { useContext } from 'react'
import styled from 'styled-components';
import { Colors } from '../theme';
import ProductContext from '../context';
import { GiCancel } from 'react-icons/gi';
import { confirmAlert } from 'react-confirm-alert';
import { ColorButton } from '../components';

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
    background-color: ${Colors.PrimaryBackground};
    margin: 1%;
    border: 1px solid ${Colors.Secondary};
`;

const ItemImage = styled.img`
    width: 30%;
    @media (max-width: 768px) {
        width: 60%;
    }
`;

const ItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media (max-width: 768px) {
        width: 40%;
        flex-direction: column;
        align-items: center;
    }
`;

const RemoveButton = styled.span`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-self: center;
    text-align: center;
    justify-content: space-evenly;
    width: 100%;
    margin: 10px;
    color: ${Colors.Secondary};
    background-color: ${Colors.AlternativeBackground};
    border: 2px solid ${Colors.Secondary};
    border-radius: 25%;
    &:hover{
        background-color: ${Colors.PrimaryButton};
    }
    @media (max-width: 768px) {
        width: 70%;
    }
`;
const ItemDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-self: center;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: row;
    }
`;

const ItemDetailTitle = styled.h5`
    align-self: center;
    text-align: center;
`;

const ItemDetailValue = styled.p`
    align-self: center;
    text-align: center;
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
                                <ItemDetail>
                                    <ItemDetailTitle>Item: </ItemDetailTitle>
                                    <ItemDetailValue>{product.title}</ItemDetailValue>
                                </ItemDetail>
                                <ItemDetail>
                                    <ItemDetailTitle>Price: </ItemDetailTitle>
                                    <ItemDetailValue>{product.price}</ItemDetailValue>
                                </ItemDetail>
                                <ItemDetail>
                                    <ItemDetailTitle>Quantity: </ItemDetailTitle>
                                    <ItemDetailValue>{product.quantity}</ItemDetailValue>
                                </ItemDetail>
                                <ItemDetail>
                                    <ItemDetailTitle>Size: </ItemDetailTitle>
                                    <ItemDetailValue>{product.size}</ItemDetailValue>
                                </ItemDetail>
                                <ItemDetail>
                                    <ItemDetailTitle>Color: </ItemDetailTitle>
                                    <ColorButton color={product.color} fixed />
                                </ItemDetail>
                                <ItemDetail>
                                    <ItemDetailTitle>Total: </ItemDetailTitle>
                                    <ItemDetailValue>{product.quantity * product.price}</ItemDetailValue>
                                </ItemDetail>
                                <RemoveButton onClick={() => remove(product)}>
                                    <ItemDetailTitle>REMOVE</ItemDetailTitle>
                                    <ItemDetailValue><GiCancel size={20} /></ItemDetailValue>
                                </RemoveButton>
                            </ItemDetails>
                        </CartItemContainer>
                    ))
                }
                <ItemDetail style={{ flexDirection: 'row' }}>
                    <ItemDetailTitle>Grand Total:</ItemDetailTitle>
                    <ItemDetailValue>{state.total}</ItemDetailValue>
                </ItemDetail>
            </CartContainer>
        </Body>
    )
}

export default Cart
