import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Typography } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import './products-main.scss';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [showSnackBar, setShowSnackbar] = React.useState(false);
  const addToCartHandler = () => {
    dispatch(addToCart({ cartDetails: product }));
    setShowSnackbar(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="card-content">
      <Link to={`/product/${product._id}`}>
        <img
          width="100%"
          height="375px"
          src={product.image}
          variant="top"
          alt="product"
        />
      </Link>

      <Typography>{product.title}</Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        ${product.price}
      </Typography>
      <button className="cart-btn" onClick={addToCartHandler}>
        Add to cart
      </button>
      {showSnackBar && (
        <Snackbar
          open={showSnackBar}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Added to cart"
          action={action}
        />
      )}
    </div>
  );
};

export default Product;
