import { StyleSheet, Text, View, TextInput, Pressable, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../screens/auth/LoginScreen'
import colors from '../constants/color'

const InputStyled = (props) => {
    const { placeholder, value, setValue, message } = props
    return (

        <View style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',

        }}>
            <TextInput
                style={[styles.textInput, { fontWeight: value ? 'bold' : '300' }]}
                placeholder={placeholder}
                placeholderTextColor={colors.gray}
                keyboardType="email-address"
                value={value}
                onChangeText={setValue}
            />

            <Text style={[styles.invalidText, { color: message ? colors.invalid : colors.primary }]}>{message}</Text>
        </View>

    )
}







export default InputStyled;


