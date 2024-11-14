import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { supabase } from 'supabase';
import { DataTable, IconButton, Button } from 'react-native-paper';

const InventoryTab = () => {
  const [inventories, setInventories] = useState([]);
  const navigation = useNavigation();

  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([10]);
  const [itemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, inventories.length);

  const [sortAscending, setSortAscending] = useState<boolean>(true);


  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  // Fetch data function
  const fetchInventories = async () => {
    try {
      console.log('Fetching inventory data...');
      const { data, error } = await supabase.from('Inventory').select('*');
      if (error) throw error;
      setInventories(data);
    } catch (error) {
      Alert.alert('Error fetching data', error.message);
    }
  };

  // Use focus effect to refresh data when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      fetchInventories();
    }, [])
  );


  async function pressAddItem() {
    navigation.navigate('AddItem');
  }

  const sortedInventories = inventories
    .slice()
    .sort((inventory1, inventory2) =>
      sortAscending ? inventory1.inventoryName.localeCompare(inventory2.inventoryName)
        : inventory2.inventoryName.localeCompare(inventory1.inventoryName)
    );


  //todo: add Status sorting function

  return (
    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title sortDirection='descending' style={{ flex: 2, maxWidth: 50, justifyContent: 'center' }}>Status</DataTable.Title>
          <DataTable.Title sortDirection={sortAscending ? 'ascending' : 'descending'}
            onPress={() => setSortAscending(!sortAscending)} style={{ flex: 2, maxWidth: 120, justifyContent: 'center' }}>Item Name</DataTable.Title>
          <DataTable.Title style={{ flex: 1, maxWidth: 30, justifyContent: 'center' }}>Qty</DataTable.Title>
          <DataTable.Title style={{ flex: 2, maxWidth: 50, justifyContent: 'center' }}>Unit</DataTable.Title>
          <DataTable.Title style={{ flex: 2, maxWidth: 80, justifyContent: 'center' }}>Stage</DataTable.Title>
          <DataTable.Title style={{ flex: 1, maxWidth: 30, justifyContent: 'center' }}></DataTable.Title>

        </DataTable.Header>

        {sortedInventories.slice(from, to).map((inventory) => (
          <DataTable.Row key={inventory.id}>
            <DataTable.Cell style={{ flex: 2, maxWidth: 50, justifyContent: 'center' }}>{inventory.status}</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2, maxWidth: 120, justifyContent: 'center' }}>{inventory.inventoryName}</DataTable.Cell>
            <DataTable.Cell style={{ flex: 1, maxWidth: 30, justifyContent: 'center' }}>{inventory.quantity}</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2, maxWidth: 50, justifyContent: 'center' }}>{inventory.unit}</DataTable.Cell>
            <DataTable.Cell style={{ flex: 2, maxWidth: 80, justifyContent: 'center' }}>{inventory.stage}</DataTable.Cell>

            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              maxWidth: 30
            }}>
              <IconButton
                icon="chevron-right-circle"
                size={20}
                onPress={() => {
                  navigation.navigate('ItemDetail', { screen: 'ItemDetail', inventory });
                }}
              />
            </View>


          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(inventories.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${inventories.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={'Rows per page'}
        />
      </DataTable>

      <Button onPress={pressAddItem} mode='contained' buttonColor='#8ACB88' style={{}}>Add item</Button>
    </View>
  );
};

export default InventoryTab;