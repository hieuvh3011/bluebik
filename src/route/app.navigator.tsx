import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';
import AppStack from './stack.navigator';

const navigationRef = createNavigationContainerRef();
const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
export {navigationRef};
