
import { useState, useEffect } from 'react';
import {
    Text,
    SafeAreaView,
} from 'react-native';

import { Button, TextInput } from 'react-native-paper';


const InventoryDetailScreen = ({ route, navigation }) => {

    const { inventory } = route.params;

    const [enteredText, setEnteredText] = useState();
    const [firstText, setFirstText] = useState();
    const [secondText, setSecondText] = useState();

    const [enteredInfo, setEnteredInfo] = useState();
    const [name, setName] = useState();
    const [brandName, setBrandName] = useState();


    function textChange(enteredText) {
        console.log(enteredText); // will gives you {firstText : "whatever", secondText: "firstText"}
    }

    useEffect(() => {
        setEnteredText({
            firstText,
            secondText,
        });
    }, [firstText, secondText]);

    useEffect(() => {
        setEnteredInfo({
            name,
            brandName,
        });
    }, [name, brandName]);

    // const name = inventory.inventoryName;
    // const brandName = inventory.brandName;
    // const category = inventory.category;
    // const qty = inventory.quantity;
    // const unit = inventory.unit;

    // const price = inventory.price;
    // const stage = inventory.stage;
    // const priority = inventory.priority;
    // const memo = inventory.memo;
    // const itemStatus = inventory.itemStatus;
    // const createdOn = inventory.createdOn;
    // const updatedOn = inventory.updatedOn;

    const initialValues = {
        name: inventory.inventoryName,
        brandName: inventory.brandName,
        category: inventory.category,
        qty: inventory.quantity,
        unit: inventory.unit
    }

    const [inventoryItem, setInventoryItem] = useState(initialValues);


    function handleSaveButton(enteredInfo) {
        //1. get values from textInput
        //- how to know has the value changed or not?

        //2. save it to db?
        //- update inventory item with new valuess
        //setInventoryItem({ ...inventoryItem, [e.target.name]: e.target.value });
        //console.log(inventoryItem);

        console.log(enteredInfo);

    }

    return (
        <SafeAreaView>

            <TextInput
                value={firstText}
                onChangeText={(text) => setFirstText(text)}
                placeholder="1st text"
            />

            <TextInput
                value={secondText}
                onChangeText={(text) => setSecondText(text)}
                placeholder="2nd text"
            />

            <Button
                onPress={() => textChange(enteredText)}
                title="Submit"
            />




            <Text>Item Name: </Text>
            <TextInput
                mode='outlined'
                placeholder={initialValues.name}
                onChangeText={(text) => setName(text)}
            />

            <Text>Brand Name: </Text>
            <TextInput
                mode='outlined'
                // value={inventoryItem.brandName}
                placeholder={initialValues.brandName}
                onChangeText={(text) => setBrandName(text)}
            />

            {/* <Text>Quantity: </Text>
            <TextInput
                mode='outlined'
                placeholder={initialValues.qty}
            // onChangeText={text => setInventoryItem(text)}
            ></TextInput> */}

            {/* <Text>Category: </Text>
            <TextInput
                mode='outlined'
                value={category}
                placeholder={category}
            // onChangeText={setCategory}
            /> */}

            {/* <TextInput
                mode='outlined'
                label="Category: "
                placeholder={category}
                value={inputBrand}
                onChangeText={setInputBrand}
            /> */}
            {/*  <TextInput
                mode='outlined'
                label="Quantity"
                placeholder={qty}
                value={text}
                onChangeText={text => setText(text)}
            /> */}
            {/* <TextInput
                mode='outlined'
                label="Brand name: "
                placeholder={unit}
                value={text}
                onChangeText={text => setText(text)}
            />
            <TextInput
                mode='outlined'
                label="Brand name: "
                placeholder={price}
                value={text}
                onChangeText={text => setText(text)}
            /> */}
            {/*<TextInput
                label="Brand name: "
                placeholder={stage}
                value={text}
                onChangeText={text => setText(text)}
            />
            <TextInput
                label="Brand name: "
                placeholder={priority}
                value={text}
                onChangeText={text => setText(text)}
            />
            <TextInput
                label="Brand name: "
                placeholder={memo}
                value={text}
                onChangeText={text => setText(text)}
            />
            <TextInput
                label="Brand name: "
                placeholder={itemStatus}
                value={text}
                onChangeText={text => setText(text)}
            />
            <TextInput
                label="Brand name: "
                placeholder={createdOn}
                value={text}
                onChangeText={text => setText(text)}
            />
            <TextInput
                label="Brand name: "
                placeholder={updatedOn}
                value={text}
                onChangeText={text => setText(text)}
            /> */}

            {/* TODO: add  text inputs and button for saving*/}
            <Button icon="content-save" mode="contained" onPress={handleSaveButton(enteredInfo)}>
                Save
            </Button>
        </SafeAreaView>

    )
}

export default InventoryDetailScreen