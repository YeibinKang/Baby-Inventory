import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, Checkbox, IconButton } from 'react-native-paper';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, { useAnimatedStyle } from 'react-native-reanimated';

const ShoppingListItem = ({ item, onSwipeComplete, onEdit }) => {
  const [checked, setChecked] = useState(false);

  // Right swipeable actions
  const renderRightActions = (progress, dragX) => {
    const animatedStyle = useAnimatedStyle(() => {
      // Example: animate opacity based on swipe progress
      return {
        opacity: progress.value, // Fade the delete button in as it's swiped
      };
    });

    return (
      <Reanimated.View style={[styles.rightAction, animatedStyle]}>
        <IconButton
          icon="delete"
          iconColor='#ffffff'
          onPress={() => onSwipeComplete(item.uid)}
          style={{height:'100%', width:'100%', borderRadius:0}} 
        />
      </Reanimated.View>
    );
  };

  return (
    <Card style={styles.shoppingListitemCard}>
          <ReanimatedSwipeable
            friction={2}
            renderRightActions={renderRightActions}
            rightThreshold={40} // Adjust swipe threshold for triggering the actions
            containerStyle={styles.swipeableContainer}
          >
            <Card.Content style={styles.shoppingListCardContent}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => setChecked(!checked)}
              />
              <View style={styles.imageContainer}>
                <Text>Image</Text>
              </View>
              <View style={styles.textContainer}>
                <Button
                  style={styles.editableButton}
                  onPress={() => onEdit(item.uid, 'text', 'Category', 'itemCategory')}
                >
                  {item.itemCategory}
                </Button>
                <Button
                  style={styles.editableButton}
                  onPress={() => onEdit(item.uid, 'text', 'Brand', 'brandName')}
                >
                  {item.brandName}
                </Button>
                <Button
                  style={styles.editableButton}
                  onPress={() => onEdit(item.uid, 'number-picker', 'Stage', 'stage')}
                >
                  Stage {item.stage}
                </Button>
                <View style={styles.row}>
                  <Text>$</Text>
                  <Button
                    style={styles.editableButton}
                    onPress={() => onEdit(item.uid, 'number-input', 'Price', 'pricePerUnit')}
                  >
                    {item.pricePerUnit}
                  </Button>
                </View>
                <View style={styles.row}>
                  <Text>Qty:</Text>
                  <Button
                    style={styles.editableButton}
                    onPress={() => onEdit(item.uid, 'number-picker', 'Qty', 'purchaseQuantity')}
                  >
                    {item.purchaseQuantity} {item.purchaseUnits}(s)
                  </Button>
                </View>
              </View>
            </Card.Content>
        </ReanimatedSwipeable>
      </Card>

  );
};

const styles = StyleSheet.create({
  swipeableContainer: {
    width: '100%',
  },
  shoppingListitemCard: {
    width: '100%',
    marginBottom: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  shoppingListCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    flexWrap: 'wrap',
    borderRadius: 10,
    overflow: 'hidden'
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
    marginRight: '10%',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightAction: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9c2828',
    flexDirection: 'row',
  },
});

export default ShoppingListItem;
