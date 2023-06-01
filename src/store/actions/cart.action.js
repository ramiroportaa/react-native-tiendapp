import { Alert } from 'react-native';

import { FIREBASE_REALTIME_DB_URL } from './../../constants/firebase';
import { cartTypes } from '../types';
const { ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER } = cartTypes;

export const addProductById = (id) => ({
  type: ADD_TO_CART,
  productId: id,
});

export const deleteProductById = (id) => ({
  type: REMOVE_FROM_CART,
  productId: id,
});

export const confirmOrder = (cart, total) => {
  return async (dispatch) => {
    const body = {
      date: Date.now(),
      total,
      items: cart,
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
