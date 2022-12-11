import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsPublic } from "../../redux/Product/thunks";
import { useNavigate } from "react-router-dom";
import Styles from "../../constants/styles.module.css";

const PublicDates = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  const goBack = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(() => getProducts(dispatch));
  }, [dispatch]);

  const { isLoadingProducts } = useSelector((state) => state.product);

  return (
    <>
      <div className={Styles.container}>
        <h1>Public dates</h1>
        <button onClick={() => goBack()}> Back </button>
        <table className={Styles.prodtable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Stock</th>
              <th>Precio</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {product &&
              product.products?.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.stock}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PublicDates;
