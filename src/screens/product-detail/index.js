import { View, Text, Image, Button } from 'react-native';

import { PRODUCTS } from './../../data/products';
import { styles } from './styles';

const ProductDetail = ({ navigation, route }) => {
  const { productId } = route.params;
  const product = PRODUCTS.find((product) => product.id === productId);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" source={{ uri: product.image }} style={styles.image} />
      </View>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>$ {product.price}</Text>
      <Button title="Volver a la categoria" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProductDetail;
