import { useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';

import { styles } from './styles';

const Products = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>PANTALLA DE DETALLE DE UN PRODUCTO</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
};

export default Products;
