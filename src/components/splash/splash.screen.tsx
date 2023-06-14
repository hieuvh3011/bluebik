import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@app/route/type.navigator';
import {ScaledSheet} from 'react-native-size-matters';
import strings from '@app/i18n';

type Props = NativeStackNavigationProp<RootStackParamList, 'Splash'>;
export default function SplashScreen() {
  const navigation = useNavigation<Props>();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Intro'));
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{strings.splash.simple_splash}</Text>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: '16@ms',
    fontWeight: 'bold',
  },
});
