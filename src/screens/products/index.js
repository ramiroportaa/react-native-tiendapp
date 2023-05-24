import { FlatList } from 'react-native';

import { ProductItem } from './../../components';
import { PRODUCTS } from './../../data/products';

const Products = ({ route, navigation }) => {
  const { categoryId, categoryColor } = route.params;
  const products = PRODUCTS.filter((product) => product.category === categoryId);

  const handlerSelected = (item) => {
    navigation.navigate('ProductDetail', {
      productId: item.id,
      productName: item.name,
    });
  };

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={handlerSelected} color={categoryColor} />
  );

  return (
    <FlatList data={products} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />
  );
};

export default Products;
