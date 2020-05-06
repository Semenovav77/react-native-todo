import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Alert} from 'react-native';

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('');
    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('')
        } else {
            Alert.alert('Не заполнено название дела')
        }
    };
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder='Введите название дела'
                autoCorrect={false}
                autoCapitalize='sentences'/>
            <Button title='Добавить' onPress={pressHandler}/>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        padding: 5,
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        marginBottom: 15
    }
});