import React, { useState } from "react";
import {
    TouchableOpacity,
    Button,
    View,
    Text,
    SafeAreaView, TextInput
} from 'react-native';
import InventoryList from "../components/InventoryList";


const UserInventoryScreen = () => {

    const [text, setText] = React.useState('Useless Text');
    const [number, setNumber] = React.useState('');
    const [inventories, setInventories] = useState([
        { id: 1, userId: 'Adam', inventoryName: 'Waterproof diaper', category: 'diaper', quantity: 1, unit: 'box', price: 30, brandName: 'Huggies', stage: 'Newborn', priority: 'high', memo: '', itemStatus: '', createdOn: '2024-10-01', updatedOn: '2024-10-25' },
        { id: 2, userId: 'Adam', inventoryName: 'Yellow formula', category: 'formula', quantity: 4, unit: 'can', price: 50, brandName: 'Kirkland', stage: '1', priority: 'high', memo: '', itemStatus: '', createdOn: '2024-10-05', updatedOn: '2024-10-05' },
        { id: 3, userId: 'Adam', inventoryName: 'Pacifier', category: 'pacifier', quantity: 2, unit: 'each', price: 8.50, brandName: 'Avent', stage: '0-6 month', priority: 'medium', memo: '', itemStatus: '', createdOn: '2024-10-06', updatedOn: '2024-10-06' },
        { id: 4, userId: 'Adam', inventoryName: 'Body lotion', category: 'body lotion', quantity: 1, unit: 'bottle', price: 12.99, brandName: 'Aveeno', stage: 'N/A', priority: 'low', memo: '', itemStatus: '', createdOn: '2024-10-15', updatedOn: '2024-10-15' },
    ]);



    return (
        <SafeAreaView>
            <InventoryList></InventoryList>
        </SafeAreaView>

    )
}

export default UserInventoryScreen