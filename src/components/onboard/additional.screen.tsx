import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '../common/header.components';
import strings from '@app/i18n';
import AppTextInput from '../common/text_input.component';
import {isEmail, isPhoneNumber} from '@app/utils/validation';
import AppButton from '../common/button.component';
import AppColors from '@app/utils/colors';
import {setBasicInfo} from '@app/redux/onboard/onboard.slice';
import {Users} from '@app/entities/users';
import {useDispatch} from 'react-redux';
import {useAppNavigation} from '@app/route/type.navigator';
import AppDateInput from '../common/date_input.component';
import DatePicker from 'react-native-date-picker';
import {useAppSelector} from '@app/redux/hook';

export default function AdditionalScreen() {
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [birthday, setBirthday] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [dateDialogVisible, setDateDialogVisible] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');
  const [birthdayError, setBirthdayError] = useState<string>('');
  const dispatch = useDispatch();
  const navigation = useAppNavigation();
  const onboardSelector = useAppSelector(state => state.onboard);

  const onChangeEmail = (value: string) => {
    setEmail(value);
    if (!isEmail(value)) {
      setEmailError(strings.additional.email_invalid);
    } else {
      setEmailError('');
    }
  };

  const onChangePhone = (value: string) => {
    setPhone(value);
    if (!isPhoneNumber(value)) {
      setPhoneError(strings.additional.phone_invalid);
    } else {
      setPhoneError('');
    }
  };

  const onChangeDate = (value: Date) => {
    setDateDialogVisible(false);
    setDate(value);
    setBirthday(value.toISOString().split('T')[0]);
  };

  const onPressChangeDate = () => {
    setDateDialogVisible(true);
  };

  const saveInfo = () => {
    const user: Users = {
      email,
      phoneNumber: phone,
      birthday,
    };
    dispatch(setBasicInfo({user}));
  };

  const validateInfo = () => {
    if (email === '') {
      setEmailError(strings.additional.email_cannot_be_empty);
    }
    if (phone === '') {
      setPhoneError(strings.additional.phone_cannot_be_empty);
    }
    if (birthday === '') {
      setBirthdayError(strings.additional.birthday_cannot_be_empty);
    }
  };

  const onPressSelectPurpose = () => {
    validateInfo();
    if (
      email !== '' &&
      phone !== '' &&
      birthday !== '' &&
      isEmail(email) &&
      isPhoneNumber(phone)
    ) {
      saveInfo();
      navigation.navigate('Purpose');
    }
  };

  const onPressSubmitInfo = () => {};

  const renderButton = () => {
    if (onboardSelector.user.purpose?.length === 0) {
      return (
        <AppButton
          text={strings.additional.select_purpose}
          onPress={onPressSelectPurpose}
        />
      );
    }
    return (
      <AppButton
        text={strings.common.submit_info}
        onPress={onPressSubmitInfo}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header
        titleText={strings.additional.additional_information}
        hasButtonBack={true}
      />
      <ScrollView style={styles.container}>
        <AppTextInput
          label={strings.additional.email}
          placeholder={strings.additional.email_placeholder}
          value={email}
          onChangeText={onChangeEmail}
          errorText={emailError}
        />
        <AppTextInput
          label={strings.additional.phone_number}
          placeholder={strings.additional.phone_placeholder}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={onChangePhone}
          errorText={phoneError}
        />
        <AppDateInput
          label={strings.additional.birthday}
          placeholder={strings.additional.birthday_placeholder}
          value={birthday}
          onPressChangeDate={onPressChangeDate}
          errorText={birthdayError}
        />
      </ScrollView>
      {renderButton()}
      <DatePicker
        modal
        mode="date"
        open={dateDialogVisible}
        date={date}
        onConfirm={onChangeDate}
        onCancel={() => {
          setDateDialogVisible(false);
        }}
      />
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  or: {
    textAlign: 'center',
    fontSize: '14@ms',
    color: AppColors.text,
  },
});
