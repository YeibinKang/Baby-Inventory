import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import ShoppingListItem from '@components/cards/ShoppingItemCard';
import ShoppingListItemEditModal from '@components/modals/ShoppingListItemEditModal';
import { useShoppingList } from '@context/ShoppingListProvider';



const ShoppingListDetail = () => {
  const { activeShoppingList, setActiveShoppingList, options } = useShoppingList();

  const [editElement, setEditElement] = useState(null);
  const [viewType, setViewType] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [modalKey, setModalKey] = useState(null);
  const [modalValue, setModalValue] = useState(null);
  const [currentUid, setCurrentUid] = useState(null);


  const [updateItems, setUpdateItems] = useState([])
  const handleCheckboxToggle = (item, isChecked) => {
    setUpdateItems((prevItems) => {
      if (isChecked) {
        return [...prevItems, item];
      } else {
        return prevItems.filter((prevItem) => prevItem.uid !== item.uid);
      }
    });
  };

  
  const handleEditModal = (uid, viewType, label, key) => {
    console.log(viewType, label, key, uid)
    setEditElement(label);
    setViewType(viewType);
    setModalKey(key);
    const item = activeShoppingList.find((item) => item.uid === uid);
    console.log(item)
    setModalValue(item[key]);

    setCurrentUid(uid);
    setOpenModal(true);
  };

  const handleDelete = (id) => {
    const filteredArray = activeShoppingList.filter((item) => item.uid !== id);
    setActiveShoppingList(filteredArray);
  };

  const handleSave = (updatedValue) => {
    const updatedList = activeShoppingList.map((item) =>
      item.uid === currentUid ? { ...item, [modalKey]: updatedValue } : item
    );
    setActiveShoppingList(updatedList);
    setOpenModal(false);
    console.log(updatedValue)
  };


  return (
    <View style={styles.container}>
      <Button
        icon="update"
        mode="contained"
        style={styles.primaryButton}
        onPress={() => console.log('Update Shopping List')}
      >
        Update Shopping List
      </Button>
      <FlatList
        data={activeShoppingList}
        renderItem={({ item }) => (
          <ShoppingListItem
            item={item}
            onSwipeComplete={() => handleDelete(item.uid)}
            onEdit={handleEditModal}
            onCheckboxToggle={handleCheckboxToggle}
          />
        )}
        keyExtractor={(item) => item.uid}
        contentContainerStyle={styles.listContainer}
      />
      {openModal && (
        <ShoppingListItemEditModal
          view={viewType}
          element={editElement}
          openModal={openModal}
          hideModal={() => setOpenModal(false)}
          options={editElement ? options[editElement] : []}
          value={modalValue}
          onSave={handleSave}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '80%',
  },
  primaryButton: {
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
  },
  listContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingTop: 20,
  },
  shoppingListitemCard: {
    width: '100%',
    marginBottom: 10,
    marginHorizontal: 15,
  },
  shoppingListCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export default ShoppingListDetail;
