import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import InputShared from "../../components/sharedInput";
import ButtonShared from "../../components/sharedButton";
import {
  getProducts,
  addProducts,
  deleteItem,
  modifyItem,
} from "../../redux/Product/thunks";

import Styles from "../../constants/styles.module.css";

const Products = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(() => getProducts(dispatch));
  }, [dispatch]);

  const { isLoadingProducts } = useSelector((state) => state.product);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    addProducts(dispatch, data);
  };

  const submitToDelete = (idToDelete) => {
    deleteItem(dispatch, idToDelete);
  };

  const submitToModify = (itemToModify) => {
    modifyItem(dispatch, itemToModify);
  };

  const ProdToModify = (item) => {
    setValue("nameEdit", item.name);
    setValue("priceEdit", item.price);
    setValue("stockEdit", item.stock);
    setValue("descriptionEdit", item.description);
    setValue("_id", item._id);
  };

  return (
    <>
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
                  <td>
                    <ButtonShared
                      text="Eliminar"
                      Click={() => submitToDelete(item._id)}
                      styleshare={Styles.buttonStyles}
                      type={"submit"}
                    />
                  </td>
                  <td>
                    <ButtonShared
                      text="Editar"
                      Click={() => ProdToModify(item)}
                      styleshare={Styles.buttonStyles}
                      type={"submit"}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <h1>Edición de productos</h1>
      <form className={Styles.main} onSubmit={handleSubmit(submitToModify)}>
        <p>Modifique los valores y haga clicn en "Modificar"</p>

        <InputShared
          placeholder={"name"}
          styleshare={Styles.inputbox}
          type={"text"}
          register={register}
          name={"nameEdit"}
        />
        <InputShared
          placeholder={"Stock"}
          styleshare={Styles.inputbox}
          type={"number"}
          register={register}
          name={"stockEdit"}
        />
        <InputShared
          placeholder={"Precioss"}
          styleshare={Styles.inputbox}
          type={"number"}
          register={register}
          name={"priceEdit"}
        />
        <InputShared
          placeholder={"Descripcion"}
          styleshare={Styles.inputbox}
          type={"text"}
          register={register}
          name={"descriptionEdit"}
        />
        <ButtonShared
          text="Modificar"
          styleshare={Styles.buttonStyles}
          type={"submit"}
        />
      </form>

      <h1>Carga de productos</h1>
      <form className={Styles.main} onSubmit={handleSubmit(onSubmit)}>
        <p>Ingrese los datos del producto</p>

        <InputShared
          placeholder={"Nombre"}
          styleshare={Styles.inputbox}
          type={"text"}
          register={register}
          name={"name"}
        />
        <InputShared
          placeholder={"Stock"}
          styleshare={Styles.inputbox}
          type={"number"}
          register={register}
          name={"stock"}
        />
        <InputShared
          placeholder={"Precio"}
          styleshare={Styles.inputbox}
          type={"number"}
          register={register}
          name={"price"}
        />
        <InputShared
          placeholder={"Descripcion"}
          styleshare={Styles.inputbox}
          type={"text"}
          register={register}
          name={"description"}
        />
        <ButtonShared
          text="Agregar producto"
          styleshare={Styles.buttonStyles}
          type={"submit"}
        />
      </form>
    </>
  );
};

export default Products;
