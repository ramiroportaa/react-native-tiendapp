import { NavigationContainer } from '@react-navigation/native';

import ShopNavigator from './shop';

const Navigation = () => {
  return (
    <NavigationContainer>
      <ShopNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
