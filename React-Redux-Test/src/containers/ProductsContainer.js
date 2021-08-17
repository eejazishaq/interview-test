import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { ProductDispatch, addItemToCart } from "../actions";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

export const ProductsContainer = ({ products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const request = axios.get(`http://localhost:3030/api/products`);
    dispatch(ProductDispatch(request));
  }, []);

  const handleCartAction = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <>
      <Header />

      {Object.keys(products).length > 0 && (
        <>
          <div className="row">
            {products.products.map((Item, i) => {
              return (
                <ProductList
                  Item={Item}
                  key={i}
                  itemToCart={handleCartAction}
                  type={'product'}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps, { ProductDispatch })(ProductsContainer);
