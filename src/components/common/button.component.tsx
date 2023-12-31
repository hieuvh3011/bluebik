import {Pressable, Text, ViewStyle, TextStyle} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import AppColors from '@app/utils/colors';

interface Props {
  onPress: (param: any) => void;
  text: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disable?: boolean;
}

const AppButton: React.FC<Props> = ({
  text,
  onPress,
  style,
  textStyle,
  disable = false,
}) => {
  if (disable) {
    return (
      <Pressable style={[styles.disableContainer, style]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  container: {
    minWidth: '93%',
    paddingHorizontal: '20@ms',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: '11@vs',
    marginVertical: '15@vs',
    justifyContent: 'center',
    backgroundColor: AppColors.primary,
    borderRadius: '5@ms',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  disableContainer: {
    minWidth: '93%',
    paddingHorizontal: '20@ms',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: '11@vs',
    marginVertical: '15@vs',
    justifyContent: 'center',
    backgroundColor: AppColors.disable,
    borderRadius: '5@ms',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  text: {
    fontSize: '14@ms',
    color: AppColors.buttonText,
  },
});

export default AppButton;
