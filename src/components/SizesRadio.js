import React from 'react';
import styled from 'styled-components';
import { Colors } from '../theme';
import { SizeButton } from '.';

const SizesContainer = styled.form`
    display: flex;
    flex: 1;
    padding: 1%;
`;

const SizeLabel = styled.label`
    margin: 3%;
    width: 30%;
`;

const SizeRadio = styled.input`
  display: none;
  &:checked ~ p {
    background-color: ${Colors.Secondary};
    color: ${Colors.TextWhite};
  }
`;

const SizesRadio = props => {

    const size = props.size;
    const setSize = props.setSize;

    return (
        <SizesContainer onClick={e => e.stopPropagation()}>
            <SizeLabel>
                <SizeRadio
                    onChange={() => setSize('Small')}
                    value='Small' type="radio" name='Size'
                    checked={size === 'Small'}
                />
                {/* <SizeName>{'S'}</SizeName> */}
                <SizeButton text='S' />
            </SizeLabel>
            <SizeLabel>
                <SizeRadio
                    onChange={() => setSize('Medium')}
                    value='Medium' type="radio" name='Size'
                    checked={size === 'Medium'}
                />
                {/* <SizeName>{'M'}</SizeName> */}
                <SizeButton text='M' />
            </SizeLabel>
            <SizeLabel>
                <SizeRadio
                    onChange={() => setSize('Large')}
                    value='Large' type="radio" name='Size'
                    checked={size === 'Large'}
                />
                {/* <SizeName>{'L'}</SizeName> */}
                <SizeButton text='L' />
            </SizeLabel>
        </SizesContainer>
    )
}

export default SizesRadio
