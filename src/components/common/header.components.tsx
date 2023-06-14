import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import AppColors from '@app/utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {navigationRef} from '@app/route/app.navigator';
import SafeAreaView from 'react-native-safe-area-view';
interface Props {
  titleText: string;
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
  hasButtonBack?: boolean | true;
}

const Header: React.FC<Props> = ({
  titleText,
  leftComponent,
  rightComponent,
  hasButtonBack,
}) => {
  const _goBack = () => {
    navigationRef.goBack();
  };

  const _renderLeftComponent = () => {
    if (leftComponent) {
      return <>{leftComponent}</>;
    }
    if (hasButtonBack) {
      return (
        <Pressable
          onPress={_goBack}
          hitSlop={{
            bottom: 10,
            left: 10,
            right: 10,
            top: 10,
          }}>
          <Icon
            name="arrow-left"
            size={moderateScale(17)}
            color={AppColors.background}
          />
        </Pressable>
      );
    }
    if (rightComponent) {
      return <View style={styles.blankRight} />;
    }
  };

  const _renderRightComponent = () => {
    if (rightComponent) {
      return <>{rightComponent}</>;
    }
    if (hasButtonBack) {
      return <View style={styles.blankRight} />;
    }
    return <View />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {_renderLeftComponent()}
      <Text style={styles.text}>{titleText}</Text>
      {_renderRightComponent()}
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingBottom: '10@vs',
    backgroundColor: AppColors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '10@ms',
  },
  text: {
    fontSize: '15@ms',
    color: AppColors.buttonText,
  },
  blankRight: {
    width: '17@ms',
  },
});

export default Header;
