import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewProduct } from '../actions/productActions';

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

const AddProduct = ({ openModal, setAddProduct }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(null);
  const dispatch = useDispatch();

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleAddProduct = () => {
    dispatch(
      addNewProduct({
        category: "men's clothing",
        rating: { rate: 0, count: 0 },
        title,
        description,
        price: amount,
        image:
          selectedFile ||
          'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      })
    );
    setAddProduct(false);
  };

  return (
    openModal && (
      <Modal
        open={openModal}
        onClose={() => setAddProduct(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Add new product
          </Typography>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <input type="file" onChange={onFileChange} />
              <TextField
                label="Title"
                id="outlined-disabled"
                defaultValue="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <TextField
                id="outlined-read-only-input"
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <TextField
                id="outlined-adornment-amount"
                // value={values.amount}
                // onChange={handleChange('amount')}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <Button variant="contained" onClick={handleAddProduct}>
                Add Product
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
    )
  );
};

export default AddProduct;
