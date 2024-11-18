import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Modal, Portal, Button, IconButton } from 'react-native-paper';
import CustomTextInput from '@components/modals/inputs/CustomTextInput';
import NumberInput from '@components/modals/inputs/NumberInput';
import OptionsPicker from '@components/modals/inputs/OptionsPicker';
import NumberPicker from '@components/modals/inputs/NumberPicker';



const getModalView = (view, editableValue, setEditableValue, options, element) => {
    switch (view) {
        case 'text':
            return (
                <CustomTextInput
                    label={element}
                    value={editableValue}
                    onChangeText={setEditableValue}
                />
            );
        case 'options':
            return (
                <OptionsPicker
                    label={element}
                    value={editableValue}
                    onValueChange={setEditableValue}
                    options={options}
                />
            );
        case 'number-input':
            return (
                <NumberInput
                    label={element}
                    value={editableValue}
                    onChangeText={setEditableValue}
                />
            );
        case 'number-picker':
            return (
                <NumberPicker
                    label={element}
                    value={editableValue}
                    onValueChange={setEditableValue}
                    options={options}
                />
            );
        default:
            return null;
    }
};

const ShoppingListItemEditModal = ({ view, openModal, hideModal, options, element, value, onSave}) => {
    const [editableValue, setEditableValue] = useState(value || null);

    useEffect(() => {
        setEditableValue(value);  
        console.log('Updated editableValue:', value);
    }, [element, openModal]);

    const handleSave = () => {
        if (editableValue === '') {
            console.log('Error: Value cannot be empty!');
            return;
        }
        onSave(editableValue);
        hideModal();
    };

    return (
        <Portal>
            <Modal visible={openModal} onDismiss={hideModal} contentContainerStyle={styles.modalContent}>
                <IconButton icon='close-thick' onPress={hideModal} style={styles.cancelButton} />
                {getModalView(view, editableValue, setEditableValue, options, element)}
                <Button onPress={handleSave} style={styles.saveButton}>Update</Button>
            </Modal>
        </Portal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 8,
    },
    saveButton: {
        marginTop: 10,
        backgroundColor: '#ffe69d',
    },
    cancelButton: {
        alignSelf: 'flex-end',
        marginTop: 10,
    },
});

export default ShoppingListItemEditModal;
