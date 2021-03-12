import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductContainer from './ProductContainer';
import AddProduct from './AddProduct';






const App = props => {
  return (
    <div className="router">
    <main>
    <Switch>
      <Route
        exact
        path="/"
        component = {ProductContainer}
      />
      <Route
        exact
        path="/add"
        component = {AddProduct}
      />
    </Switch>
    </main>
    </div>
  );
}
  

  

export default App;
