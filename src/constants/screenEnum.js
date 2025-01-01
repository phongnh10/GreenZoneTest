const screens = {
  // auth
  SplashScreen: 'SplashScreen',
  LoginScreen: 'LoginScreen',
  MainScreen: 'MainScreen',
  ProductDetail: 'ProductDetail',

  // bottom_navs_screen
  HomeScreen: 'HomeScreen',
  OrderScreen: 'OrderScreen',
  MerchantScreen: 'MerchantScreen',
  VoucherScreen: 'VoucherScreen',
  OtherScreen: 'OtherScreen',

  // bottom_navs_stack
  HomeStackScreen: 'HomeStackScreen',
  OrderStackScreen: 'OrderStackScreen',
  MerchantStackScreen: 'MerchantStackScreen',
  VoucherStackScreen: 'VoucherStackScreen',
  OtherStackScreen: 'OtherStackScreen',

  // bottom - sheet
  BottomSheet: 'BottomSheet',
};

const ScreenEnum = Object.freeze({
  ...screens,
});

export default ScreenEnum;
