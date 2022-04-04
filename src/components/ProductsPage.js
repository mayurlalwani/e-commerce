import React, { useEffect } from 'react';
import { PulseLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Product from './Product';
import './products-main.scss';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className={!loading ? 'hide-loader' : 'show-loader'}>
          {loading && <PulseLoader />}
        </div>
      ) : error ? (
        <p>Error...</p>
      ) : (
        <div className="products-container">
          {products.map((product) => (
            <div className="product-card">
              <Product product={product} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsPage;
