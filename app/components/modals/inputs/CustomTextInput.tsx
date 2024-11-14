// src/components/CustomTextInput.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {TextInput} from 'react-native-paper'

const CustomTextInput = ({ label, value, onChangeText}) => {


    return (
        <View>
            <Text style={styles.title}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        marginBottom: 20,
        fontSize: 16,
        borderWidth: 1,
        padding: 8,
        borderRadius: 5,
        borderColor: '#ccc',
    },
});

export default CustomTextInput;
