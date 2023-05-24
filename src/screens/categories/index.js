import { FlatList } from 'react-native';

import { CATEGORIES } from './../../data/categories';
import { CategoryItem } from '../../components';

const Categories = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate('Products', {
      categoryId: item.id,
      categoryName: item.name,
      categoryColor: item.color,
    });
  };

  const renderItem = ({ item }) => <CategoryItem category={item} onSelected={onSelected} />;

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(category) => category.id}
      renderItem={renderItem}
      numColumns={1}
    />
  );
};

export default Categories;
