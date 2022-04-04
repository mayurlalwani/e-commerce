import { useState } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import './cart.scss';
import { clearCart } from '../actions/cartActions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const CartPage = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const totalAmount = cartItems.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.cartDetails.price;
  }, 0);

  const handleCheckout = () => {
    setShowModal(!showModal);
    dispatch(clearCart());
  };

  return (
    <>
      {cartItems &&
        cartItems.map((item) => (
          <div className="cart-main-container">
            <div className="cart-container">
              <div className="left-section">
                <img alt="product" src={item.cartDetails.image} width="100%" />
              </div>
              <div className="right-section">
                <h4> Name:{item.cartDetails.title} </h4>
                <span> Price:${item.cartDetails.price} </span>
              </div>
            </div>
          </div>
        ))}
      <div className="price-details">
        <h2>Price Details</h2>

        <li>Total Amount:{parseFloat(totalAmount).toFixed(2)} </li>
        <Button
          variant="contained"
          onClick={handleCheckout}
          sx={{ fontWeight: 'bolder', fontSize: 16 }}
        >
          Checkout
        </Button>
      </div>
      {showModal && (
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              Your order was placed successfully
            </Typography>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default CartPage;
