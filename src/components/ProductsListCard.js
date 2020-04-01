import React, { useState } from 'react'
import styled from 'styled-components';
import { Colors } from '../theme';
import { useHistory } from 'react-router-dom';

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
    font-size: large;
    font-weight: bold;
    text-align: center;
`;

const ProductImageContainer = styled.div`
width: 90%;
height: 100%;
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
    font-size: medium;
    text-align: center;
`;

const CartButton = styled.button`
    width: 30%;
    height: 10%;
    background-color: ${Colors.Secondary};
    color: ${Colors.TextWhite};
    box-shadow: 0px 0px 10px 1px ${Colors.Shadow};
    &:hover {
    box-shadow: 0px 0px 10px 5px ${Colors.Shadow};
    }
`;

const ColorsContainer = styled.form`
  display: flex;
  padding: 10px;
`;

const ColorLabel = styled.label`
margin: 1%;
&:hover{
    padding: 1%;
}
`;

const ColorRadio = styled.input`
  display: none;
  &:checked ~ span{
      border: 1px double ${Colors.TextBlack};
  }
`;

const ColorRed = styled.span`
    display: block;
    margin: 1px;
    background-color: ${Colors.Red};
    width: 25px;
    height: 25px;
    border-radius: 100%;
`;
const ColorBlue = styled.span`
    display: block;
    margin: 1px;
    background-color: ${Colors.Blue};
    width: 25px;
    height: 25px;
    border-radius: 100%;
`;
const ColorGreen = styled.span`
    display: block;
    margin: 1px;
    background-color: ${Colors.Green};
    width: 25px;
    height: 25px;
    border-radius: 100%;
`;

const ProductsListCard = props => {

    const product = props.product;

    const [tColor, setTColor] = useState('');

    let history = useHistory();

    return (
        <ProductCard onClick={() => history.push({
            pathname: '/item',
            product: product,
        })}>
            <ProductName>{product.title}</ProductName>
            <ProductImageContainer style={{ color: tColor, backgroundColor: tColor, }}>
                <ProductImage src={require('../assets/images/tshirt.png')} alt='PRODUCT' />
                <ProductDepartment>{product.department}</ProductDepartment>
                <ProductCategory>{product.category}</ProductCategory>
            </ProductImageContainer>
            <ColorsContainer onClick={e => e.stopPropagation()}>
                <ColorLabel>
                <ColorRadio
                    onChange={() => setTColor('red')}
                    value='red' type="radio" name='tColor'
                    checked={tColor === 'red'}
                />
                <ColorRed />
            </ColorLabel>
            <ColorLabel>
                <ColorRadio
                    onChange={() => setTColor('blue')}
                    value='blue' type="radio" name='tColor'
                    checked={tColor === 'blue'}
                />
                <ColorBlue />
            </ColorLabel>
            <ColorLabel>
                <ColorRadio
                    onChange={() => setTColor('green')}
                    value='green' type="radio" name='tColor'
                    checked={tColor === 'green'}
                />
                <ColorGreen />
            </ColorLabel>
            </ColorsContainer>
        <ProductPrice>${product.price}</ProductPrice>
        <CartButton>{'Add to Cart'}</CartButton>
        </ProductCard >
    )
}

export default ProductsListCard;
