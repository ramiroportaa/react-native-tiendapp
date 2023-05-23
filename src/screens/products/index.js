import { useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants/theme';

const Products = ({ navigation }) => {
  const handlerOnPress = (product) => {
    navigation.navigate('ProductDetail', { product: product.id });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>PANTALLA DE PRODUCTOS DE X CATEGORIA</Text>
        <Button title="Ver DETALLE" color={theme.colors.green} onPress={handlerOnPress} />
      </View>
    </ScrollView>
  );
};

export default Products;
