import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WheelPickerExpo from 'react-native-wheel-picker-expo';

const getIndexOfValue = (value, options) => {
  const index = options.indexOf(value);
  return index === -1 ? 0 : index;
};

const NumberPicker = ({ label, onValueChange, options, value }) => {
  const [selectedIndex, setSelectedIndex] = useState(() => getIndexOfValue(value, options) || 0);

  useEffect(() => {
    const index = getIndexOfValue(value, options);
    if (index !== selectedIndex) {
      setSelectedIndex(index);
    }
  }, [value, options]);

  const handleValueChange = (itemIndex) => {
    const newValue = parseFloat(options[itemIndex]).toFixed(2);
    setSelectedIndex(itemIndex);
    onValueChange(newValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <WheelPickerExpo 
        initialSelectedIndex={selectedIndex}
        items={options.map((num) => ({ label: `${num}`, value: num }))}
        onChange={({ index }) => handleValueChange(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
  },
  picker: {
    width: 300,
    height: 150,
  },
});

export default NumberPicker;
