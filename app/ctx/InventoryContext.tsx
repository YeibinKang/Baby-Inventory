import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState } from 'react-native'
const InventoryContext = createContext();

const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState({})
  const [shoppingList, setShoppingList] = useState({})





  return (
    <InventoryContext.Provider value={{ inventory, shoppingList }}>
      {children}
    </InventoryContext.Provider>
  );
};

const useInventory = () => useContext(InventoryContext);

export { InventoryProvider, useInventory };
