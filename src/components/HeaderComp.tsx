import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import {
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import commonStyles from '../utils/commonStyles';
import colors from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

interface Headerprops {
  midText?: string;
  logoImage?: ImageSourcePropType;
  lefticon?: boolean;
  headerView?: object;
  onPressBack?: () => {};
  subText?: string;
  onPressRight?: () => {};
}

const HeaderComp: FC<Headerprops> = ({
  midText,
  logoImage,
  lefticon,
  onPressBack,
  subText,
  onPressRight,
}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ ...styles.headerView }}>
        <View style={styles.backButton}>
          {lefticon && (
            <TouchableOpacity
              onPress={onPressBack ? onPressBack : () => navigation.goBack()}
              activeOpacity={0.8}
              style={commonStyles.backButton}>
              <Ionicons
                name="arrow-back"
                size={RFValue(20)}
                color={colors.colorGray}
              />
            </TouchableOpacity>
          )}
        </View>


        <View style={styles.midContainer}>
          {logoImage && (
            <View style={styles.imageView}>
              <Image style={styles.iconStyle} source={logoImage} />
            </View>
          )}
          {midText && (
            <View style={styles.midTextView}>
              <Text
                numberOfLines={1}
                style={styles.midTextStyle}>
                {midText}
              </Text>

              {subText &&
                <Text
                  numberOfLines={1}
                  style={styles.midSubTextStyle}>
                  {subText}
                </Text>
              }
            </View>
          )}
        </View>

        <View style={styles.leftContainer}>
          <View style={{ justifyContent: 'center', padding: RFValue(4) }}>
            <TouchableOpacity
              // onPress={onPressRight1}
              style={styles.tabletView}>
              <Feather
                name="globe"
                size={RFValue(16)}
                color={colors.colorGray}
              />

              <Text
                style={styles.langTextStyle}>
                {'English'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={commonStyles.underline}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
  },
  backButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  midContainer: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  imageView: {
    flex: 1,
    padding: RFValue(4)
  },
  midTextView: {
    flex: 2.5,
    padding: RFValue(4)
  },
  leftContainer: {
    flex: 2,
    justifyContent: 'center',
    marginHorizontal: wp(2)
  },
  midTextStyle: {
    ...commonStyles.text24,
    ...commonStyles.textBold,
  },
  midSubTextStyle: {
    ...commonStyles.text16,
  },
  twoRightIconText: {
    ...commonStyles.text26,
    ...commonStyles.textBold,
    marginLeft: hp(20),
  },
  iconStyle: {
    ...commonStyles.logoView
  },
  tabletView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(16),
    borderWidth: 0.7,
    borderColor: colors.colorGray,
    padding: RFValue(4)

  },
  langTextStyle: {
    ...commonStyles.text18,
    textAlign: 'left',
    marginLeft: RFValue(6)
  },
});

export default React.memo(HeaderComp);
