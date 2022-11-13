import {
  setProducts,
  showProducts,
  dismissIsLoading,
  setIsLoading,
  deleteProducts,
} from './actions';

export const getProducts = async (dispatch) => {
  dispatch(setIsLoading());
  let response = await fetch(
    'https://mcga-2022-backend.vercel.app/api/products'
  );

  let data = await response.json();
  if (data) {
    dispatch(setProducts(data.data));
    dispatch(dismissIsLoading());
  }
  if (data.status === 400) {
    dispatch(setProducts([]));
    dismissIsLoading();
  }
  dismissIsLoading();
};

export const addProducts = async (dispatch, product) => {
  dispatch(setIsLoading());
  let response = await fetch(
    'https://mcga-2022-backend.vercel.app/api/products',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    }
  );
  let data = await response.json();
  console.log('esta es la respuesta del post', data);
  await getProducts(dispatch);
  dismissIsLoading();
};

export const deleteItem = async (dispatch, idToDelete) => {
  const url =
    'https://mcga-2022-backend.vercel.app/api/products/delete/' + idToDelete;
  console.log('url', url);

  //dispatch(setIsLoading());

  let response = await fetch(url, {
    method: 'DELETE',
  });
  let data = await response.json();
  console.log('esta es la respuesta del delete', data);
  await getProducts(dispatch);
  dismissIsLoading();
};
