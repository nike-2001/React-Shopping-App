import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useFetch } from '../hooks/useFetch';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { data: product, loading, error } = useFetch(`/products/${id}`);

  // Update document title when product loads
  useEffect(() => {
    if (product) {
      document.title = `${product.title} - ShopApp`;
    }
    return () => {
      document.title = 'ShopApp';
    };
  }, [product]);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity }));
      navigate('/cart');
    }
  };

  if (loading) {
    return (
      <div className="product-details-container">
        <div className="loading">Loading product details...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-details-container">
        <div className="error">
          {error || 'Product not found'}
          <button onClick={() => navigate('/')} className="back-button">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>
      <div className="product-details">
        <div className="product-details-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-details-info">
          <h1>{product.title}</h1>
          <p className="product-category">{product.category}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <div className="product-rating">
            <span>Rating: {product.rating?.rate || 'N/A'}</span>
            <span> ({product.rating?.count || 0} reviews)</span>
          </div>
          <p className="product-description">{product.description}</p>
          <div className="quantity-controls">
            <label>Quantity:</label>
            <div className="quantity-buttons">
              <button onClick={handleDecrement}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
          </div>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

