import React from 'react';
import { StyleSheet, Image, SafeAreaView, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { View, Text } from 'react-native';
import LightStatusBar from '../../components/status_bars/LightStatusBar';
import GLOBAL_KEYS from '../../constants/global_keys';
import colors from '../../constants/color';
import { Icon } from 'react-native-paper';


const VoucherScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LightStatusBar />
      <ImageBackground
        source={require('../../assets/images/bgvoucher.png')}
        resizeMode="cover"
        style={styles.imageBg}
      >
        <View style={styles.padding}>
          <Text style={styles.title}>Ưu đãi</Text>
          <View style={styles.content}>
            <Text style={styles.title}>Mới</Text>
            <TouchableOpacity style={styles.myticket}>
              <Icon source="ticket-confirmation-outline" size={GLOBAL_KEYS.ICON_SIZE_DEFAULT} color={colors.primary} />
              <Text style={styles.tmyvoucher}>Voucher của tôi</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.barcode}>
            <Image source={require('../../assets/images/barcode.png')} style={styles.imgcode} />
            <Text>M41352236</Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.paddingBody}>
        <View style={styles.row}>
          {cardData.slice(0, 2).map((item) => (
            <Card key={item.id} icon={item.icon} text={item.text} />
          ))}
        </View>
        <View style={styles.row}>
          {cardData.slice(2).map((item) => (
            <Card key={item.id} icon={item.icon} text={item.text} />
          ))}
        </View>

        <View style={styles.ticket}>
          <Text style={styles.ticketTitle}>Phiếu ưu đãi của bạn</Text>
          <TouchableOpacity style={styles.allTicket}>
            <Text style={styles.textall}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};



const { width, height } = Dimensions.get('window');

// Dữ liệu để hiển thị các card
const cardData = [
  { id: 1, icon: <Icon source="crown" size={GLOBAL_KEYS.ICON_SIZE_DEFAULT} color={colors.yellow700} />, text: "Hạng thành viên" },
  { id: 2, icon: <Icon source="clock-edit" size={GLOBAL_KEYS.ICON_SIZE_DEFAULT} color={colors.red800} />, text: "Lịch sử mua hàng" },
  { id: 3, icon: <Icon source="shield-check" size={GLOBAL_KEYS.ICON_SIZE_DEFAULT} color={colors.orange700} />, text: "Quyền lợi của bạn" },
  { id: 4, icon: <Icon source="gift" size={GLOBAL_KEYS.ICON_SIZE_DEFAULT} color={colors.primary} />, text: "Đổi thưởng" },
];

// Component hiển thị từng card
const Card = ({ icon, text }) => (
  <TouchableOpacity style={styles.card}>
    {icon}
    <Text style={styles.cardText}>{text}</Text>
  </TouchableOpacity>
);





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'column',
  },
  imageBg: {
    maxWidth: '100%',
    height: height / 3,
    overflow: 'hidden',
  },
  padding: {
    flexDirection: 'column',
    padding: GLOBAL_KEYS.PADDING_DEFAULT,
    gap: GLOBAL_KEYS.GAP_DEFAULT,
  },
  paddingBody: {
    flexDirection: 'column',
    padding: GLOBAL_KEYS.PADDING_DEFAULT,
    gap: GLOBAL_KEYS.GAP_DEFAULT,
  },
  title: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_HEADER,
    fontWeight: 'bold',
    color: colors.white,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  myticket: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: GLOBAL_KEYS.PADDING_SMALL,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
    gap: GLOBAL_KEYS.GAP_SMALL,
  },
  tmyvoucher: {
    color: colors.primary,
  },
  barcode: {
    backgroundColor: colors.white,
    padding: GLOBAL_KEYS.PADDING_DEFAULT,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
    marginTop: GLOBAL_KEYS.GAP_SMALL,
    alignItems: 'center',
  },
  imgcode: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: GLOBAL_KEYS.GAP_DEFAULT,
  },
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
    padding: GLOBAL_KEYS.PADDING_DEFAULT,
    justifyContent: 'space-between',
    shadowColor: colors.gray700,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0,
    shadowRadius: 1,
    elevation: 4,
  },
  cardText: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_DEFAULT,
    fontWeight: 'bold',
    color: colors.black,
  },
  ticket: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ticketTitle: {
    fontSize: GLOBAL_KEYS.TEXT_SIZE_HEADER,
    fontWeight: 'bold',
    color: colors.gray900,
  },
  allTicket: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.green500,
    padding: GLOBAL_KEYS.PADDING_SMALL,
    borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
  },
  textall: {
    color: colors.white,
    fontWeight: 'bold',
  },
});


export default VoucherScreen;
