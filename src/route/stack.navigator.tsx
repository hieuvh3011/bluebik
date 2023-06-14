import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '@app/components/splash/splash.screen';
import {RootStackParamList} from './type.navigator';
import IntroScreen from '@app/components/intro/intro.screen';
import BasicScreen from '@app/components/onboard/basic.screen';
import PurposeScreen from '@app/components/onboard/purpose.screen';
import AdditionalScreen from '@app/components/onboard/additional.screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Splash'}>
      <Stack.Screen name={'Splash'} component={SplashScreen} />
      <Stack.Screen name={'Intro'} component={IntroScreen} />
      <Stack.Screen name={'Basic'} component={BasicScreen} />
      <Stack.Screen name={'Purpose'} component={PurposeScreen} />
      <Stack.Screen name={'Additional'} component={AdditionalScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
