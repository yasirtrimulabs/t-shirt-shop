import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components';
import { Colors } from '../theme';
import ProductContext from '../context';
import { useHistory } from 'react-router-dom';

const Body = styled.div`
display: flex;
flex-direction: column;
padding: 1%;
background-color: ${Colors.PrimaryBackground};
`;

const FormContainer = styled.form`
align-self: center;
width: 40%;
align-items: center;
justify-content: space-evenly;
display: flex;
flex-direction: column;
border: 2px solid ${Colors.TextBlack};
padding: 1%;
`;

const InputContainer = styled.div`
padding: 20px;
width: 100%;
display: flex;
justify-content: space-evenly;
`;

const InputTitle = styled.label`

`;

const Input = styled.input`

`;

const DropDown = styled.select`
  
`;

const DropDownOption = styled.option`
  
`;

const SubmitButton = styled.button`

`;

const AddNewTshirt = () => {

    // eslint-disable-next-line
    const { state, dispatch } = useContext(ProductContext);

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [department, setDepartment] = useState('Regional');
    const [category, setCategory] = useState('');

    const categoryArray = [
        {
            department: 'Regional',
            categories: ['French', 'Italian', 'Irish']
        },
        {
            department: 'Nature',
            categories: ['Animal', 'Flower']
        },
        {
            department: 'Seasonal',
            categories: ['Spring', 'Summer', 'Fall', 'Winter']
        },
    ];

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (!!department) {
            const currentCategories = categoryArray.find(category => category.department === department).categories;
            setCategory(currentCategories[0])
            setCategories(currentCategories);
        }
        // eslint-disable-next-line
    }, [department])

    let history = useHistory();

    const addProduct = e => {
        if (!!title && !!price && !!department && !!category) {
            dispatch({ type: 'ADD_PRODUCT', payload: { id: state.products.length, title, price, department, category } });
            history.push('/');
        }
    }

    return (
        <Body>
            <FormContainer>
                <InputContainer>
                    <InputTitle>Title: </InputTitle>
                    <Input
                        type='text'
                        id='title'
                        name='title'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </InputContainer>
                <InputContainer>
                    <InputTitle>Price: </InputTitle>
                    <Input
                        type='text'
                        id='price'
                        name='price'
                        value={price}
                        onChange={e => setPrice(e.target.value.replace(/\D/, ''))}
                    />
                </InputContainer>
                <InputContainer>
                    <InputTitle>Department: </InputTitle>
                    <DropDown id="department" name="department" value={department} onChange={e => setDepartment(e.target.value)}>
                        <DropDownOption value="Regional">Regional</DropDownOption>
                        <DropDownOption value="Nature">Nature</DropDownOption>
                        <DropDownOption value="Seasonal">Seasonal</DropDownOption>
                    </DropDown>
                </InputContainer>
                <InputContainer>
                    <InputTitle>Category: </InputTitle>
                    <DropDown id="category" name="category" value={category} onChange={e => setCategory(e.target.value)}>
                        {
                            categories?.map((category, index) => (
                                <DropDownOption key={index} value={category}>{category}</DropDownOption>
                            ))
                        }
                    </DropDown>
                </InputContainer>
                <SubmitButton type="button" onClick={() => addProduct()}>Add T-Shirt</SubmitButton>
            </FormContainer>
        </Body>
    )
}

export default AddNewTshirt
