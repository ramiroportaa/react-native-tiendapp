import { useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants/theme';

const Categories = ({ navigation }) => {
  const handlerOnPress = (category) => {
    navigation.navigate('Products', { category: category.id });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>PANTALLA DE CATEGORIAS</Text>
        <Button title="Ver productos" color={theme.colors.green} onPress={handlerOnPress} />
      </View>
    </ScrollView>
  );
};

export default Categories;
