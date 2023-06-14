import {View, Text} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import AppButton from '../common/button.component';
import strings from '@app/i18n';
import AppColors from '@app/utils/colors';
import {useAppNavigation} from '@app/route/type.navigator';

export default function IntroScreen() {
  const navigation = useAppNavigation();
  const onPressButton = () => navigation.navigate('Basic');

  return (
    <View style={styles.container}>
      <Text style={styles.introText}>{strings.intro.intro_about_app}</Text>
      <AppButton
        text={strings.intro.go_to_onboarding}
        onPress={onPressButton}
      />
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  introText: {
    color: AppColors.text,
    fontSize: '15@ms',
  },
});
