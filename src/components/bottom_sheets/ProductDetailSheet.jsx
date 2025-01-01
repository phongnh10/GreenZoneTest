import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Pressable, StatusBar } from 'react-native';
import { IconButton } from 'react-native-paper'; // Sử dụng IconButton từ react-native-paper
import GLOBAL_KEYS from '../../constants/global_keys';
import colors from '../../constants/color';
import RadioGroup from '../RadioGroup';

const ProductDetailSheet = (props) => {
    const { navigation } = props;
    const [isFavorite, setIsFavorite] = useState(false); // State để xử lý toggle yêu thích
    const [showFullDescription, setShowFullDescription] = useState(false); // State để toggle mô tả

    const [selectedSize, setSelectedSize] = useState('M'); // Giá trị mặc định

    const hideModal = () => {
        navigation.goBack();
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite); // Đổi trạng thái yêu thích
    };

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription); // Toggle mô tả
    };

    const productDescription =
        "Trà Sữa Trân Châu Hoàng Kim là một thức uống được yêu thích với vị ngọt vừa phải, hương thơm đặc trưng và topping trân châu mềm dẻo. Thích hợp để thưởng thức trong mọi dịp.";

    return (
        <View style={styles.modalContainer}>
            <ScrollView style={styles.modalContent}>
                <ProductImage hideModal={hideModal} />

                <View style={styles.column}>
                    <ProductInfo
                        isFavorite={isFavorite}
                        toggleFavorite={toggleFavorite}
                    />

                    <ProductDescription
                        description={productDescription}
                        showFullDescription={showFullDescription}
                        toggleDescription={toggleDescription}
                    />

                    <Text style={styles.title} >Size
                        <Text style={styles.redText}>*</Text>
                    </Text>

                    <RadioGroup
                    data={sizes}
                    selectedValue={selectedSize}
                    onChange={newValue => setSelectedSize(newValue)}
                    labelExtractor={item => item.label} // Lấy nhãn từ mỗi item
                    valueExtractor={item => item.value} // Lấy giá trị từ mỗi item
                    additionalInfoExtractor={item => item.price} // Lấy giá tiền
                    renderAdditionalInfo={price => <Text style={styles.price}>${price}</Text>} // Hiển thị giá
                />
                </View>
              

            </ScrollView>
        </View>
    );
};

const sizes = [
    { label: 'S', value: 'S', price: 10 },
    { label: 'M', value: 'M', price: 15 },
    { label: 'L', value: 'L', price: 20 },
    { label: 'XL', value: 'XL', price: 25 },
];

const ProductImage = ({ hideModal }) => (
    <View style={styles.imageContainer}>
        <Image
            source={require('../../assets/images/product1.png')} // Thay thế bằng URL ảnh sản phẩm
            style={styles.productImage}
            resizeMode="cover"
            onError={() => console.error('Failed to load image')}
        />
        <IconButton
            icon="close"
            size={GLOBAL_KEYS.ICON_SIZE_SMALL}
            color={colors.white}
            style={styles.closeButton}
            onPress={hideModal}
        />
    </View>
);

const ProductInfo = ({ isFavorite, toggleFavorite }) => (
    <View style={styles.horizontalView}>
        <Text
            style={styles.productName}
            numberOfLines={2}
            ellipsizeMode="tail"
        >
            Trà Sữa Trân Châu Hoàng Kim - Vị thơm ngon đặc biệt không thể bỏ lỡ!
        </Text>
        <IconButton
            icon={isFavorite ? "heart" : "heart-outline"}
            size={GLOBAL_KEYS.ICON_SIZE_LARGE}
            iconColor={isFavorite ? colors.primary : colors.gray700}
            onPress={toggleFavorite}
        />
    </View>
);

const ProductDescription = ({ description, showFullDescription, toggleDescription }) => (
    <View style={styles.descriptionContainer}>
        <Text
            style={styles.descriptionText}
            numberOfLines={showFullDescription ? undefined : 2}
            ellipsizeMode="tail"
        >
            {description}
        </Text>
        <Pressable style={styles.textButton} onPress={toggleDescription}>
            <Text style={styles.textButtonLabel}>
                {showFullDescription ? 'Thu gọn' : 'Xem thêm'}
            </Text>
        </Pressable>
    </View>
);

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: colors.white,
        flex: 1,
        width: '100%',
        marginTop: StatusBar.currentHeight + 40
    },
    modalContent: {
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: GLOBAL_KEYS.BORDER_RADIUS_DEFAULT,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,

    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: 300,
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
    closeButton: {
        position: 'absolute',
        top: GLOBAL_KEYS.PADDING_DEFAULT,
        right: GLOBAL_KEYS.PADDING_DEFAULT,
        backgroundColor: colors.green100,
    },
    horizontalView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 4
    },
    column: {
        flexDirection: 'column',
        paddingHorizontal: GLOBAL_KEYS.PADDING_DEFAULT
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black,
        flex: 1,
        marginRight: 8,
        lineHeight: GLOBAL_KEYS.LIGHT_HEIGHT_DEFAULT,
    },
    descriptionContainer: {
        gap: 8,
    },
    descriptionText: {
        fontSize: GLOBAL_KEYS.TEXT_SIZE_DEFAULT,
        color: colors.gray700,
        lineHeight: GLOBAL_KEYS.LIGHT_HEIGHT_DEFAULT,
    },
    title: {
        fontWeight: 'bold'
    },
    textButton: {
        alignSelf: 'flex-start',
        paddingVertical: 4,
    },
    redText: {
        color: colors.red800
    },
    textButtonLabel: {
        fontSize: GLOBAL_KEYS.TEXT_SIZE_DEFAULT,
        color: colors.teal900,
    },
    price: {
        color: 'black',
        fontSize: 16,
    },
    selectedSize: {
        color: 'black',
        marginTop: 10,
        fontSize: 16,
    },
});

export default ProductDetailSheet;
