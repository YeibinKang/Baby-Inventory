import React from 'react';
import { Alert, Button, View } from 'react-native';
import { router, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { supabase } from 'supabase';
import { DataTable, IconButton } from 'react-native-paper';


const InventoryTab = () => {
  // const navigation = useNavigation();


const [inventories,setInventories] = useState<any | null>([]);

const navigation = useNavigation();

    const [page, setPage] = useState(0);
    const [numberOfItemsPerPageList] = useState([10]);
    const [itemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);
    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, inventories.length);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);
    
useEffect(()=>{
   const fetchInventories = async ()=>{
     console.log('fetching...');
     let { data, error } = await supabase.from('Inventory').select('*');
     if(error){
       Alert.alert('Error fetching data');
     }
     setInventories(data);
   };
  fetchInventories();
  }, []);



  return (
    <View>
      <Button title="Go to Item Detail" onPress={() => router.push('/Inventory/ItemDetail')} />
      <DataTable>
            <DataTable.Header>
                <DataTable.Title style={{ flex: 3 }}>Item Name</DataTable.Title>
                <DataTable.Title style={{ flex: 2 }}>Category</DataTable.Title>
                <DataTable.Title style={{ flex: 1 }}>Qty</DataTable.Title>
                <DataTable.Title style={{ flex: 1.5 }}>Unit</DataTable.Title>
                <DataTable.Title style={{ flex: 0.5 }}></DataTable.Title>
            </DataTable.Header>

            {inventories.slice(from, to).map((inventory: { id: React.Key | null | undefined; inventoryName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; category: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; quantity: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; unit: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                <DataTable.Row key={inventory.id} >
                    <DataTable.Cell style={{ flex: 3 }}>{inventory.inventoryName}</DataTable.Cell>
                    <DataTable.Cell style={{ flex: 2 }}>{inventory.category}</DataTable.Cell>
                    <DataTable.Cell style={{ flex: 1 }}>{inventory.quantity}</DataTable.Cell>
                    <DataTable.Cell style={{ flex: 1.5 }}>{inventory.unit}</DataTable.Cell>
                    <IconButton
                        icon="chevron-right-circle"
                        size={20}
                        // onPress={() => navigation.navigate('Inventory', { screen: 'InventoryDetailScreen', params: { inventory: inventories[(inventory.id) - 1] } })}

                    />
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
    </View>
  );
};

export default InventoryTab;
