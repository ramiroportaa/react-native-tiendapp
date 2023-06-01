import { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { OrderItem } from '../../components';
import { deleteOrderById, getOrders } from '../../store/actions';

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.data);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const keyExtractor = (item) => item.id.toString();
  const onRemove = (id) => {
    dispatch(deleteOrderById(id));
  };
  const renderItem = ({ item }) => <OrderItem item={item} onRemove={onRemove} />;
  return (
    <View style={styles.container}>
      <FlatList data={orders} keyExtractor={keyExtractor} renderItem={renderItem} />
    </View>
  );
};

export default Orders;
