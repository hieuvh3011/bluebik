import {View, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '../common/header.components';
import strings from '@app/i18n';
import AppTextInput from '../common/text_input.component';
import {isEmail, isIDNumber, isPhoneNumber} from '@app/utils/validation';
import AppButton from '../common/button.component';
import AppColors from '@app/utils/colors';
import {setBasicInfo} from '@app/redux/onboard/onboard.slice';
import {Users} from '@app/entities/users';
import {useDispatch} from 'react-redux';
import {useAppNavigation} from '@app/route/type.navigator';

export default function AdditionalScreen() {
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [birthday, setBirthday] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');
  const dispatch = useDispatch();
  const navigation = useAppNavigation();

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

  // const saveInfo = () => {
  //   const user: Users = {
  //     name: name,
  //     idNumber: id,
  //   };
  //   dispatch(setBasicInfo({user}));
  // };

  // const validateInfo = () => {
  //   if (name === '') {
  //     setNameError(strings.basic.name_cannot_be_empty);
  //   }
  //   if (id === '') {
  //     setIdError(strings.basic.id_cannot_be_empty);
  //   }
  // };

  // const onPressFillAdditionalInfo = () => {
  //   validateInfo();
  //   if (name !== '' && id !== '' && isIDNumber(id)) {
  //     saveInfo();
  //     navigation.navigate('Additional');
  //   }
  // };

  const renderButton = () => {
    return <View></View>;
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
      </ScrollView>
      {renderButton()}
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
