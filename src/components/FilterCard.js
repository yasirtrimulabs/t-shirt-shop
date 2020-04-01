import React, { Fragment } from 'react'
import styled from 'styled-components';
import { Colors } from '../theme';

const Container = styled.form`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px;
    `;

const OptionsContainer = styled.div`
    border: 2px solid ${Colors.Primary};
    width: 60%;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.SecondaryBackground};
    justify-content: center;
    text-align: center;
    `;

const Title = styled.span`
      font-size: 20px;
      padding: 1px;
      color: ${Colors.TextWhite};
      background-color: ${Colors.Primary};
    `;

const OptionLabel = styled.label`
    color: ${Colors.TextBlack};
    padding: 5px;
    cursor: pointer;
    font-weight: normal;
    `;

const Option = styled.input`
    display: none;
    &:checked + ${OptionLabel} {
        font-weight: bolder;
        color: ${Colors.Secondary};
    }
    `;

const FilterCard = props => {

    const { value, setValue, title, options } = props;

    return (
        <Container>
            <OptionsContainer>
                <Title>{title}</Title>
                {options.map((option, index) => (
                    <Fragment key={index}>
                        <Option
                            type="radio"
                            value={option}
                            checked={value === option}
                            onChange={() => setValue(option)}
                            id={(option + index)}
                        />
                        <OptionLabel key={index} htmlFor={(option + index)}>
                            {option}
                        </OptionLabel>
                    </Fragment>
                ))}
            </OptionsContainer>
        </Container>
    )
}

export default FilterCard
