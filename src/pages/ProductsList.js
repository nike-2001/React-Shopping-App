import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import ProductCard from '../components/ProductCard';
import './ProductsList.css';

const ProductsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);
  const { data: products, loading, error } = useFetch('/products');

  // Focus search input on mount
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (!searchTerm) return products;

    const term = searchTerm.toLowerCase();
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description?.toLowerCase().includes(term)
    );
  }, [products, searchTerm]);

  // Memoized callback for add to cart
  const handleAddToCart = useCallback(() => {
    // Optional: Show notification or update UI
    console.log('Product added to cart');
  }, []);

  if (loading) {
    return (
      <div className="products-container">
        <div className="loading">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="products-container">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Our Products</h1>
        <div className="search-container">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="no-products">
          {searchTerm ? (
            <p>No products found matching "{searchTerm}"</p>
          ) : (
            <p>No products available</p>
          )}
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;

