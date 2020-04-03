import React from 'react'
import styled from 'styled-components';
import { Colors } from '../theme';
import { Link } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';

const Container = styled.div`
    background-color: ${Colors.Primary};
    display: flex;
    height: 100%;
    align-items: center;
`;

const Title = styled(Link)`
    margin: 10px;
    color: ${Colors.Secondary};
    text-decoration: none;
    cursor: pointer;
`;

const Links = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const NavLink = styled(Link)`
    margin: 3%;
    color: ${Colors.TextWhite};
    text-decoration: none;
    font-weight: bolder;
    display: flex;
    align-self: center;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    &:hover{
        color: ${Colors.Secondary};
        cursor: pointer;
    }
`;

const Header = () => {
    return (
        <Container>
            <Title to="/"><h1 style={{ textAlign: "center" }}>T-Shirt Shop</h1></Title>
            <Links>
                <NavLink to="/add">Add Item</NavLink>
                <NavLink to="/cart"><FiShoppingCart style={{ flex: 1 }} size={25} /></NavLink>
            </Links>
        </Container>
    )
}

export default Header
