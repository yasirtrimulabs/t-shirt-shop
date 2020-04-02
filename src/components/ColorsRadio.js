import React from 'react';
import styled from 'styled-components';
import { Colors } from '../theme';

const ColorsContainer = styled.form`
    display: flex;
    padding: 1%;
    align-items: center;
    justify-content: center;
`;

const ColorLabel = styled.label`
`;

const ColorRadio = styled.input`
  display: none;
  &:checked ~ span{
      border: 2px double ${Colors.TextBlack};
  }
`;

const Color = styled.span`
    display: block;
    margin: 1px;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    border: 2px double ${Colors.TextWhite};
    &:hover{
        border: 2px double ${Colors.TextBlack};
    }
`;

const ColorsRadio = props => {

    const color = props.color;
    const setColor = props.setColor;

    return (
        <ColorsContainer onClick={e => e.stopPropagation()}>
            <ColorLabel>
                <ColorRadio
                    onChange={() => setColor('red')}
                    value='red' type="radio" name='tColor'
                    checked={color === 'red'}
                />
                <Color style={{backgroundColor: Colors.Red}} />
            </ColorLabel>
            <ColorLabel>
                <ColorRadio
                    onChange={() => setColor('blue')}
                    value='blue' type="radio" name='tColor'
                    checked={color === 'blue'}
                />
                <Color style={{backgroundColor: Colors.Blue}} />
            </ColorLabel>
            <ColorLabel>
                <ColorRadio
                    onChange={() => setColor('green')}
                    value='green' type="radio" name='tColor'
                    checked={color === 'green'}
                />
                <Color style={{backgroundColor: Colors.Green}} />
            </ColorLabel>
        </ColorsContainer>
    )
}

export default ColorsRadio
