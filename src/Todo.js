import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const Todo = ({todo, id, onRemove}) => {

    return (
        <TouchableOpacity activeOpacity={0.4}
                          onPress={() => console.log('Pressed', id)}
                          onLongPress={() => {console.log('longpress', id); onRemove(id)}}>
            <View style={styles.todo}>
                <Text>{todo}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        marginBottom: 10,
    }
});