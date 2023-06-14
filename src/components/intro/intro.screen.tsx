import {View, Text} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import AppButton from '../common/button.component';
import strings from '@app/i18n';
import AppColors from '@app/utils/colors';
import {useAppNavigation} from '@app/route/type.navigator';
import SafeAreaView from 'react-native-safe-area-view';
import {useAppSelector} from '@app/redux/hook';
import {useDispatch} from 'react-redux';
import {resetInformation} from '@app/redux/onboard/onboard.slice';

export default function IntroScreen() {
  const navigation = useAppNavigation();
  const onPressButton = () => navigation.navigate('Basic');
  const onboardSelector = useAppSelector(state => state.onboard);
  const {name, idNumber, phoneNumber, email, birthday} = onboardSelector.user;
  const dispatch = useDispatch();
  const isUserExist =
    name !== '' &&
    idNumber !== '' &&
    phoneNumber !== '' &&
    email !== '' &&
    birthday !== '';

  const renderIntroContent = () => {
    if (isUserExist) {
      return (
        <View>
          <Text style={styles.introText}>{strings.intro.your_information}</Text>
          {renderItem(strings.intro.id, idNumber)}
          {renderItem(strings.intro.name, name)}
          {renderItem(strings.intro.phone, phoneNumber)}
          {renderItem(strings.intro.email, email)}
          {renderItem(strings.intro.birthday, birthday)}
        </View>
      );
    }
    return (
      <Text style={styles.introText}>{strings.intro.intro_about_app}</Text>
    );
  };

  const renderItem = (label: string, content: string | undefined) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>{`${label}: `}</Text>
        <Text style={styles.itemContent}>{content}</Text>
      </View>
    );
  };

  const onPressRetake = () => {
    dispatch(resetInformation());
    navigation.navigate('Basic');
  };

  const renderButton = () => {
    if (isUserExist) {
      return (
        <AppButton
          text={strings.intro.retake_the_information}
          onPress={onPressRetake}
        />
      );
    }
    return (
      <AppButton
        text={strings.intro.go_to_onboarding}
        onPress={onPressButton}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>{renderIntroContent()}</View>
      {renderButton()}
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: '10@ms',
  },
  introText: {
    color: AppColors.text,
    fontSize: '15@ms',
    textAlign: 'center',
    marginVertical: '10@vs',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: '5@vs',
  },
  itemLabel: {
    fontSize: '14@ms',
    fontWeight: 'bold',
    color: AppColors.text,
  },
  itemContent: {
    fontSize: '14@ms',
    color: AppColors.text,
  },
});
