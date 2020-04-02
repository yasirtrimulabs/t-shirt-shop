import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import { Colors } from '../theme';
import { useHistory } from 'react-router-dom';
import ProductContext from '../context';
import ColorsRadio from './ColorsRadio';
import { SizesRadio } from '.';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const ProductCard = styled.div`
    margin: 2%;
    width: 25%;
    background-color: ${Colors.SecondaryBackground};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1%;
    color: ${Colors.TextBlack};
    box-shadow: 0px 0px 10px 1px ${Colors.Shadow};
    &:hover {
    box-shadow: 0px 0px 10px 10px ${Colors.Shadow};
    }
`;

const ProductName = styled.p`
    flex: 1;
    font-size: large;
    font-weight: bold;
    text-align: center;
`;

const ProductImageContainer = styled.div`
    width: 90%;
    flex: 5;
    text-align: center;
    position: relative;
    border: 1px solid ${Colors.Primary};
`;

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
`;

const ProductDepartment = styled.div`
    font-family: cursive;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-45%, -45%);
`;

const ProductCategory = styled.div`
    font-family: fantasy;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ProductPrice = styled.p`
    flex: 1;
    font-size: medium;
    text-align: center;
`;

const ProductQuantity = styled.input`
    width: 30%;
    margin: 1%;
    border: 1px solid ${Colors.PrimaryButton};
    font-size: medium;
    text-align: center;
`;

const CartButton = styled.button`
    flex: 1;
    width: 30%;
    height: 10%;
    background-color: ${Colors.Secondary};
    color: ${Colors.TextWhite};
    box-shadow: 0px 0px 10px 1px ${Colors.Shadow};
    &:hover {
    box-shadow: 0px 0px 10px 5px ${Colors.Shadow};
    }
`;

const SizesRadioContainer = styled.div`
    flex: 1;
    width: 100%;
`;

const ColorsRadioContainer = styled.div`
    flex: 1;
    width: 100%;
`;

const ProductsListCard = props => {

    const product = props.product;
    const [tColor, setTColor] = useState(undefined);
    const [size, setSize] = useState(undefined);
    const [quantity, setQuantity] = useState(0);

    let history = useHistory();

    // eslint-disable-next-line
    const { state, dispatch } = useContext(ProductContext);

    const addToCart = () => {
        if (!!tColor && !!size && !!quantity) {
            dispatch({ type: 'ADD_TO_CART', payload: { ...product, color: tColor, size, quantity: parseInt(quantity) } });
            setTColor(undefined);
            setSize(undefined);
            setQuantity(0);
            confirmAlert({
                title: 'Cart',
                message: 'Item added to your Cart Successfully',
                buttons: [
                    {
                        label: 'Continue Shopping',
                        onClick: () => void 0,
                    },
                    {
                        label: 'Go to Cart',
                        onClick: () => history.push('/cart'),
                    }
                ],
                closeOnEscape: true,
                closeOnClickOutside: true,
            });
        } else {
            confirmAlert({
                title: 'Cart',
                message: 'Please select size, color and quntity',
                buttons: [
                    {
                        label: 'OK',
                        onClick: () => {
                            setTColor(undefined);
                            setSize(undefined);
                            setQuantity(0);
                        },
                    }
                ],
                closeOnEscape: false,
                closeOnClickOutside: false,
            });
        }
    }

    return (
        <ProductCard onClick={() => history.push({
            pathname: `/item/${product.id}`,
            product: product,
        })}>
            <ProductName>{product.title}</ProductName>
            <ProductImageContainer style={{ color: tColor, backgroundColor: tColor, }}>
                <ProductImage src={require('../assets/images/tshirt.png')} alt='PRODUCT' />
                <ProductDepartment>{product.department}</ProductDepartment>
                <ProductCategory>{product.category}</ProductCategory>
            </ProductImageContainer>
            <ColorsRadioContainer>
                <ColorsRadio setColor={setTColor} color={tColor} />
            </ColorsRadioContainer>
            <SizesRadioContainer>
                <SizesRadio setSize={setSize} size={size} />
            </SizesRadioContainer>
            <ProductPrice>${product.price}</ProductPrice>
            <ProductQuantity
                type='number'
                name='quantity'
                value={quantity}
                onClick={e => e.stopPropagation()}
                onChange={e => setQuantity(e.target.value.replace(/\D/, ''))}
            />
            <CartButton onClick={e => { e.stopPropagation(); addToCart(); }}>{'Add to Cart'}</CartButton>

        </ProductCard >
    )
}

export default ProductsListCard;
