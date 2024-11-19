import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const NumberInput = ({ label, value, onChangeText }) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (text) => {
    const numericValue = text.replace(/[^0-9.]/g, '');
    
    if (numericValue.split('.').length <= 2) {
      setInternalValue(numericValue);
      onChangeText(numericValue);
    }
  };

  const handleBlur = () => {
    const formattedValue = parseFloat(internalValue).toFixed(2);
    setInternalValue(formattedValue);
    onChangeText(formattedValue);
  };

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <TextInput
        mode="outlined"
        value={internalValue}
        onChangeText={handleChange}
        onBlur={handleBlur}
        keyboardType="decimal-pad"
        style={styles.input}
        label={label}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    padding: 8,
  },
});

export default NumberInput;
