import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '../common/header.components';
import strings from '@app/i18n';
import AppColors from '@app/utils/colors';
import SelectMultiple from 'react-native-select-multiple';
import {useAppSelector} from '@app/redux/hook';
import AppButton from '../common/button.component';
import {Users} from '@app/entities/users';
import {useDispatch} from 'react-redux';
import {setPurpose} from '@app/redux/onboard/onboard.slice';
import {useAppNavigation} from '@app/route/type.navigator';

export default function PurposeScreen() {
  const purposeList = [
    strings.purpose.transfer,
    strings.purpose.loan,
    strings.purpose.bill_payment,
    strings.purpose.saving,
    strings.purpose.investment,
    strings.purpose.other,
  ];
  const [purpose, setPurposeLocal] = useState<Array<string>>([]);
  const onboardSelector = useAppSelector(state => state.onboard);
  const dispatch = useDispatch();
  const navigation = useAppNavigation();

  const onSelectionChange = selectedPurpose => {
    setPurposeLocal(selectedPurpose);
  };

  const onPressFillAdditional = () => {
    saveInfo();
    navigation.navigate('Additional');
  };

  const onPressSubmit = () => {
    saveInfo();
    navigation.navigate('Success');
  };

  const saveInfo = () => {
    const user: Users = {
      purpose,
    };
    dispatch(setPurpose({user}));
  };

  const renderButton = () => {
    const {email, birthday, phoneNumber} = onboardSelector.user;
    if (email === '' && birthday === '' && phoneNumber === '') {
      return (
        <AppButton
          text={strings.purpose.fill_additional_information}
          onPress={onPressFillAdditional}
          disable={purpose.length === 0}
        />
      );
    }
    return (
      <AppButton
        text={strings.common.submit_info}
        onPress={onPressSubmit}
        disable={purpose.length === 0}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header titleText={strings.purpose.select_purpose} hasButtonBack={true} />
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{strings.purpose.choose_one_or_more}</Text>
        <SelectMultiple
          items={purposeList}
          selectedItems={purpose}
          onSelectionsChange={onSelectionChange}
        />
      </View>
      {renderButton()}
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: '10@ms',
    paddingVertical: '10@vs',
  },
  text: {
    fontSize: '13@ms',
    color: AppColors.text,
    marginBottom: '10@vs',
  },
});
