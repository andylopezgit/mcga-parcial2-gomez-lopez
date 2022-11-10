import React from 'react';
import { useForm } from 'react-hook-form';
import InputShared from '../../components/sharedInput';
import ButtonShared from '../../components/sharedButton';
// import { useDispatch, useSelector } from 'react-redux';
// import { setProductsThunk } from './redux/Products/thunks';
import Styles from '../../constants/styles.module.css';
import arr from './array';

const Products = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const mail = watch('mail');
  console.log(mail);
  const pass = watch('pass');
  console.log(pass);

  return (
    <>
      <h1>Vista productos</h1>
      <table className={Styles.prodtable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
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
        <p>Ingrese sus datos de usuario y contraseña</p>
        <InputShared
          placeholder={'ID'}
          styleshare={Styles.inputbox}
          type={'text'}
          register={register}
          name={'id'}
        />
        <InputShared
          placeholder={'Nombre'}
          styleshare={Styles.inputbox}
          type={'text'}
          register={register}
          name={'name'}
        />
        <InputShared
          placeholder={'Descripción'}
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
