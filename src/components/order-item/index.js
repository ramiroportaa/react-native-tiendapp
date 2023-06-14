import Ionicons from '@expo/vector-icons/Ionicons';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants/theme';

const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ item, onRemove }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.date}>{formatDate(item.date)}</Text>
        {/* <Text style={styles.date}>
          Coords: {item.coords?.lat}, {item.coords?.lng}
        </Text> */}
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.body}>
          <Text style={styles.total}>$ {item.total}</Text>
        </View>
        <TouchableOpacity onPress={() => onRemove(item.id)}>
          <Ionicons name="trash" size={22} color={theme.colors.red} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
