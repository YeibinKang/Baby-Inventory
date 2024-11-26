import { useNavigation } from "expo-router";
import { useState } from "react";
import { Text, ScrollView, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import DateTimePicker from '@react-native-community/datetimepicker';
import { supabase } from "supabase";





const AddItem = () => {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [qty, setQty] = useState(0);
    const [unit, setUnit] = useState('');
    const [price, setPrice] = useState(0);
    const [brand, setBrand] = useState('');
    const [stage, setStage] = useState('');
    const [priority, setPriority] = useState('');
    const [memo, setMemo] = useState('');
    const [status, setStatus] = useState('');
    const [createdOn, setCreatedOn] = useState(new Date());
    const [updatedOn, setUpdatedOn] = useState(new Date());
    const [userId, setUserId] = useState('');

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("date");


    const onChange = (e, selectedDate) => {

        setCreatedOn(selectedDate);
        console.log(selectedDate);

    }


    async function pressSave() {
        console.log('pressed!');

        const nameToCreate = name === '' ? '' : name;
        const memoToCreate = memo === '' ? '' : memo;
        const qtyToCreate = qty === 0 ? 0 : qty;
        const dateToCreate = createdOn === '' ? new Date() : createdOn;
        const categoryToCreate = category === '' ? '' : category;
        const unitToCreate = unit === '' ? '' : unit;
        const priceToCreate = price === 0 ? 0 : price;
        const brandToCreate = brand === '' ? '' : brand;
        const stageToCreate = stage === '' ? '' : stage;
        const priorityToCreate = priority === '' ? '' : priority;


        //todo: status,userId: ??


        try {

            const { error } = await supabase
                .from('Inventory')
                .insert({
                    inventoryName: nameToCreate, memo: memoToCreate, quantity: qtyToCreate, createdOn: dateToCreate, category: categoryToCreate, unit: unitToCreate, price: priceToCreate,
                    brandName: brandToCreate, stage: stageToCreate, priority: priorityToCreate
                })

            console.log('Insert success!');


        } catch (error) {
            console.log(`Error occured while getting data` + error);
        }

        navigation.navigate('index');

    }


    return (

        <>
            <Button icon="arrow-left" onPress={() => { navigation.navigate('index'); }}>Go back</Button>

            <ScrollView>
                <TextInput label="Inventory Item Name" value={name} onChangeText={name => setName(name)}></TextInput>
                <TextInput label="Category" value={category} onChangeText={category => setCategory(category)} />
                <TextInput label="Quantity" value={qty} onChangeText={qty => setQty(qty)} />
                <TextInput label="Price" value={price} onChangeText={price => setPrice(price)} />
                <TextInput label="Unit" value={unit} onChangeText={unit => setUnit(unit)} />
                <TextInput label="Brand" value={brand} onChangeText={brand => setBrand(brand)} />
                <TextInput label="Stage" value={stage} onChangeText={stage => setStage(stage)} />
                <TextInput label="Priority" value={priority} onChangeText={priority => setPriority(priority)} />
                <TextInput label="Memo" value={memo} onChangeText={memo => setMemo(memo)} />
                <View style={{ marginTop: 10, marginLeft: 15, flexDirection: 'row', display: "flex", textAlign: 'center', borderColor: 'black' }}>
                    <Text>Created Date:</Text>
                    <DateTimePicker style={{ marginLeft: 40 }} value={date} mode={mode} is24Hour={true} onChange={onChange}></DateTimePicker>
                </View>



                <Button onPress={pressSave} mode='contained' buttonColor='#8ACB88' style={{ marginTop: 20 }}>Save</Button>



            </ScrollView >
            <Button icon="arrow-left" onPress={() => { navigation.navigate('index'); }}>Go back</Button>


        </>
    )


}

export default AddItem;