import {View, Text, ViewStyle, TextInput} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import AppColors from '@app/utils/colors';

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  style?: ViewStyle;
  errorText?: string;
  [key: string]: any;
}
const AppTextInput: React.FC<Props> = ({
  label,
  placeholder,
  value,
  onChangeText,
  style,
  errorText = '',
  ...rest
}: Props) => {
  const isError = errorText !== '';
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        {...rest}
        style={isError ? styles.inputError : styles.input}
      />
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
    color: AppColors.text,
    fontSize: '13@ms',
  },
  inputError: {
    borderWidth: '1@ms',
    borderRadius: '4@ms',
    minHeight: '40@vs',
    paddingVertical: '4@vs',
    paddingHorizontal: '5@ms',
    borderColor: AppColors.error,
    color: AppColors.text,
    fontSize: '13@ms',
  },
});

export default AppTextInput;
