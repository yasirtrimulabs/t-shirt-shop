import React from 'react'
import styled from 'styled-components';
import { Colors } from '../theme';
import { FaPlus, FaMinus } from 'react-icons/fa';

const QuantityInput = props => {

    const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const Button = styled.span`
        display: flex;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        align-items: center;
        justify-content: center;
        margin: 5px;
        color: ${Colors.TextGray};
        border: 1px solid ${Colors.TextGray};
        background-color: ${Colors.PrimaryBackground};
        cursor: pointer;
        @media (max-width: 768px) {
            width: 30px;
            height: 30px;
        }
        &:hover{
            color: ${Colors.TextBlack};
            border: 1px solid ${Colors.TextBlack};
            background-color: ${Colors.PrimaryButton};
        }
    `;

    const ProductQuantity = styled.input`
        width: 60px;
        height: 30px;
        border-radius: 30px;
        background-color: ${Colors.SecondaryBackground};
        margin: 1%;
        border: 1px solid ${Colors.TextGray};
        font-size: medium;
        text-align: center;
    `;

    return (
        <Container onClick={e => e.stopPropagation()}>
            <Button
                onClick={() => 
                    props.value > 0 && props.onChange(props.value - 1)
                }
            >
                <FaMinus />
            </Button>
            <ProductQuantity
                type='text'
                disabled
                name='quantity'
                value={props.value}
            />
            <Button onClick={() => props.onChange(props.value + 1)}>
                <FaPlus/>
            </Button>
        </Container>
    )
}

export default QuantityInput
