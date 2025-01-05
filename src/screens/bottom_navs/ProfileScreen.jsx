import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Icon } from 'react-native-paper';
import GLOBAL_KEYS from '../../constants/global_keys';
import colors from '../../constants/color';
import LightStatusBar from '../../components/status_bars/LightStatusBar';
import HeaderWithBadge from '../../components/headers/HeaderWithBadge';
const ProfileScreen = () => {


  return (
    <SafeAreaView style={styles.container}>
      <LightStatusBar />
      <HeaderWithBadge title="Cá nhân" />
      <ScrollView style={styles.body}>
        <Text style={styles.sectionTitle}>Tài khoản</Text>
        <FlatList
          data={accountOptions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCard}
          contentContainerStyle={styles.accountContainer}
          numColumns={2}
        />
        <Text style={styles.sectionTitle}>Tiện ích</Text>
        <View style={styles.support}>
          <FlatList
            data={utilityOptions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
const renderCard = ({ item }) => (
  <TouchableOpacity style={styles.card}>
    <Icon source={item.icon} size={GLOBAL_KEYS.ICON_SIZE_DEFAULT} color={item.color} />
    <Text style={styles.cardText}>{item.label}</Text>
  </TouchableOpacity>
);

const renderItem = ({ item }) => (
  <TouchableOpacity style={styles.item}>
    <View style={styles.leftSection}>
      <Icon source={item.icon} size={GLOBAL_KEYS.ICON_SIZE_DEFAULT} color={item.color} />
      <Text style={styles.itemText}>{item.label}</Text>
    </View>
  </TouchableOpacity>
);
const accountOptions = [
  { id: 1, label: 'Thông tin cá nhân', icon: 'account', color: colors.primary },
  { id: 2, label: 'Địa chỉ', icon: 'google-maps', color: colors.pink500 },
  { id: 3, label: 'Lịch sử đơn hàng', icon: 'file-document-edit', color: colors.orange700 },
];

const utilityOptions = [
  { id: 1, label: 'Cài đặt', icon: 'cog', color: colors.gray700 },
  { id: 2, label: 'Liên hệ góp ý', icon: 'chat', color: colors.gray700 },
  { id: 3, label: 'Đánh giá đơn hàng', icon: 'star', color: colors.gray700 },
  { id: 4, label: 'Đăng xuất', icon: 'logout', color: colors.gray700 },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    paddingHorizontal: GLOBAL_KEYS.PADDING_DEFAULT,
    gap: GLOBAL_KEYS.GAP_DEFAULT,
  },
  sectionTitle: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_HEADER,
    fontWeight: 'bold',
    marginBottom: GLOBAL_KEYS.GAP_DEFAULT,
  },
  accountContainer: {
    gap: GLOBAL_KEYS.GAP_DEFAULT,
    marginBottom: GLOBAL_KEYS.GAP_DEFAULT,
  },
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
    padding: GLOBAL_KEYS.PADDING_SMALL,
    justifyContent: 'space-around',
    elevation: 4,
    marginRight: GLOBAL_KEYS.GAP_DEFAULT,
    gap: GLOBAL_KEYS.GAP_SMALL,
  },
  cardText: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_DEFAULT,
    fontWeight: 'bold',
    color: colors.black,
  },
  support: {
    backgroundColor: colors.white,
    padding: GLOBAL_KEYS.PADDING_DEFAULT,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
    elevation: 2,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: GLOBAL_KEYS.PADDING_SMALL,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
    fontSize: GLOBAL_KEYS.TEXT_SIZE_DEFAULT,
    color: colors.black,
  },
  separator: {
    height: 1,
    backgroundColor: colors.gray300,
    marginVertical: GLOBAL_KEYS.PADDING_SMALL,
  },
});
