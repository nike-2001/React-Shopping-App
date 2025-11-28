# React Shopping App

A comprehensive React shopping application that demonstrates all major React concepts from basics to advanced patterns.

## Features Covered

### Basic React Concepts
- **Components**: Functional components (App, Navbar, ProductsList, ProductCard, ProductDetails, Cart, Profile)
- **JSX**: HTML-like syntax in JavaScript
- **Props**: Data passing from parent to child components
- **State**: useState hook for component state management
- **Events**: Click, change, and form input handlers
- **Lists & Keys**: Rendering arrays with proper keys
- **Conditional Rendering**: Show/hide UI based on conditions

### Intermediate Concepts
- **useEffect**: Lifecycle management and side effects
- **useRef**: DOM references and value storage
- **Context API**: Global state management (UserContext)

### Advanced React
- **React Router**: Navigation and routing (/product/:id, /cart, /profile)
- **API Calls**: Axios for fetching data from external APIs
- **Custom Hooks**: useFetch for reusable data fetching logic

### Redux (Global Store)
- **Redux Toolkit**: cartSlice and userSlice
- **useSelector**: Reading state from Redux store
- **useDispatch**: Updating Redux state

### Performance Optimization
- **React.memo**: Memoizing ProductCard component
- **useCallback**: Memoizing callback functions
- **useMemo**: Memoizing expensive calculations (cart total, filtered products)

### Advanced UI Concepts
- **Error Boundaries**: Catching and handling React errors
- **Lazy Loading + Suspense**: Code splitting for better performance

### Production Features
- **Environment Variables**: Configuration via .env files
- **Proper Folder Structure**: Organized component architecture

## Project Structure

```
src/
  components/          # Reusable components
    ErrorBoundary.js
    Navbar.js
    ProductCard.js
  pages/              # Page components
    ProductsList.js
    ProductDetails.js
    Cart.js
    Profile.js
  redux/              # Redux store and slices
    store.js
    cartSlice.js
    userSlice.js
  context/            # Context API
    UserContext.js
  hooks/              # Custom hooks
    useFetch.js
  utils/              # Utility functions
    api.js
  App.js
  index.js
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (optional, defaults to fakestoreapi.com):
```
REACT_APP_API_URL=https://fakestoreapi.com
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner

## Technologies Used

- React 18
- React Router DOM
- Redux Toolkit
- Axios
- CSS3

## API

This app uses the [Fake Store API](https://fakestoreapi.com) for product data. You can configure a different API endpoint using the `REACT_APP_API_URL` environment variable.

## Learning Path

This project is designed to demonstrate React concepts progressively:
1. Start with basic components and props
2. Add state and event handling
3. Implement routing and API calls
4. Add global state with Redux and Context
5. Optimize with memoization and lazy loading
6. Add error handling and production features
