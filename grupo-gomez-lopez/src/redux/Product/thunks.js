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
      "https://mcga-2022-backend.vercel.app/api/products",
      {
        headers: {
          "Content-Type": "application/json",
          authorization: "b62102c1-62be-4b52-b055-589cf7a81a30",
        },
      }
    );

    let data = await response.json();

    if (response.status !== 200) {
      dispatch(setProducts([]));
      dismissIsLoading();
    } else {
      dispatch(setProducts(data.data));
      dispatch(dismissIsLoading());
    }
    dismissIsLoading();
  } catch (error) {
    throw new Error(error);
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
          authorization: "b62102c1-62be-4b52-b055-589cf7a81a30",
        },
        body: JSON.stringify(product),
      }
    );
    let data = await response.json();

    if (response.status !== 200) {
      dismissIsLoading();
    } else {
      dismissIsLoading();
      await getProducts(dispatch);
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteItem = async (dispatch, idToDelete) => {
  try {
    const url =
      "https://mcga-2022-backend.vercel.app/api/products/delete/" + idToDelete;

    dispatch(setIsLoading());

    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: "b62102c1-62be-4b52-b055-589cf7a81a30",
      },
    });
    let data = await response.json();

    if (response.status !== 200) {
      dismissIsLoading();
    } else {
      dismissIsLoading();
      await getProducts(dispatch);
    }
  } catch (error) {
    throw new Error(error);
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
        authorization: "b62102c1-62be-4b52-b055-589cf7a81a30",
      },
      body: JSON.stringify(product),
    });
    let data = await response.json();

    if (response.status !== 200) {
      dismissIsLoading();
    } else {
      dismissIsLoading();
      await getProducts(dispatch);
    }
  } catch (error) {
    throw new Error(error);
  }
};
export const getProductsPublic = async (dispatch) => {
  try {
    dispatch(setIsLoading());
    let response = await fetch(
      "https://mcga-2022-backend.vercel.app/api/products/public"
    );

    let data = await response.json();

    if (response.status !== 200) {
      dispatch(setProducts([]));
      dismissIsLoading();
    } else {
      dispatch(setProducts(data.data));
      dispatch(dismissIsLoading());
    }
    dismissIsLoading();
  } catch (error) {
    throw new Error(error);
  }
};
