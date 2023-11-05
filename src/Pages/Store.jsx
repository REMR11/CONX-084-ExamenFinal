import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Card from '../Components/Card';
import ProductDetails from './ProductDetails';

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error al obtener los productos', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
      {/* Configura las rutas */}
      <Router>
        <Switch>
          <Route path="/product/:id" component={<ProductDetails />} />
        </Switch>
      </Router>
    </div>
  );
}

export default Store;
