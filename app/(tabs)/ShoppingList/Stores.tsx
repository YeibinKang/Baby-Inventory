import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

const physicalStores = [
  { id: '1', name: 'Best Buy', description: 'Electronics and appliances' },
  { id: '2', name: 'Target', description: 'Groceries, clothing, and more' },
  { id: '3', name: 'Home Depot', description: 'Home improvement and garden supplies' },
  { id: '4', name: 'Walmart', description: 'One-stop shop for groceries and essentials' },
];

const Stores = () => {
  const renderStore = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.storeName}>{item.name}</Text>
        <Text>{item.description}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => console.log(`Navigating to ${item.name}`)}>View Details</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={physicalStores}
        renderItem={renderStore}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Stores;
