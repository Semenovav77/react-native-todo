import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import {Navbar} from './src/Navbar';
import {AddTodo} from './src/AddTodo';
import {Todo} from './src/Todo';

export default function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (title) => {
        setTodos((prev) => {
            return [
                ...prev,
                title
            ]
        })
    };

    const removeTodo = (id) => {
        setTodos((prev) => {
            return prev.filter((item, itemId) => itemId !== id)
        })
    };

    return (
        <View>
            <Navbar title='Todo App'/>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo}/>
                <FlatList
                    keyExtractor={(item,id) => id.toString()}
                    data={todos}
                    renderItem={({item, index}) => {
                        return (
                            <Todo todo={item} id={index} onRemove={removeTodo}/>
                        )
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }
});
