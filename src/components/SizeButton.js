import React from 'react'
import styled from 'styled-components';
import { Colors } from '../theme';

const SizeButton = props => {

    const Size = styled.p`
    color: ${Colors.TextGray};
    text-align: center;
    padding: 1px;
    background-color: ${Colors.PrimaryBackground};
    &:hover{
        background-color: ${Colors.Secondary};
        color: ${Colors.TextWhite};
    }
`;

    return (
        <Size>{props.text}</Size>
    )
}

export default SizeButton
