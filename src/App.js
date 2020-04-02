import React, { useReducer } from 'react';
import { Home, AddNewTshirt, ProductDetail, Cart } from './pages';
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
      id: index,
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

  const store = { products, cart: [], total: 0 };

  const reducer = (state, action) => {
    let newState = {};
    switch (action.type) {
      case 'ADD_PRODUCT':
        let products = [...state.products, action.payload];
        newState = { ...state, products };
        return newState

      case 'ADD_TO_CART':
        let alreadyAdded = state.cart.findIndex(product =>
          (product.id === action.payload.id &&
            product.color === action.payload.color &&
            product.size === action.payload.size)
        );
        let cart, total;
        if (alreadyAdded !== -1) {
          let newItem = state.cart[alreadyAdded];
          newItem = { ...newItem, quantity: (newItem.quantity + action.payload.quantity) };
          cart = state.cart;
          cart[alreadyAdded] = newItem;
          total = state.total + (newItem.price * action.payload.quantity);
        } else {
          let newItem = { ...action.payload, quantity: action.payload.quantity };
          cart = [...state.cart, newItem];
          total = state.total + (newItem.price * action.payload.quantity);
        }
        newState = { ...state, cart, total };
        return newState

      case 'REMOVE_FROM_CART':
        newState = {
          ...state,
          cart: [...state.cart.filter(product =>
            !(product.id === action.payload.id &&
              product.color === action.payload.color &&
              product.size === action.payload.size)
          )],
          total: state.total - (action.payload.quantity * action.payload.price)
        };
        return newState

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, store);

  return (
    <Router>
      <Header />

      <ProductContext.Provider value={{ state, dispatch }}>
        <Route path="/" exact component={Home} />
        <Route path="/add" component={AddNewTshirt} />
        <Route path="/item/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
      </ProductContext.Provider>
    </Router>
  );
}

export default App;
