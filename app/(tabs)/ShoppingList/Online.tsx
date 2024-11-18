import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

const onlineStores = [
  { id: '1', name: 'Amazon', description: 'Shop millions of products' },
  { id: '2', name: 'eBay', description: 'Buy and sell on our marketplace' },
  { id: '3', name: 'Walmart', description: 'Grocery and everyday items' },
  { id: '4', name: 'Target', description: 'Find everything you need' },
];

const Online = () => {
  const renderStore = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.storeName}>{item.name}</Text>
        <Text>{item.description}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => console.log(`Navigating to ${item.name}`)}>Shop Now</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={onlineStores}
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

export default Online;
