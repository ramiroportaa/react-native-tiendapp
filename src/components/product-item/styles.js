import { StyleSheet } from 'react-native';

import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 120,
  },
  containerTouchable: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontSize: theme.fonts.fontSize.title,
    fontFamily: theme.fonts.fontFamily.regular,
    textAlign: 'center',
  },
  price: {
    fontSize: theme.fonts.fontSize.text,
    fontFamily: theme.fonts.fontFamily.bold,
    paddingBottom: 5,
    textAlign: 'center',
  },
});
