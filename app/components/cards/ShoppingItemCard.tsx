import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, IconButton, Card, Checkbox } from 'react-native-paper';
// import {Swipeable} from 'react-native-gesture-handler';


const ShoppingListItem = ({ item, onSwipeComplete, onEdit }) => {
  const [checked, setChecked] = useState(false);

  // const renderRightActions = (progress, drag) => {
  //   const opacity = drag.interpolate({ inputRange: [-150, 0], outputRange: [1, 0], extrapolate: 'clamp' });
  //   return (
  //     <View style={{ backgroundColor: '#dab4b4', padding: 10, justifyContent: 'center' }}>
  //       <TouchableOpacity onPress={onSwipeComplete}>
  //         <IconButton icon="delete" iconColor="#6a0909" style={{ color: 'white', opacity: opacity }} />
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

  return (
    <Card style={styles.shoppingListitemCard}>
      {/* <Swipeable renderRightActions={renderRightActions}>
        <Card.Content style={styles.shoppingListCardContent}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <View style={styles.imageContainer}>
            <Text>Image</Text>
          </View>
          <View style={styles.textContainer}>
            <Button style={styles.editableButton} onPress={() => onEdit(item.uid, 'text', 'Category', 'itemCategory')}>
              {item.itemCategory}
            </Button>
            <Button style={styles.editableButton} onPress={() => onEdit(item.uid, 'text', 'Brand', 'brandName')}>
              {item.brandName}
            </Button>
            <Button style={styles.editableButton} onPress={() => onEdit(item.uid, 'number-picker', 'Stage', 'stage')}>
              Stage {item.stage}
            </Button>
            <View style={styles.row}>
              <Text>$</Text>
              <Button style={styles.editableButton} onPress={() => onEdit(item.uid, 'number-input', 'Price', 'pricePerUnit')}>
                {item.pricePerUnit}
              </Button>
            </View>
            <View style={styles.row}>
              <Text>Qty:</Text>
              <Button style={styles.editableButton} onPress={() => onEdit(item.uid,'number-picker', 'Qty', 'purchaseQuantity')}>
                {item.purchaseQuantity} {item.purchaseUnits}(s)
              </Button>
            </View>
          </View>
        </Card.Content>
      </Swipeable> */}
    </Card>
  );
};

const styles = StyleSheet.create({
  shoppingListitemCard: {
    width: '100%',
    marginBottom: 10, // Prevents cards from sticking together
    marginHorizontal: 15, // Optional: adds space on left and right
  },
  shoppingListCardContent: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingVertical: 10, // Add some space inside the card
  },
  editableButton: {
    paddingLeft: 0,
    paddingRight: 0,
    margin: 0,
    width: 'auto',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 60,
    height: 60,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ShoppingListItem;
