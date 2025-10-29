import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Products';
import CartProvider from './ContextCart';
import Cart from './Cart';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <CartProvider>
              <Products />
              <Cart/>
            </CartProvider>}></Route>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
