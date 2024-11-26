import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { supabase } from 'supabase';


const ItemDetail = () => {

    const route = useRoute();
    const navigation = useNavigation();

    const inventoryItem = route.params.inventory;
    const itemId = inventoryItem.id;

    const [memo, setMemo] = useState('');
    const [qty, setQty] = useState(0);

    useEffect(() => {
        // Trigger any actions on memo or qty change
        console.log("UI updated with new memo and quantity:", memo, qty);
    }, [memo, qty]);


    async function pressUpdate() {


        const memoToUpdate = memo === '' ? inventoryItem.memo : memo;
        const qtyToUpdate = qty === 0 ? inventoryItem.quantity : qty;



        try {
            console.log('just before updating db memo: ' + memo + 'qty: ' + qty);
            const { data, error } = await supabase
                .from('Inventory')
                .update({ memo: memoToUpdate, quantity: qtyToUpdate })
                .eq("id", itemId)
                .select();

            if (data) {
                setMemo(data[0].memo);
                setQty(data[0].quantity);

                navigation.navigate('index');
            }


        } catch (error) {
            console.log(`Error occured while getting data` + error);
        }



    }

    async function pressDelete() {



        try {
            const response = await supabase
                .from('Inventory')
                .delete()
                .eq("id", itemId);


        } catch (error) {
            console.log(`Error occured while deleting data` + error);
        }

        navigation.navigate('index');

    }



    return (
        <View>

            {/* todo: add button for go back to a list page */}

            <Button icon="arrow-left" onPress={() => { navigation.navigate('index'); }}>Go back</Button>

            <TextInput label="Brand Name" value={inventoryItem.brandName} />
            <TextInput label="Category" value={inventoryItem.category} />
            <TextInput label="Item Name" value={inventoryItem.inventoryName} />
            <TextInput id="memo" label="memo" placeholder={inventoryItem.memo} onChangeText={memo => setMemo(memo)} value={memo} />
            <TextInput label="Priority" value={inventoryItem.priority} />
            {/* todo: qty part */}
            <TextInput id="qty" label="Quantity" placeholder={inventoryItem.quantity.toString()} onChangeText={qty => setQty(parseInt(qty))} />
            <TextInput label="Unit" value={inventoryItem.unit} />
            <TextInput label="Stage" value={inventoryItem.stage} />

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Button onPress={pressDelete} mode='contained' style={{ margin: 20 }}>Delete</Button>
                <Button onPress={pressUpdate} mode='contained' buttonColor='#8ACB88' style={{ margin: 20 }}>Update</Button>

            </View>







        </View>
    );
};

export default ItemDetail;