import {
  Image,
  SafeAreaView,
  View,
  Text,
  Button,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  Image,
  SafeAreaView,
  View,
  Text,
  Button,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import ScreenEnum from '../../constants/screenEnum';
import HeaderWithBadge from '../../components/headers/HeaderWithBadge';
import colors from '../../constants/color';
import LightStatusBar from '../../components/status_bars/LightStatusBar';
import OverlayStatusBar from '../../components/status_bars/OverlayStatusBar';
import CategoryScreen from '../../components/category/CategoryScreen';
import ComboProductsScreen from '../product/ComboProductsScreen';

const {width} = Dimensions.get('window');

const HomeScreen = props => {
  const {navigation} = props;

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <LightStatusBar />
        <HeaderWithBadge
          title="Home"
          onBadgePress={() => console.log('Click badge')}
          isHome={true}
        />

        <CategoryScreen />

        <ComboProductsScreen />

        <Button
          title="Open Modal"
          onPress={() => navigation.navigate('ProductDetailSheet')}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
  },
});
