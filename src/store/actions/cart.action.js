import { Alert } from 'react-native';

import { FIREBASE_REALTIME_DB_URL } from './../../constants/firebase';
import { PRODUCTS } from '../../data/products';
import { updateItemsInCart, selectCart } from '../../db';
import { MAPS_API_KEY } from '../../utils/maps';
import { cartTypes } from '../types';

const { LOAD_CART, ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER } = cartTypes;

// Función para agregar un producto por ID al array y devuelve un nuevo carrito.
function addProductById(idProd, cart) {
  const productInCart = cart.find((product) => product.id === idProd);
  if (productInCart) {
    const updatedCart = cart.map((product) => {
      if (product.id === idProd) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    return updatedCart;
  } else {
    const product = PRODUCTS.find((product) => product.id === idProd);
    cart.push({ ...product, quantity: 1 });
    return cart;
  }
}

// Función para eliminar un producto por ID del array y devuelve un nuevo carrito.
function deleteProductById(idProd, cart) {
  const updatedCart = cart.filter((product) => product.id !== idProd);
  console.warn('Producto eliminado correctamente');
  return updatedCart;
}

export const addProduct = (idProd, cart, userId) => {
  return async (dispatch) => {
    try {
      const items = addProductById(idProd, cart);
      await updateItemsInCart(userId, items);

      dispatch({
        type: ADD_TO_CART,
        items,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (idProd, cart, userId) => {
  return async (dispatch) => {
    try {
      const items = deleteProductById(idProd, cart);
      await updateItemsInCart(userId, items);

      dispatch({
        type: REMOVE_FROM_CART,
        items,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCart = (userId) => {
  return async (dispatch) => {
    try {
      const result = await selectCart(userId);
      const items = JSON.parse(result?.rows?._array[0]?.items) || [];
      dispatch({
        type: LOAD_CART,
        items,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const confirmOrder = (cart, total, coords, userId) => {
  return async (dispatch) => {
    let address;
    try {
      const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${MAPS_API_KEY}`);
      if (!res.ok) throw new Error('No se pudo comunicar con la API de Google Maps');
      const resData = await res.json();
      if (!resData.results) throw new Error('No se han encontrado datos para los coordenadas seleccionadas');
      address = resData.results[0].formatted_address;
    } catch (error) {
      console.log(`Error al obtener dirección del usuario - ${error}`);
    }

    const body = {
      date: Date.now(),
      total,
      items: cart,
      coords,
      address,
      userId,
    };

    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/orders.json`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const isConfirm = !!data.name;

      if (isConfirm) {
        Alert.alert(
          'Orden confirmada',
          `Pedido #${data.name} creado exitosamente!`,
          [
            {
              text: 'OK',
            },
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          'Orden fallida',
          'No se pudo confirmar la orden. Intente nuevamente.',
          [
            {
              text: 'OK',
            },
          ],
          { cancelable: false }
        );
      }

      dispatch({
        type: CONFIRM_ORDER,
        isConfirm,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
