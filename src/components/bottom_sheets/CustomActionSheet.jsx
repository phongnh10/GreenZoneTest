import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { ActionSheet } from 'react-native-ui-lib';
import colors from '../../constants/color';


const CustomActionSheet = () => {
    const [isVisible, setIsVisible] = useState(false);

    const showActionSheet = () => {
        setIsVisible(true);
    };

    const hideActionSheet = () => {
        setIsVisible(false);
    };

    return (
        <View style={styles.container}>
            <Button title="Open Action Sheet" onPress={showActionSheet} />

            <ActionSheet
                visible={isVisible}
                title={'Chọn phương thức đặt hàng'}
                message={'Message goes here'}
                options={[
                    { label: 'Giao hàng', onPress: () => console.log('Chọn giao hàng') },
                    { label: 'Mang đi', onPress: () => console.log('Chọn mang đi') },
                    { label: 'Close', onPress: hideActionSheet, backgroundColor: 'red', color: 'white' }, // Close button
                ]}
                cancelButtonIndex={4}
                destructiveButtonIndex={0}
                containerStyle={styles.containerStyle}
                renderTitle={() => (
                    <Text style={styles.titleText}>Chọn phương thức đặt hàng</Text>
                )}
                renderAction={(option, index, onOptionPress) => {
                    // Nếu là "Close", render một View riêng với background xanh
                    if (option.label === 'Close') {
                        return (
                            <View key={index} style={styles.closeButton}>
                                <Text style={styles.closeText} onPress={hideActionSheet}>
                                    {option.label}
                                </Text>
                            </View>
                        );
                    }
                    // Nếu không phải "Close", render các lựa chọn bình thường
                    return (
                        <View key={index}>
                            {index > 0 && <View style={styles.divider} />}
                            <Text style={styles.optionText} onPress={hideActionSheet}>
                                {option.label}
                            </Text>
                        </View>
                    );
                }}
                onDismiss={hideActionSheet}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerStyle: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        padding: 16,
    },
    optionText: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        textAlign: 'left',
        fontSize: 14,
    },

    titleText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },

    divider: {
        height: 1,
        backgroundColor: colors.green500,
        marginVertical: 8,
    },

    closeButton: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        textAlign: 'center',
        borderRadius: 8,
        marginVertical: 10,
        borderColor: colors.gray300
    },

    closeText: {
        color: colors.black,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500'
    },
});

export default CustomActionSheet;
