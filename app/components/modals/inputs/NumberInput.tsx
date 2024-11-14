import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';

const NumberInput = ({ label, value, onChangeText }) => {
  const [internalValue, setInternalValue] = useState(value);

  
  const handleChange = (text) => {
  
    const numericValue = text.replace(/[^0-9.]/g, '');
    
    if (numericValue.split('.').length <= 2) {
      const formattedValue = parseFloat(numericValue).toFixed(2);
      setInternalValue(formattedValue);
      onChangeText(formattedValue);
    }
  };

  const handleBlur = () => {
    const formattedValue = parseFloat(internalValue).toFixed(2);
    onChangeText(formattedValue);
    setInternalValue(formattedValue);
  };

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <TextInputMask
        type="custom" 
        value={internalValue}
        onChangeText={handleChange}
        onBlur={handleBlur}
        keyboardType="decimal-pad"
        style={styles.input}
        options={{
          mask:"9999.99",
        }}
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
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    borderColor: '#ccc',
  },
});

export default NumberInput;
