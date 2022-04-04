import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../main.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AddProduct from './AddProduct';

const Header = () => {
  const [addProduct, setAddProduct] = useState(false);

  return (
    <header>
      <nav>
        <Link to="/">
          <div className="store-name">E-Commerce</div>
        </Link>
        <Link to="/cart">
          <div className="menu-option cart">
            <ShoppingCartIcon />
            <span>Cart</span>
          </div>
        </Link>
        <div className="menu-option" onClick={() => setAddProduct(!addProduct)}>
          <AddCircleIcon />
          <span>Add Product</span>
        </div>
      </nav>
      {addProduct && (
        <AddProduct openModal={addProduct} setAddProduct={setAddProduct} />
      )}
    </header>
  );
};

export default Header;
