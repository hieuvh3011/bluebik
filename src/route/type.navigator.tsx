import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
  Splash: undefined;
  Intro: undefined;
  Basic: undefined;
  Additional: undefined;
  Purpose: undefined;
};

export type MessageNavigationProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};

export const useAppNavigation = useNavigation<
  NativeStackNavigationProp<RootStackParamList>
>;
