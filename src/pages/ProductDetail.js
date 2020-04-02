import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../theme';
import { confirmAlert } from 'react-confirm-alert';
import { ColorsRadio, SizesRadio } from '../components';
import ProductContext from '../context';

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

const ProductCard = styled.div`
    width: 90%;
    background-color: ${Colors.SecondaryBackground};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1%;
    color: ${Colors.TextBlack};
    border: 1px solid ${Colors.Shadow};
    box-shadow: 0px 0px 10px 1px ${Colors.Shadow};

`;

const ProductImageContainer = styled.div`
    width: 30%;
    height: 100%;
    text-align: center;
    position: relative;
    border: 1px solid ${Colors.Primary};
`;

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
`;

const ProductDetailsContainer = styled.div`
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
    padding: 1%;
    background-color: ${Colors.PrimaryBackground};
    border: 1px solid ${Colors.Shadow};
`;

const ProductName = styled.p`
    font-size: xx-large;
    font-weight: bold;
    text-align: center;
`;

const ProductDescription = styled.span`
    font-size: large;
    font-weight: normal;
    text-align: justify;
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
    font-size: x-large;
    text-align: center;
`;

const CartButton = styled.button`
    align-self: center;
    width: 30%;
    height: 50px;
    background-color: ${Colors.Secondary};
    color: ${Colors.TextWhite};
    box-shadow: 0px 0px 10px 1px ${Colors.Shadow};
    &:hover {
    box-shadow: 0px 0px 10px 5px ${Colors.Shadow};
    }
`;

const SizesRadioContainer = styled.div`
align-self: center;
    width: 40%;
`;

const ColorsRadioContainer = styled.div`
    align-self: center;
    width: 100%;
`;

const ProductQuantity = styled.input`
    width: 30%;
    margin: 1%;
    border: 1px solid ${Colors.PrimaryButton};
    font-size: medium;
    align-self: center;
    text-align: center;
`;

const ProductDetail = props => {

    const [tColor, setTColor] = useState(undefined);
    const [size, setSize] = useState(undefined);
    const [quantity, setQuantity] = useState(0);

    let history = useHistory();

    // eslint-disable-next-line
    const { state, dispatch } = useContext(ProductContext);

    const product = state.products.find(product => product.id === parseInt(props.match.params.id));

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
        <Body>
            <ProductCard>
                <ProductImageContainer style={{ color: tColor, backgroundColor: tColor, }}>
                    <ProductImage src={require('../assets/images/tshirt.png')} alt='PRODUCT' />
                    <ProductDepartment>{product?.department}</ProductDepartment>
                    <ProductCategory>{product?.category}</ProductCategory>
                </ProductImageContainer>
                <ProductDetailsContainer>
                    <ProductName>{product?.title}</ProductName>
                    <h4>Product Description:</h4>
                    <ProductDescription>
                        Fugiat aliqua aliqua qui ea magna dolore mollit incididunt laborum sint aute. Ex deserunt velit fugiat mollit veniam. Nostrud commodo dolore ipsum cillum dolore. Consectetur veniam sint veniam pariatur id ipsum. Consequat ullamco Lorem enim proident. Et velit id irure irure. Duis dolor ipsum nulla ipsum magna.Duis consequat officia ea aliqua quis laborum tempor sunt est eiusmod qui tempor ut. Adipisicing officia voluptate amet id deserunt anim velit et. Ut ad dolore deserunt non velit fugiat ex consequat velit sint. Aliqua laboris sint et id quis ipsum. Anim fugiat officia adipisicing et irure mollit duis quis laborum veniam aliquip non. Ea veniam reprehenderit proident officia magna veniam nisi incididunt est ad veniam consequat excepteur officia.
                </ProductDescription>
                    <ColorsRadioContainer>
                        <ColorsRadio setColor={setTColor} color={tColor} />
                    </ColorsRadioContainer>
                    <SizesRadioContainer>
                        <SizesRadio setSize={setSize} size={size} />
                    </SizesRadioContainer>
                    <ProductQuantity
                        type='number'
                        name='quantity'
                        value={quantity}
                        onClick={e => e.stopPropagation()}
                        onChange={e => setQuantity(e.target.value.replace(/\D/, ''))}
                    />
                    <ProductPrice>Price: ${product?.price}</ProductPrice>
                    <CartButton onClick={() => addToCart()}>{'Add to Cart'}</CartButton>
                </ProductDetailsContainer>
            </ProductCard>
        </Body>
    )
}

export default ProductDetail
