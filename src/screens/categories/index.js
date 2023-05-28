import { FlatList, View } from 'react-native';

import { CATEGORIES } from './../../data/categories';
import { styles } from './styles';
import { CategoryItem } from '../../components';

const Categories = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate('Products', {
      categoryId: item.id,
      categoryName: item.name,
    });
  };

  const renderItem = ({ item }) => <CategoryItem category={item} onSelected={onSelected} />;

  return (
    <View style={styles.container}>
      <FlatList data={CATEGORIES} keyExtractor={(category) => category.id} renderItem={renderItem} numColumns={2} />
    </View>
  );
};

export default Categories;
