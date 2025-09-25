import { StyleSheet, Dimensions, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import colors from './colors';

export default commonStyles = StyleSheet.create({
  statusBar: {
    backgroundColor: colors.colorStatusBar,
    height: Platform.OS === 'android' ? 0 : getStatusBarHeight(),
  },
  splashContainer: {
    flex: 1,
    backgroundColor: colors.colorBackground,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.colorBackground,
    padding: 10,
  },
  Container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    padding: RFValue(16),
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  overlayStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  customOverlayStyles: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.colorLightGray,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('40%'),
  },
  loginContainer: {
    // flex: 1,
    // padding: wp('5%'),
    paddingVertical: hp('3%'),
  },
  forgetContainer: {
    // flex: 1,
    // padding: wp('5%'),
    paddingVertical: hp('5%'),
  },
  signupContainer: {
    // flex: 1,
    // padding: wp('5%'),
    paddingVertical: hp('5%'),
  },
  resetContainer: {
    flex: 1,
    // padding: wp('5%'),
    paddingVertical: hp('3%'),
  },
  homeContainer: {
    flex: 1,
    // padding: wp('5%'),
    paddingVertical: hp('3%'),
  },
  profileContainer: {
    flex: 1,
    padding: wp('5%'),
    paddingVertical: hp('1%'),
    paddingBottom: hp('8%'),
  },
  drillingContainer: {
    flex: 1,
    padding: wp('5%'),
    paddingVertical: hp('1%'),
    paddingBottom: hp('8%'),
  },
  drillContainer: {
    flex: 1,
  },
  explanationContainer: {
    flex: 1,
    padding: wp('5%'),
  },
  chartContainer: {
    flex: 1,
    padding: wp('5%'),
    marginTop: 32,
  },
  privacyContainer: {
    flex: 1,
  },
  drawerContainer: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: colors.colorBackground,
  },
  faintContainer: {
    flex: 1,
    backgroundColor: colors.colorLightGray,
    alignItems: 'center',
  },
  faintContainer1: {
    backgroundColor: colors.colorLightGray,
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: colors.colorWhite,
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
  },
  modalBackground1: {
    flex: 1,
    backgroundColor: colors.colorTransparent,
    justifyContent: 'center',
    paddingHorizontal: wp('0.5%'),
  },
  midContainer: {
    flex: 1,
    backgroundColor: colors.colorBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inContainer: {
    backgroundColor: colors.colorBackground,
    marginHorizontal: wp('2%'),
  },
  centerContainer: {
    flex: 1,
    backgroundColor: colors.colorBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  testContainer: {
    // flex: 1,
    padding: wp('5%'),
    height: hp('35%'),
    width: wp('90%'),
    borderRadius: 4,
    backgroundColor: colors.colorBackground,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  logo: {
    width: wp('34%'),
    height: hp('4.5%'),
    // resizeMode: "center",
  },
  logoHeader: {
    width: wp('34%'),
    height: hp('3%'),
    resizeMode: 'contain',
  },
  headerButtonsView: {
    flex: 0.5,
    flexDirection: 'row',
  },
  langView: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // paddingHorizontal: wp('4%'),
    marginTop: hp('1%'),
  },
  backBtnView: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingHorizontal: wp('4%'),
    marginTop: hp('1%'),
  },
  playBtnView: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingHorizontal: wp('4%'),
    marginTop: hp('1%'),
  },
  onRadioRing: {
    height: 18,
    width: 18,
    borderRadius: 18 / 2,
    borderWidth: 2,
    borderColor: colors.colorText,
    justifyContent: 'center',
    alignItems: 'center',
  },
  onRadioDot: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: colors.colorText,
    justifyContent: 'center',
    alignItems: 'center',
  },
  offRadioRing: {
    height: 18,
    width: 18,
    borderRadius: 18 / 2,
    borderWidth: 2,
    borderColor: colors.colorText,
  },
  headerTextView: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingHorizontal: wp('4%'),
    marginTop: hp('1%'),
  },
  firstHalfView: {
    height: hp('20%'),
    borderBottomRightRadius: RFValue(12),
    borderBottomLeftRadius: RFValue(12),
    backgroundColor: colors.colorPrimary,
    padding: wp('5%'),
  },
  secondHalfView: {
    height: '100%', // hp('80%'),
    backgroundColor: colors.colorBackground,
    padding: wp('5%'),
  },
  drawerView: {
    height: hp('100%'),
    backgroundColor: colors.colorBackground,
    borderTopRightRadius: 6,
  },
  drawerItem: {
    flexDirection: 'row',
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('3%'),
  },
  firstHalfInView: {
    height: hp('12%'),
    justifyContent: 'center',
    borderBottomRightRadius: RFValue(12),
    borderBottomLeftRadius: RFValue(12),
    backgroundColor: colors.colorPrimary,
    paddingHorizontal: wp('5%'),
  },
  secondHalfInView: {
    height: hp('83%'),
    backgroundColor: colors.colorBackground,
  },
  virtualView: {
    justifyContent: 'space-around',
    alignContent: 'center',
    height: hp('73%'),
    margin: wp('4%'),
    paddingHorizontal: wp('3%'),
    paddingVertical: wp('3%'),
    marginTop: hp('-23%'),
    zIndex: 5,
    backgroundColor: colors.colorWhite,
    borderRadius: 4,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
  },
  dashImg: {
    height: hp('30%'),
    width: wp('97%'),
    margin: wp('1.5%'),
    backgroundColor: colors.colorWhite,
  },
  recentData: {
    height: hp('22%'),
    width: wp('100%'),
    backgroundColor: colors.colorLightBlueBackground,
  },
  dashData: {
    height: hp('38%'),
    width: wp('97%'),
    margin: wp('1.5%'),
    backgroundColor: colors.colorBackground,
  },
  recentProItem: {
    backgroundColor: colors.colorWhite,
    width: wp('35%'),
    height: hp('12%'),
    borderRadius: 4,
    borderWidth: 0,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: hp('2%'),
    marginHorizontal: wp('1.5%'),
    paddingHorizontal: wp('1%'),
    paddingVertical: hp('1%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  thumbnailSmallView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
    width: RFValue(16),
    height: RFValue(16),
    borderRadius: RFValue(8),
  },
  fullButton: {
    flexDirection: 'row',
    backgroundColor: colors.colorWhite,
    width: wp('80%'),
    height: hp('7%'),
    borderRadius: 4,
    borderWidth: 0,
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: hp('5%'),
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('2%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  halfLeftButton: {
    backgroundColor: colors.colorBackground,
    width: wp('42.5%'),
    height: wp('35%'),
    borderRadius: 6,
    borderWidth: 1,
    marginVertical: hp('1%'),
    paddingHorizontal: wp('4%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  halfRightButton: {
    backgroundColor: colors.colorBackground,
    width: wp('42.5%'),
    height: wp('35%'),
    borderRadius: 6,
    borderWidth: 1,
    marginVertical: hp('1%'),
    paddingHorizontal: wp('4%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  emptyButton: {
    // backgroundColor: colors.colorBackground,
    width: wp('42.5%'),
    height: wp('35%'),
    borderRadius: 6,
    borderWidth: 0,
    marginVertical: hp('1%'),
    paddingHorizontal: wp('4%'),
  },
  listRowItemView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFValue(4),
  },
  thumbnailView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: RFValue(50),
    height: RFValue(50),
    margin: RFValue(10),
  },
  imageView: {
    width: RFValue(50),
    height: RFValue(50),
  },
  smallThumbnailView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: RFValue(20),
    height: RFValue(20),
  },
  logoView: {
    width: RFValue(40),
    height: RFValue(40),
    borderRadius: RFValue(20),
    resizeMode: "stretch",
  },
  smallLogoView: {
    width: RFValue(35),
    height: RFValue(35),
    resizeMode: "stretch",
  },
  textBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.colorBorder,
    borderWidth: 0.5,
    borderRadius: 16,
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('5%'),
    marginVertical: hp('1%'),
    marginHorizontal: wp('4%'),
  },
  continueButton: {
    width: wp('40%'),
    backgroundColor: colors.colorPrimary,
    borderRadius: 16,
    alignSelf: 'center',
    marginVertical: hp('5%'),
    alignItems: 'center',
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('2%'),
  },

  //profile
  profilePictureContainer: {
    marginTop: 50,
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
  },
  profilePictureImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileDetailsContainer: {
    marginTop: 30,
    alignItems: 'flex-start',
  },
  profileDetailsName: {
    // fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '600',
    color: colors.colorText,
  },
  profileDetailsLocation: {
    // fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: '400',
    color: colors.colorText,
  },
  logOutWrapper: {
    marginBottom: 50,
  },

  searchInput: {
    padding: 4,
    borderWidth: 0,
  },
  customerItem: {
    flexDirection: 'row',
    padding: 4,
  },
  circleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorLightGray,
    width: RFValue(28),
    height: RFValue(28),
    borderRadius: RFValue(14),
    padding: RFValue(1),
  },
  mainBox: {
    marginHorizontal: wp('2%'),
    marginVertical: hp('1%'),
    padding: wp('2%'),
    borderColor: colors.colorBorder,
    borderWidth: RFValue('0.8'),
    backgroundColor: colors.colorWhite,
    // shadowColor: "#000",
    // shadowOffset: {
    //     width: 0,
    //     height: 2,
    // },
    // shadowOpacity: 0.34,
    // shadowRadius: 6.27,
  },
  infoBox: {
    marginHorizontal: wp('2%'),
    marginVertical: hp('1%'),
    padding: wp('2%'),
    borderColor: colors.colorSecondary,
    borderWidth: RFValue('0.6'),
    backgroundColor: colors.colorFaintBackground,
    // shadowColor: "#000",
    // shadowOffset: {
    //     width: 0,
    //     height: 2,
    // },
    // shadowOpacity: 0.34,
    // shadowRadius: 6.27,
  },

  // subscription

  subscriptionView: {
    justifyContent: 'center',
    height: hp('60%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: wp('4%'),
    zIndex: 5,
    backgroundColor: colors.colorBackground,
    borderRadius: 4,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
  },
  creditCardView: {
    justifyContent: 'center',
    height: wp('60%'),
    // padding: wp('4%'),
    marginVertical: wp('4%'),
    backgroundColor: colors.colorBackground,
    borderRadius: 8,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
  },
  successStoriesCardView: {
    justifyContent: 'center',
    // height: wp('60%'),
    padding: wp('2%'),
    marginVertical: wp('4%'),
    backgroundColor: colors.colorBackground,
    borderRadius: 8,
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.2,
  },
  eventListView: {
    justifyContent: 'center',
    // height: wp('30%'),
    padding: wp('4%'),
    marginVertical: wp('4%'),
    backgroundColor: colors.colorBackground,
    borderRadius: 8,
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
  },
  creditCardInView: {
    justifyContent: 'center',
    height: wp('60%'),
    padding: wp('4%'),
  },
  creditCardBackgroundView: {
    justifyContent: 'center',
    height: wp('95%'),
    // padding: wp('4%'),
    marginVertical: wp('4%'),
    backgroundColor: colors.colorBackground,
    borderRadius: 8,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
  },
  creditCardBackgroundView1: {
    justifyContent: 'center',
    height: wp('95%'),
    padding: wp('4%'),
    marginVertical: wp('4%'),
    backgroundColor: colors.colorBackground,
    borderRadius: 8,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
  },

  //===============>> common <<==================//
  boxTextInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical: hp('1.5%'),
    // height: hp('7%'),
    // width: '95%',// wp('90%'),
    borderColor: colors.colorBorder,
    borderRadius: 8,
    borderWidth: 0.6,
    padding: 4,
  },
  boxTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('0.5%'),
    height: hp('3.5%'),
    width: '100%', // wp('90%'),
    borderWidth: 0,
    padding: 4,
  },
  peperBoxTextInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.colorBlack,
    borderRadius: 2,
    borderWidth: 0,
    // height: hp('4%'),
    // marginVertical: hp('1%'),
    // paddingVertical: '1%',
    paddingHorizontal: '5%',
  },
  boxTextInputMulti: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.colorBlack,
    borderRadius: 2,
    borderWidth: 0.6,
    height: hp('10%'),
    marginVertical: hp('1%'),
    paddingVertical: '1%',
    paddingHorizontal: '5%',
  },
  smallInputView: {
    // textAlignVertical: 'top',
    width: '100%',
    fontSize: RFPercentage(1.6),
    padding: Platform.OS === 'android' ? wp('0.5%') : wp('1%'),
  },
  pickerInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.colorBorder,
    borderRadius: 6,
    borderWidth: 0.6,
    height: hp('4%'),
    marginVertical: hp('1%'),
    // paddingVertical: '1%',
    paddingHorizontal: '1%',
  },
  pickerBoxInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.colorBorder,
    borderRadius: 6,
    borderWidth: 0.8,
    height: hp('4%'),
    marginVertical: hp('1%'),
    // paddingVertical: '1%',
    paddingHorizontal: '1%',
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('3.5%'),
    width: wp('27%'),
    borderRadius: 32,
    borderWidth: 0,
    backgroundColor: colors.colorBackground,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 10.27,
    elevation: 10,
  },
  logoutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('3.5%'),
    width: wp('30%'),
    borderRadius: 32,
    borderWidth: 0,
    backgroundColor: colors.colorBackground,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 10.27,
    elevation: 10,
  },
  primaryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp('1.5%'),
    height: hp('5%'),
    width: wp('90%'),
    borderRadius: 32,
    borderWidth: 0,
    backgroundColor: colors.colorAccent,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  secondaryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors.colorSecondary,
    backgroundColor: colors.colorWhite,
  },
  accentButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors.colorSecondary,
    backgroundColor: colors.colorSecondary,
  },
  blackButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorBlackButton,
    paddingVertical: hp('1%'),
    margin: hp('2%'),
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  inputIOS: {
    justifyContent: 'center',
    fontSize: 16,
    borderRadius: 4,
    marginVertical: hp('2%'),
    marginHorizontal: wp('25%'), // to ensure the text is never behind the icon
    borderColor: colors.colorBorder,
    borderRadius: 6,
    borderWidth: 0.8,
    height: hp('4%'),
    // paddingVertical: '1%',
    paddingHorizontal: '1%',
  },

  //===============>> input <<=================//
  container: {
    height: hp('5%'),
    position: 'relative',
  },
  container1: {
    height: hp('5%'),
    position: 'relative',
  },
  labelContainer: {
    position: 'absolute',
    backgroundColor: '#FFF',
    top: -16,
    left: 16,
    padding: 5,
    zIndex: 50,
  },
  textInput: {
    flex: 1,
    borderWidth: 0.8,
    borderColor: colors.colorBorder,
    justifyContent: 'flex-end',
    // height: 44,
    borderRadius: 6,
    paddingVertical: '3%',
    paddingHorizontal: '2%',
    // paddingHorizontal: 25,
    fontSize: RFPercentage(1.6),
    color: colors.colorText,
  },
  textInput1: {
    // flex: 1,
    flexDirection: 'row',
    borderWidth: 0.8,
    borderColor: colors.colorBorder,
    // justifyContent: 'flex-end',
    // height: 44,
    borderRadius: 6,
    paddingVertical: '2%',
    paddingHorizontal: '2%',
    // paddingHorizontal: 25,
  },
  textIn: {
    fontSize: RFPercentage(1.6),
    color: colors.colorText,
  },

  openButton: {
    backgroundColor: colors.colorWhite,
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    width: RFValue(24),
    height: RFValue(24),
    borderRadius: RFValue(12),
    padding: RFValue(1),
    marginLeft: RFValue(-12),
    marginVertical: RFValue(6),
  },
  closeButton: {
    backgroundColor: colors.colorWhite,
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    width: RFValue(28),
    height: RFValue(28),
    borderRadius: RFValue(14),
    padding: RFValue(1),
    marginRight: RFValue(-8),
    // marginVertical: RFValue(6),
  },
  subView: {
    flex: 0.5,
    backgroundColor: colors.colorWhite,
    height: hp('100%'),
    width: wp('40%'),
    borderRightWidth: 0.6,
    borderColor: colors.colorBorder,
  },
  styleVerticalLine: {
    height: 20,
    backgroundColor: colors.colorSecondary,
    width: 1,
  },
  styleHorizontalLine: {
    height: 1,
    backgroundColor: colors.colorSecondary,
    width: 180,
  },
  boxTextStyle: {
    alignItems: 'center',
    textAlign: 'center',
    padding: 5,
    fontSize: 14,
    // fontSize: Constant.FontSize._12
  },
  boxStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('20%'),
    height: 65,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.colorSecondary,
    backgroundColor: colors.colorWhite,
    padding: 6,
    marginBottom: 8,
  },
  poleline1: {
    width: 2,
    height: 32,
    alignSelf: 'center',
    backgroundColor: colors.colorSecondary,
  },
  underline1: {
    width: '50%',
    height: 2,
    backgroundColor: colors.colorSecondary,
  },

  //===============>> text <<==================//
  //regular
  text4: {
    fontSize: RFPercentage(0.4),
    color: colors.colorText,
    fontFamily: 'Poppins-Regular',
  },
  text6: {
    fontSize: RFPercentage(0.6),
    color: colors.colorText,
    fontFamily: 'Poppins-Regular',
  },
  text8: {
    fontSize: RFPercentage(0.8),
    color: colors.colorText,
    fontFamily: 'Poppins-Regular',
  },
  text10: {
    fontSize: RFPercentage(1.0),
    color: colors.colorText,
    fontFamily: 'Poppins-Regular',
  },
  text12: {
    fontSize: RFPercentage(1.2),
    color: colors.colorText,
    fontFamily: 'Poppins-Regular',
  },
  text14: {
    fontSize: RFPercentage(1.4),
    color: colors.colorText,
    fontFamily: 'Poppins-Regular',
  },
  text16: {
    fontSize: RFPercentage(1.6),
    color: colors.colorText,
    fontFamily: 'Poppins-Regular',
  },
  text18: {
    fontSize: RFPercentage(1.8),
    color: colors.colorText,
    fontFamily: 'Poppins-Regular',
  },
  text20: {
    fontSize: RFPercentage(2.0),
    color: colors.colorText,
    fontFamily: 'Poppins-Regular',
  },
  text22: {
    fontSize: RFPercentage(2.2),
    color: colors.colorText,
    fontFamily: 'Poppins-Regular',
  },
  text24: {
    fontSize: RFPercentage(2.4),
    color: colors.colorText,
    fontFamily: 'Poppins-Regular',
  },
  text26: {
    fontSize: RFPercentage(2.6),
    color: colors.colorText,
    fontFamily: 'Poppins-Regular',
  },
  text30: {
    fontSize: RFPercentage(3.0),
    color: colors.colorText,
    fontFamily: 'Poppins-Regular',
  },

  //white
  textw4: {
    fontSize: RFPercentage(0.4),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Regular',
  },
  textw6: {
    fontSize: RFPercentage(0.6),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Regular',
  },
  textw8: {
    fontSize: RFPercentage(0.8),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Regular',
  },
  textw10: {
    fontSize: RFPercentage(1.0),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Regular',
  },
  textw12: {
    fontSize: RFPercentage(1.2),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Regular',
  },
  textw14: {
    fontSize: RFPercentage(1.4),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Regular',
  },
  textw16: {
    fontSize: RFPercentage(1.6),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Regular',
  },
  textw18: {
    fontSize: RFPercentage(1.8),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Regular',
  },
  textw20: {
    fontSize: RFPercentage(2.0),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Regular',
  },
  textw28: {
    fontSize: RFPercentage(2.8),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Regular',
  },

  //bold black
  textBold: {
    fontFamily: 'Poppins-Bold'
  },
  textbb4: {
    fontSize: RFPercentage(0.4),
    color: colors.colorTextBold,
    fontFamily: 'Poppins-Bold'
  },
  textbb6: {
    fontSize: RFPercentage(0.6),
    color: colors.colorTextBold,
    fontFamily: 'Poppins-Bold'
  },
  textbb8: {
    fontSize: RFPercentage(0.8),
    color: colors.colorTextBold,
    fontFamily: 'Poppins-Bold'
  },
  textbb10: {
    fontSize: RFPercentage(1.0),
    color: colors.colorTextBold,
    fontFamily: 'Poppins-Bold'
  },
  textbb12: {
    fontSize: RFPercentage(1.2),
    color: colors.colorTextBold,
    fontFamily: 'Poppins-Bold'
  },
  textbb14: {
    fontSize: RFPercentage(1.4),
    color: colors.colorTextBold,
    fontFamily: 'Poppins-Bold'
  },
  textbb16: {
    fontSize: RFPercentage(1.6),
    color: colors.colorTextBold,
    fontFamily: 'Poppins-Bold'
  },
  textbb18: {
    fontSize: RFPercentage(1.8),
    color: colors.colorTextBold,
    fontFamily: 'Poppins-Bold'
  },
  textbb20: {
    fontSize: RFPercentage(2.0),
    color: colors.colorTextBold,
    fontFamily: 'Poppins-Bold'
  },
  textbb22: {
    fontSize: RFPercentage(2.2),
    color: colors.colorTextBold,
    fontFamily: 'Poppins-Bold'
  },
  textbb24: {
    fontSize: RFPercentage(2.4),
    color: colors.colorTextBold,
    fontFamily: 'Poppins-Bold'
  },
  textbb26: {
    fontSize: RFPercentage(2.6),
    color: colors.colorTextBold,
    fontFamily: 'Poppins-Bold'
  },
  textbb28: {
    fontSize: RFPercentage(2.8),
    color: colors.colorTextBold,
    fontFamily: 'Poppins-Bold'
  },
  textbb30: {
    fontSize: RFPercentage(3.0),
    color: colors.colorTextBold,
    fontFamily: 'Poppins-Bold'
  },
  textbb32: {
    fontSize: RFPercentage(3.2),
    color: colors.colorTextBold,
    fontFamily: 'Poppins-Bold'
  },
  textbb34: {
    fontSize: RFPercentage(3.4),
    color: colors.colorTextBold,
    fontFamily: 'Poppins-Bold'
  },
  textbb36: {
    fontSize: RFPercentage(3.6),
    color: colors.colorTextBold,
    fontFamily: 'Poppins-Bold'
  },

  //bold white
  textbw4: {
    fontSize: RFPercentage(0.4),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Bold'
  },
  textbw6: {
    fontSize: RFPercentage(0.6),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Bold'
  },
  textbw8: {
    fontSize: RFPercentage(0.8),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Bold'
  },
  textbw10: {
    fontSize: RFPercentage(1.0),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Bold'
  },
  textbw12: {
    fontSize: RFPercentage(1.2),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Bold'
  },
  textbw14: {
    fontSize: RFPercentage(1.4),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Bold'
  },
  textbw16: {
    fontSize: RFPercentage(1.6),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Bold'
  },
  textbw18: {
    fontSize: RFPercentage(1.8),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Bold'
  },
  textbw20: {
    fontSize: RFPercentage(2.0),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Bold'
  },
  textbw22: {
    fontSize: RFPercentage(2.2),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Bold'
  },
  textbw24: {
    fontSize: RFPercentage(2.4),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Bold'
  },
  textbw26: {
    fontSize: RFPercentage(2.6),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Bold'
  },
  textbw28: {
    fontSize: RFPercentage(2.8),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Bold'
  },
  textbw30: {
    fontSize: RFPercentage(3.0),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Bold'
  },
  textbw32: {
    fontSize: RFPercentage(3.2),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Bold'
  },
  textbw34: {
    fontSize: RFPercentage(3.4),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Bold'
  },
  textbw36: {
    fontSize: RFPercentage(3.6),
    color: colors.colorWhite,
    fontFamily: 'Poppins-Bold'
  },

  //===============>> underline <<==================//

  divider: {
    height: 8,
    backgroundColor: colors.colorSilver,
  },
  poleline: {
    width: 0.6,
    backgroundColor: colors.colorUnderline,
  },
  textview_poleline: {
    width: 0.6,
    height: '60%',
    backgroundColor: colors.colorUnderline,
  },
  underline: {
    height: 0.6,
    backgroundColor: colors.colorGray,
  },
  underlineWhite: {
    height: 1.5,
    backgroundColor: colors.colorWhite,
  },
  underlineDotted: {
    borderStyle: 'dotted',
    borderWidth: 0.3,
    borderRadius: 1,
    backgroundColor: colors.colorLightGray,
  },
  underlineFaint: {
    height: 0.2,
    backgroundColor: colors.colorUnderline,
  },
  underlineDark: {
    height: 0.7,
    backgroundColor: colors.colorUnderline,
  },
  underlineAccDark: {
    height: 0.7,
    backgroundColor: colors.colorAccentDark,
  },
  underlineAcc: {
    height: 0.7,
    backgroundColor: colors.colorAccentDark,
    marginHorizontal: 50,
    marginTop: 10,
  },

  //===============>> neomorph <<==================//

  languageButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFPercentage(2.0),
    shadowRadius: RFPercentage(0.6),
    backgroundColor: colors.colorPrimary,
    width: RFPercentage(4.0),
    height: RFPercentage(4.0),
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: RFPercentage(5.0),
    height: RFPercentage(5.0),
  },
  playButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFPercentage(3.0),
    shadowRadius: RFPercentage(0.6),
    backgroundColor: colors.colorPrimary,
    width: RFPercentage(6.0),
    height: RFPercentage(6.0),
  },
  shadow1: {
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowRadius: 20,
    backgroundColor: '#ECF0F3',
    width: 300,
    height: 120,
  },
  shadow2: {
    borderRadius: 100,
    shadowOpacity: 0.25,
    shadowColor: 'purple',
    shadowRadius: 20,
    shadowOffset: { width: 20, height: 20 },
    backgroundColor: '#ECF0F3',
    width: 200,
    height: 200,
  },
  shadow3: {
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowRadius: 20,
    backgroundColor: '#ECF0F3',
    width: 300,
    height: 120,
  },
  shadow4: {
    borderRadius: 100,
    shadowOpacity: 0.25,
    shadowColor: 'purple',
    shadowRadius: 20,
    shadowOffset: { width: 20, height: 20 },
    backgroundColor: '#ECF0F3',
    width: 200,
    height: 200,
  },
  neomorph1: {
    borderRadius: 20,
    shadowRadius: 8,
    backgroundColor: '#ECF0F3',
    width: 300,
    height: 120,
  },
  neomorph2: {
    borderRadius: 80,
    shadowRadius: 12,
    backgroundColor: '#ECF0F3',
    width: 160,
    height: 160,
  },
  neomorph3: {
    borderRadius: 80,
    shadowRadius: 12,
    backgroundColor: '#ECF0F3',
    width: 160,
    height: 160,
    shadowOpacity: 0.5,
  },
  neomorph4: {
    borderRadius: 20,
    shadowRadius: 8,
    backgroundColor: '#ECF0F3',
    width: 300,
    height: 120,
  },
  neomorph5: {
    borderRadius: 80,
    shadowRadius: 8,
    backgroundColor: '#ECF0F3',
    width: 160,
    height: 160,
    shadowOffset: { width: -8, height: -8 },
  },
  neomorph6: {
    borderRadius: 80,
    shadowRadius: 12,
    backgroundColor: '#ECF0F3',
    width: 160,
    height: 160,
    shadowOpacity: 0.5,
  },
  neomorph7: {
    borderRadius: 100,
    shadowRadius: 12,
    backgroundColor: '#ECF0F3',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  neomorph8: {
    borderRadius: 70,
    shadowRadius: 12,
    backgroundColor: '#ECF0F3',
    width: 140,
    height: 140,
  },
  neomorph9: {
    borderRadius: 100,
    shadowRadius: 12,
    backgroundColor: '#ECF0F3',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  neomorph10: {
    borderRadius: 70,
    shadowRadius: 12,
    backgroundColor: '#ECF0F3',
    width: 140,
    height: 140,
  },
  neomorphblur1: {
    borderRadius: 100,
    shadowRadius: 12,
    backgroundColor: '#ECF0F3',
    width: 200,
    height: 200,
  },
  neomorphblur2: {
    shadowRadius: 12,
    backgroundColor: '#ECF0F3',
    width: 140,
    height: 140,
    shadowOffset: { width: -12, height: -12 },
  },
  neomorphblur3: {
    borderRadius: 100,
    shadowRadius: 12,
    backgroundColor: '#ECF0F3',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  neomorphblur3_1: {
    borderRadius: 70,
    shadowRadius: 12,
    backgroundColor: '#ECF0F3',
    width: 140,
    height: 140,
    shadowOffset: { width: -12, height: -12 },
  },
});