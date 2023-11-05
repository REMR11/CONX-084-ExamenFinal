import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error('Error al obtener los detalles del producto', error);
      });
  }, [productId]);

  if (!product) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Detalle del Producto</h1>
      <h2>{product.title}</h2>
      <p>Precio: {product.price}$</p>
      <p>Categoría: {product.category}</p>
      <p>Descripción: {product.description}</p>
    </div>
  );
}

export default ProductDetails