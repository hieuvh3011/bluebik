import {
  Pressable,
  Text,
  GestureResponderEvent,
  ViewStyle,
  Image,
  ImageSourcePropType,
  RegisteredStyle,
} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import AppColors from '@app/utils/colors';

interface Props {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  sourceImage: ImageSourcePropType;
  style?: ViewStyle;
  textStyle?: RegisteredStyle<any>;
}

const ButtonWithImage: React.FC<Props> = ({
  onPress,
  text,
  sourceImage,
  style,
  textStyle,
}: Props) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Image source={sourceImage} style={styles.image} />
      <Text numberOfLines={1} style={[styles.text, textStyle]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: '4@ms',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '10@vs',
    marginVertical: '5@vs',
    backgroundColor: AppColors.buttonWithImageBackground,
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
    flex: 1,
    paddingRight: '10@ms',
  },
  image: {
    width: '20@ms',
    height: '20@ms',
    marginHorizontal: '10@ms',
  },
});

export default ButtonWithImage;
