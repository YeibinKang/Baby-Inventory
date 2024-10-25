import React, { useState } from "react";

import { DataTable, IconButton, MD3Colors } from 'react-native-paper';



export default function InventoryList() {

    const [page, setPage] = useState(0);
    const [numberOfItemsPerPageList] = useState([10]);
    const [itemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);

    const [inventories, setInventories] = useState([
        { id: 1, userId: 'Adam', inventoryName: 'Waterproof diaper', category: 'diaper', quantity: 1, unit: 'box', price: 30, brandName: 'Huggies', stage: 'Newborn', priority: 'high', memo: '', itemStatus: '', createdOn: '2024-10-01', updatedOn: '2024-10-25' },
        { id: 2, userId: 'Adam', inventoryName: 'Yellow formula', category: 'formula', quantity: 4, unit: 'can', price: 50, brandName: 'Kirkland', stage: '1', priority: 'high', memo: '', itemStatus: '', createdOn: '2024-10-05', updatedOn: '2024-10-05' },
        { id: 3, userId: 'Adam', inventoryName: 'Pacifier', category: 'pacifier', quantity: 2, unit: 'each', price: 8.50, brandName: 'Avent', stage: '0-6 month', priority: 'medium', memo: '', itemStatus: '', createdOn: '2024-10-06', updatedOn: '2024-10-06' },
        { id: 4, userId: 'Adam', inventoryName: 'Body lotion', category: 'body lotion', quantity: 1, unit: 'bottle', price: 12.99, brandName: 'Aveeno', stage: 'N/A', priority: 'low', memo: '', itemStatus: '', createdOn: '2024-10-15', updatedOn: '2024-10-15' },
    ]);

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, inventories.length);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);


    //todo: add a function for display inventory item details (after clicking a button in a row)

    return (

        <DataTable>
            <DataTable.Header>
                <DataTable.Title style={{ flex: 3 }}>Item Name</DataTable.Title>
                <DataTable.Title style={{ flex: 2 }}>Category</DataTable.Title>
                <DataTable.Title style={{ flex: 1 }}>Qty</DataTable.Title>
                <DataTable.Title style={{ flex: 1.5 }}>Unit</DataTable.Title>
                <DataTable.Title style={{ flex: 0.5 }}></DataTable.Title>
            </DataTable.Header>

            {inventories.slice(from, to).map((inventory) => (
                <DataTable.Row key={inventory.key} >
                    <DataTable.Cell style={{ flex: 3 }}>{inventory.inventoryName}</DataTable.Cell>
                    <DataTable.Cell style={{ flex: 2 }}>{inventory.category}</DataTable.Cell>
                    <DataTable.Cell style={{ flex: 1 }}>{inventory.quantity}</DataTable.Cell>
                    <DataTable.Cell style={{ flex: 1.5 }}>{inventory.unit}</DataTable.Cell>
                    <IconButton
                        icon="chevron-right-circle"
                        size={20}
                        onPress={() => console.log('Pressed')}
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

    );
}