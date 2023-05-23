import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const CategoryItem = ({ category, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.containerTouchable, backgroundColor: category.color }}
        onPress={() => onSelected(category)}>
        <View>
          <Text style={styles.name}>{category.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
