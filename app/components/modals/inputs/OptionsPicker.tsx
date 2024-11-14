// src/components/OptionsPicker.js
import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

const OptionsPicker = ({ label, onValueChange, options,  value }) => {
    return (
        <View>
            <Text style={styles.title}>{label}</Text>
            <Picker
                selectedValue={value}
                onValueChange={onValueChange}
                style={styles.input}
            >
                {options && options.map((option, index) => (
                    <Picker.Item key={index} label={option} value={option} />
                ))}
            </Picker>
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
    },
});

export default OptionsPicker;
