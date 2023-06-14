import {View, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '../common/header.components';
import strings from '@app/i18n';
import AppTextInput from '../common/text_input.component';
import {isIDNumber} from '@app/utils/validation';
import AppButton from '../common/button.component';
import AppColors from '@app/utils/colors';
import {setBasicInfo} from '@app/redux/onboard/onboard.slice';
import {Users} from '@app/entities/users';
import {useDispatch} from 'react-redux';
import {useAppNavigation} from '@app/route/type.navigator';

export default function BasicScreen() {
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [idError, setIdError] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const dispatch = useDispatch();
  const navigation = useAppNavigation();

  const onChangeId = (value: string) => {
    setId(value);
    if (!isIDNumber(value)) {
      setIdError(strings.basic.id_invalid);
    } else {
      setIdError('');
    }
  };

  const onChangeName = (value: string) => {
    setName(value);
    if (nameError !== '') {
      setNameError('');
    }
  };

  const saveInfo = () => {
    const user: Users = {
      name: name,
      idNumber: id,
    };
    dispatch(setBasicInfo({user}));
  };

  const validateInfo = () => {
    if (name === '') {
      setNameError(strings.basic.name_cannot_be_empty);
    }
    if (id === '') {
      setIdError(strings.basic.id_cannot_be_empty);
    }
  };

  const onPressSelectPurpose = () => {
    validateInfo();
    if (name !== '' && id !== '' && isIDNumber(id)) {
      saveInfo();
      navigation.navigate('Purpose');
    }
  };

  const onPressFillAdditionalInfo = () => {
    validateInfo();
    if (name !== '' && id !== '' && isIDNumber(id)) {
      saveInfo();
      navigation.navigate('Additional');
    }
  };

  return (
    <View style={styles.container}>
      <Header
        titleText={strings.basic.basic_information}
        hasButtonBack={true}
      />
      <ScrollView style={styles.container}>
        <AppTextInput
          label={strings.basic.full_name}
          placeholder={strings.basic.full_name_placeholder}
          value={name}
          onChangeText={onChangeName}
          errorText={nameError}
        />
        <AppTextInput
          label={strings.basic.id_number}
          placeholder={strings.basic.id_number_placeholder}
          keyboardType="numeric"
          value={id}
          onChangeText={onChangeId}
          errorText={idError}
        />
      </ScrollView>
      <AppButton
        text={strings.basic.select_purpose}
        onPress={onPressSelectPurpose}
      />
      <Text style={styles.or}>{strings.basic.or}</Text>
      <AppButton
        text={strings.basic.fill_additional_information}
        onPress={onPressFillAdditionalInfo}
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
