import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { UserContextProvider } from './context/UserContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import './App.css';

// Lazy load pages for code splitting
const ProductsList = lazy(() => import('./pages/ProductsList'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Cart = lazy(() => import('./pages/Cart'));
const Profile = lazy(() => import('./pages/Profile'));

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <UserContextProvider>
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <main className="main-content">
                <Suspense
                  fallback={
                    <div className="loading">Loading page...</div>
                  }
                >
                  <Routes>
                    <Route path="/" element={<ProductsList />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/profile" element={<Profile />} />
                  </Routes>
                </Suspense>
              </main>
            </div>
          </BrowserRouter>
        </UserContextProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;

