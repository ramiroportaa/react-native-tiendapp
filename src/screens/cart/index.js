import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { CartItem } from './../../components';
import { deleteProductById, confirmOrder } from './../../store/actions';
import { styles } from './styles';

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  const total = useSelector((state) => state.cart.total);
  const handlerRemove = (id) => {
    dispatch(deleteProductById(id));
  };
  const handlerConfirm = () => {
    dispatch(confirmOrder(cart, total));
    navigation.navigate('OrdersTab');
  };

  const renderItem = ({ item }) => <CartItem item={item} onRemove={handlerRemove} />;

  return (
    <View style={styles.container}>
      <FlatList data={cart} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} style={styles.listContainer} />
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={handlerConfirm}>
          <Text style={styles.buttonConfirmText}>Confirmar</Text>
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
