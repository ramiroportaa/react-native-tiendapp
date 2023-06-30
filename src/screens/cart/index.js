import { useEffect } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { CartItem } from './../../components';
import { deleteProduct, getCart } from './../../store/actions';
import { styles } from './styles';

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  const total = useSelector((state) => state.cart.total);
  const userId = useSelector((state) => state.auth.userId);
  const handlerRemove = (id) => {
    dispatch(deleteProduct(id, cart, userId));
  };
  const handlerCheckout = () => {
    navigation.navigate('Checkout');
  };

  useEffect(() => {
    dispatch(getCart(userId));
  }, [dispatch]);

  const renderItem = ({ item }) => <CartItem item={item} onRemove={handlerRemove} />;

  return (
    <View style={styles.container}>
      <FlatList data={cart} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} style={styles.listContainer} />
      <View style={styles.footerContainer}>
        <TouchableOpacity disabled={cart.length === 0} style={styles.buttonConfirm} onPress={handlerCheckout}>
          <Text style={styles.buttonConfirmText}>Ir al checkout</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>$ {total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
