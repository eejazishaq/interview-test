import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

export const CartContainer = ({ cart }) => {
  const dispatch = useDispatch();

  const handleCartAction = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <>
      <Header />

      {Object.keys(cart.cartItems).length > 0 && (
        <>
          <div className="row">
            {cart.cartItems.map((Item, i) => {
              return (
                <ProductList
                  Item={Item}
                  key={i}
                  itemToCart={handleCartAction}
                  type={'cart'}
                />
              );
            })}
          </div>
        </>
      )}

    </>
  );
};

const mapStateToProps = ({ cart }) => ({ cart });

export default connect(mapStateToProps, null)(CartContainer);
