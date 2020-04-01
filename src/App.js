import React, { useReducer } from 'react';
import { Home, AddNewTshirt, ProductDetail } from './pages';
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from './components';
import styled from 'styled-components';
import { Colors } from './theme';
import ProductContext from './context'

const Router = styled(BrowserRouter)`
background-color: ${Colors.PrimaryBackground};
`;

function App() {

  let products = [];

  for (let index = 0; index < 18; index++) {
    products.push({
      title: 'T-Shirt # ' + (index + 1),
      price: (index + 1) * 2,
      department: index < 6 ? 'Regional'
        : index < 10 ? 'Nature'
          : 'Seasonal',
      category: index < 2 ? 'French' : index < 4 ? 'Italian' : index < 6 ? 'Irish'
        : index < 8 ? 'Animal' : index < 10 ? 'Flower'
          : index < 12 ? 'Spring' : index < 14 ? 'Summer' : index < 16 ? 'Fall' : 'Winter',
    })
  }

  const reducer = (products, action) => {
    switch (action.type) {
      case 'add':
        return [...products,action.payload]

      default:
        return products
    }
  }

  const [state, dispatch] = useReducer(reducer, products);

  return (
    <Router>
      <Header />

      <ProductContext.Provider value={{ state, dispatch }}>
        <Route path="/" exact component={Home} />
        <Route path="/add" component={AddNewTshirt} />
        <Route path="/item" component={ProductDetail} />
      </ProductContext.Provider>
    </Router>
  );
}

export default App;
