import {Pressable, Text, Image} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import SafeAreaView from 'react-native-safe-area-view';
import ImageDirectory from '@app/assets';
import strings from '@app/i18n';
import AppColors from '@app/utils/colors';
import {useAppNavigation} from '@app/route/type.navigator';
import {StackActions} from '@react-navigation/native';

export default function SuccessScreen() {
  const navigation = useAppNavigation();
  const onPressGoBack = () => {
    navigation.dispatch(StackActions.replace('Intro'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={ImageDirectory.successIcon} style={styles.successIcon} />
      <Text style={styles.text}>{strings.success.info_save_successfully}</Text>

      <Pressable
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        onPress={onPressGoBack}>
        <Text style={styles.goBackText}>{strings.success.back_to_home}</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '15@ms',
  },
  successIcon: {
    width: '50@ms',
    height: '50@ms',
  },
  text: {
    fontSize: '14@ms',
    color: AppColors.text,
    textAlign: 'center',
    marginVertical: '10@vs',
  },
  goBackText: {
    fontSize: '14@ms',
    color: AppColors.text,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
