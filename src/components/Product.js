import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Tooltip, Typography } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { removeProduct } from '../actions/productActions';
import './products-main.scss';
import DeleteIcon from '@mui/icons-material/Delete';

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

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="card-content">
      <Tooltip title="Delete">
        <DeleteIcon
          style={{ cursor: 'pointer', alignSelf: 'flex-end', color: '#CF1020' }}
          onClick={() => handleRemoveProduct(product.id)}
        />
      </Tooltip>
      <img
        width="100%"
        height="375px"
        src={product.image}
        variant="top"
        alt="product"
      />

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
