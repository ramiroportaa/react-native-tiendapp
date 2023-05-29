import { View, Text, Image, Button } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';

const ProductDetail = ({ navigation }) => {
  const product = useSelector((state) => state.products.selected);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" source={{ uri: product.image }} style={styles.image} />
      </View>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>$ {product.price}</Text>
      <Button title="Volver a la categoría" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProductDetail;
