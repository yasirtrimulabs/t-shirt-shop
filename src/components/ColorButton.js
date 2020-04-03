import React from 'react'
import { Colors } from '../theme';
import styled from 'styled-components';

const ColorButton = props => {

    const ColorContainer = styled.span`
        display: block;
        border-radius: 100%;
        margin: 1px;
        padding: 3px;
        border: 1px solid ${Colors.TextWhite};
        &:hover{
            border: 1px solid ${Colors.TextBlack};
        }
        @media (max-width: 768px) {
            padding: 5px;
        }
    `;

    const Color = styled.span`
        display: block;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        background-color: ${props.color};
        @media (max-width: 768px) {
            width: 25px;
            height: 25px;
        }
    `;

    if (props.fixed) {
        return (
            <Color />
        )
    } else {
        return (
            <ColorContainer>
                <Color />
            </ColorContainer>
        )
    }

}

export default ColorButton
