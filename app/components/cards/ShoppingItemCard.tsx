import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, IconButton, Card, Checkbox } from 'react-native-paper';



const ShoppingListItem = ({ item, onSwipeComplete, onEdit }) => {
  const [checked, setChecked] = useState(false);


  return (
    <Card style={styles.shoppingListitemCard}>
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
    </Card>
  );
};

const styles = StyleSheet.create({ 
  shoppingListitemCard: { 
    width: '100%', 
    marginBottom: 10, 
    marginHorizontal: 15, 
  }, 
  shoppingListCardContent: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 10, 
    flexWrap: 'wrap', 
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
    width: '30%', 
    aspectRatio: 1,
    backgroundColor: 'gray', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 5, 
    marginRight: '10%'
  }, 
  textContainer: { 
    flex: 1,
    flexDirection:'column' ,
    justifyContent: 'center', 
    alignItems:'center'
  }, 
});
export default ShoppingListItem;
