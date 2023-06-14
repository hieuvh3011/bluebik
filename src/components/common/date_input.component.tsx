import {View, Text, ViewStyle, Pressable} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import AppColors from '@app/utils/colors';

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onPressChangeDate: () => void;
  style?: ViewStyle;
  errorText?: string;
  [key: string]: any;
}
const AppDateInput: React.FC<Props> = ({
  label,
  placeholder,
  value = '',
  onPressChangeDate,
  style,
  errorText = '',
}: Props) => {
  const isError = errorText !== '';

  const renderText = () => {
    if (value === '') {
      return <Text style={styles.placeholder}>{placeholder}</Text>;
    }
    return <Text style={styles.textInside}>{value}</Text>;
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <Pressable
        style={[isError ? styles.inputError : styles.input]}
        onPress={onPressChangeDate}>
        {renderText()}
      </Pressable>
      {isError && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '93%',
    alignSelf: 'center',
    marginVertical: '5@vs',
  },
  label: {
    fontSize: '13@ms',
    color: AppColors.text,
  },
  errorText: {
    fontSize: '12@ms',
    color: AppColors.error,
  },
  input: {
    borderWidth: '0.5@ms',
    borderRadius: '4@ms',
    borderColor: AppColors.borderInput,
    minHeight: '40@vs',
    paddingVertical: '4@vs',
    paddingHorizontal: '5@ms',
    justifyContent: 'center',
  },
  inputError: {
    borderWidth: '1@ms',
    borderRadius: '4@ms',
    minHeight: '40@vs',
    paddingVertical: '4@vs',
    paddingHorizontal: '5@ms',
    borderColor: AppColors.error,
    justifyContent: 'center',
  },
  textInside: {
    fontSize: '13@ms',
    color: AppColors.text,
  },
  placeholder: {
    fontSize: '13@ms',
    color: AppColors.placeholder,
  },
});

export default AppDateInput;
