import React from 'react';
import styled from 'styled-components';
import { Colors } from '../theme';
import { FaTshirt } from 'react-icons/fa'

const SizesContainer = styled.form`
    display: flex;
    padding: 1%;
`;

const SizeLabel = styled.label`
    margin: 3%;
    display: flex;
`;

const SizeContainer = styled.div`
    display: block;
    text-align:center;
    border: 1px solid ${Colors.TextWhite};
    border-radius: 25%;
    background-color: ${Colors.AlternativeBackground};
    &:hover{
        border: 1px double ${Colors.TextBlack};
    }
`;

const SizeIcon = styled(FaTshirt)`
`;

const SizeName = styled.p`
    text-align: center;
`;

const SizeRadio = styled.input`
  display: none;
  &:checked ~ ${SizeContainer} {
      border: 1px double ${Colors.TextBlack};
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
                <SizeContainer>
                    <SizeIcon size='25%' />
                    <SizeName>{'Small'}</SizeName>
                </SizeContainer>
            </SizeLabel>
            <SizeLabel>
                <SizeRadio
                    onChange={() => setSize('Medium')}
                    value='Medium' type="radio" name='Size'
                    checked={size === 'Medium'}
                />
                <SizeContainer>
                    <SizeIcon size='30%' />
                    <SizeName>{'Medium'}</SizeName>
                </SizeContainer>
            </SizeLabel>
            <SizeLabel>
                <SizeRadio
                    onChange={() => setSize('Large')}
                    value='Large' type="radio" name='Size'
                    checked={size === 'Large'}
                />
                <SizeContainer>
                    <SizeIcon size='40%' />
                    <SizeName>{'Large'}</SizeName>
                </SizeContainer>
            </SizeLabel>
        </SizesContainer>
    )
}

export default SizesRadio
