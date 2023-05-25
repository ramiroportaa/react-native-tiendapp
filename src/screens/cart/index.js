import { FlatList, View, Text, TouchableOpacity } from 'react-native';

import { CartItem } from './../../components';
import { PRODUCTS } from './../../data/products';
import { styles } from './styles';

// Función para generar un número aleatorio dentro de un rango
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para generar un mock de productos al azar sin repeticiones
function generateMockProducts(productsArray) {
  const mockProducts = [];
  const sampledIndexes = new Set();

  while (sampledIndexes.size < 5) {
    const randomIndex = getRandomNumber(0, productsArray.length - 1);

    // Verifica si el índice ya ha sido muestreado
    if (!sampledIndexes.has(randomIndex)) {
      const product = productsArray[randomIndex];

      const mockProduct = {
        id: product.id,
        category: product.category,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        quantity: getRandomNumber(1, 10), // Genera una cantidad aleatoria entre 1 y 10
      };

      mockProducts.push(mockProduct);
      sampledIndexes.add(randomIndex);
    }
  }

  return mockProducts;
}

// Genera el mock de productos al azar sin repeticiones
const mockProducts = generateMockProducts(PRODUCTS);

// Función para eliminar un producto por ID del array mockProducts
function deleteProductById(id) {
  const index = mockProducts.findIndex((product) => product.id === id);

  if (index !== -1) {
    mockProducts.splice(index, 1);
    console.warn('Producto eliminado correctamente');
  } else {
    console.warn('No se encontró ningún producto con ese ID');
  }
}

const Cart = ({ route, navigation }) => {
  const TOTAL = mockProducts.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  const handlerRemove = (id) => {
    deleteProductById(id);
  };

  const renderItem = ({ item }) => <CartItem item={item} onRemove={handlerRemove} />;

  return (
    <View style={styles.container}>
      <FlatList data={mockProducts} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} style={styles.listContainer} />
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={() => null}>
          <Text style={styles.buttonConfirmText}>Confirmar</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>$ {TOTAL}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
