import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState } from 'react-native';

const ShoppingListContext = createContext();

const ShoppingListProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState([]); 
  // const [activeShoppingList, setActiveShoppingList] = useState([]); 
  const [activeShoppingList, setActiveShoppingList] = useState([
    {
      uid: '0000-0000-0000-0000',
      itemCategory: 'Baby Wipes',
      brandName: 'Huggies',
      stage: 1,
      purchaseQuantity: 5,
      purchaseUnits: 'pack',
      pricePerUnit: 12.99,
      inventoryQuantity: 300,
      inventoryUnits: 'sheets',
    },
  ]);

  const options = {
    Category: [],
    Brand: [],
    Stage: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    Qty: Array.from({ length: 101 }, (_, i) => i + 1),
  };


  // Fetch shopping list from AsyncStorage or backend
  const loadShoppingList = async () => {
    try {
      const storedList = await AsyncStorage.getItem('shoppingList');
      if (storedList) {
        const parsedList = JSON.parse(storedList);
        setShoppingList(parsedList);
        setActiveShoppingList(parsedList); 
      }
    } catch (error) {
      console.error('Failed to load shopping list:', error);
    }
  };

  // Save shopping list to AsyncStorage
  const saveShoppingList = async (list) => {
    try {
      await AsyncStorage.setItem('shoppingList', JSON.stringify(list));
    } catch (error) {
      console.error('Failed to save shopping list:', error);
    }
  };

  // Update an item in the active shopping list
  const updateItem = (updatedItem) => {
    setActiveShoppingList((prevList) =>
      prevList.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  // Add a new item to the active shopping list
  const addItem = (newItem) => {
    setActiveShoppingList((prevList) => [...prevList, newItem]);
  };

  // Delete items from the active shopping list
  const deleteItems = (idsToDelete) => {
    setActiveShoppingList((prevList) => prevList.filter((item) => !idsToDelete.includes(item.id)));
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


  const confirmChanges = () => {
    setShoppingList(activeShoppingList); 
    saveShoppingList(activeShoppingList); 
  };


  const cancelChanges = () => {
    setActiveShoppingList(shoppingList);
  };

  return (
    <ShoppingListContext.Provider
      value={{
        shoppingList,
        activeShoppingList,
        setActiveShoppingList,
        addItem,
        updateItem,
        deleteItems,
        confirmChanges,
        cancelChanges,
        options
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};


const useShoppingList = () => useContext(ShoppingListContext);

export { ShoppingListProvider, useShoppingList };
