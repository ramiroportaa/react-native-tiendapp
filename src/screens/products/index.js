import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { ProductItem } from './../../components';
import { PRODUCTS } from './../../data/products';

const Products = ({ navigation }) => {
  const categoryId = useSelector((state) => state.categories.selected.id);
  const products = PRODUCTS.filter((product) => product.category === categoryId);

  const handlerSelected = (item) => {
    navigation.navigate('ProductDetail', {
      productId: item.id,
      productName: item.name,
    });
  };

  const renderItem = ({ item }) => <ProductItem item={item} onSelected={handlerSelected} />;

  return <FlatList data={products} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />;
};

export default Products;
