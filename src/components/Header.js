import React from 'react'
import styled from 'styled-components';
import { Colors } from '../theme';
import { Link } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';

const Container = styled.div`
background-color: ${Colors.Primary};
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
`;

const Title = styled(Link)`
color: ${Colors.Secondary};
text-decoration: none;
font-size: 32px;
margin: 20px;
cursor: pointer;
`;

const NavLink = styled(Link)`
color: ${Colors.TextWhite};
text-decoration: none;
&:hover{
    color: ${Colors.Secondary};
    cursor: pointer;
}
`;

const Header = () => {

    return (
        <Container>
            <Title to="/">T-Shirt Shop</Title>
            <NavLink to="/add">Add New T-shirt</NavLink>
            <NavLink to="/cart"><FiShoppingCart/></NavLink>
        </Container>
    )
}

export default Header
