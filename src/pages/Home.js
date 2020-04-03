import React, { useState, useEffect, useContext } from 'react'
import { FilterCard, ProductsListCard } from '../components'
import styled from 'styled-components';
import { Colors } from '../theme';
import ProductContext from '../context';

const Body = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1%;
    background-color: ${Colors.PrimaryBackground};
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const FilterContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        height: 150px;
    }
`;

const ActiveFilters = styled.div`
    background-color: ${Colors.SecondaryBackground};
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid ${Colors.Primary};
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ActiveFilterHeading = styled.span`
    background-color: ${Colors.Primary};
    color: ${Colors.TextWhite};
    text-align: center;
    font-size: 18px;
`;

const ActiveFilter = styled.span`
    color: ${Colors.TextBlack};
    text-align: center;
    padding: 1%;
`;

const ProductsContainer = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        width: 100%
    }
`;

const ClearButton = styled.a`
    color: ${Colors.Secondary};
    font-weight: bold;
    cursor: pointer;
`;

const Home = () => {

    const [department, setDepartment] = useState('');
    const [category, setCategory] = useState('');

    // eslint-disable-next-line
    const { state, dispatch } = useContext(ProductContext);

    const allProducts = state.products;

    const [products, setProducts] = useState(allProducts)

    useEffect(() => {
        if (!!department) {
            setProducts(allProducts.filter(product => product.department === department));

        }
        if (!!category) {
            setProducts(allProducts.filter(product => product.category === category));

        }
        if (!department && !category) {
            setProducts(allProducts);

        }
        // eslint-disable-next-line
    }, [department, category])

    return (
        <Body>
            <FilterContainer>
                <ActiveFilters>
                    <ActiveFilterHeading>Filters</ActiveFilterHeading>
                    {!!department && <ActiveFilter>{department} <ClearButton onClick={() => setDepartment('')}>X</ClearButton></ActiveFilter>}
                    {!!category && <ActiveFilter>{category} <ClearButton onClick={() => setCategory('')}>X</ClearButton></ActiveFilter>}
                </ActiveFilters>
                <FilterCard
                    value={department}
                    setValue={value => { setDepartment(value); setCategory('') }}
                    title={'Department'}
                    options={['Regional', 'Nature', 'Seasonal']}
                />
                <FilterCard
                    value={category}
                    setValue={value => setCategory(value)}
                    title={'Category'}
                    options={
                        department === 'Regional' ?
                            ['French', 'Italian', 'Irish'] :
                            department === 'Nature' ?
                                ['Animal', 'Flower'] :
                                ['Spring', 'Summer', 'Fall', 'Winter']
                    }
                />
            </FilterContainer>
            <ProductsContainer>
                {products?.map((product, index) => (
                    <ProductsListCard key={index} product={product} />
                ))}
            </ProductsContainer>
        </Body>
    )
}

export default Home;
