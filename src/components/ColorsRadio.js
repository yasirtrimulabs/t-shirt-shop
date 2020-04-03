import React from 'react';
import styled from 'styled-components';
import { Colors } from '../theme';
import { ColorButton } from '.';

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
      border: 1px solid ${Colors.TextBlack};
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
                {/* <Color style={{backgroundColor: Colors.Red}} /> */}
                <ColorButton color="Red" />
            </ColorLabel>
            <ColorLabel>
                <ColorRadio
                    onChange={() => setColor('blue')}
                    value='blue' type="radio" name='tColor'
                    checked={color === 'blue'}
                />
                {/* <Color style={{backgroundColor: Colors.Blue}} /> */}
                <ColorButton color="Blue" />
            </ColorLabel>
            <ColorLabel>
                <ColorRadio
                    onChange={() => setColor('green')}
                    value='green' type="radio" name='tColor'
                    checked={color === 'green'}
                />
                {/* <Color style={{backgroundColor: Colors.Green}} /> */}
                <ColorButton color="Green" />
            </ColorLabel>
        </ColorsContainer>
    )
}

export default ColorsRadio
