import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import InputShared from '../../components/sharedInput';
import ButtonShared from '../../components/sharedButton';
import { getProducts } from '../../redux/Product/thunks';

import Styles from '../../constants/styles.module.css';

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
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleInputChange = (event) => {
    console.log('ass');
  };

  //   const mail = watch("mail");
  //   console.log(mail);
  //   const pass = watch("pass");
  //   console.log(pass);
  return (
    <>
      <table className={Styles.prodtable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
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
                  <td>Editar</td>
                  <td>Eliminar</td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <h1>Carga de productos</h1>

      <form className={Styles.main} onSubmit={handleSubmit(onSubmit)}>
        <p>Ingrese los datos del producto</p>

        <InputShared
          placeholder={'Nombre'}
          styleshare={Styles.inputbox}
          type={'text'}
          register={register}
          name={'name'}
        />
        <InputShared
          placeholder={'Stock'}
          styleshare={Styles.inputbox}
          type={'text'}
          register={register}
          name={'description'}
        />
        <InputShared
          placeholder={'Precio'}
          styleshare={Styles.inputbox}
          type={'text'}
          register={register}
          name={'price'}
        />
        <ButtonShared
          text='Enviar'
          // Click={'/'}
          styleshare={Styles.buttonStyles}
          type={'submit'}
        />
      </form>
    </>
  );
};

export default Products;
