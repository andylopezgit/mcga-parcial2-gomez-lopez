import {
  setProducts,
  showProducts,
  dismissIsLoading,
  setIsLoading,
  deleteProducts,
} from "./actions";

export const getProducts = async (dispatch) => {
  try {
    dispatch(setIsLoading());
    let response = await fetch(
      "https://mcga-2022-backend.vercel.app/api/products"
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
  } catch (e) {
    console.error(e);
  }
};

export const addProducts = async (dispatch, product) => {
  try {
    dispatch(setIsLoading());
    let response = await fetch(
      "https://mcga-2022-backend.vercel.app/api/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    let data = await response.json();

    await getProducts(dispatch);
    dismissIsLoading();
  } catch (e) {
    console.error(e);
  }
};

export const deleteItem = async (dispatch, idToDelete) => {
  try {
    const url =
      "https://mcga-2022-backend.vercel.app/api/products/delete/" + idToDelete;

    dispatch(setIsLoading());

    let response = await fetch(url, {
      method: "DELETE",
    });
    let data = await response.json();
    await getProducts(dispatch);
    dismissIsLoading();
  } catch (e) {
    console.error(e);
  }
};

export const modifyItem = async (dispatch, prodToModify) => {
  try {
    const product = {};
    product._id = prodToModify._id;
    product.name = prodToModify.nameEdit;
    product.price = prodToModify.priceEdit;
    product.stock = prodToModify.stockEdit;
    product.description = prodToModify.descriptionEdit;

    const url =
      "https://mcga-2022-backend.vercel.app/api/products/update/" + product._id;
    dispatch(setIsLoading());
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    let data = await response.json();
    await getProducts(dispatch);
    dismissIsLoading();
  } catch (e) {
    console.error(e);
  }
};
