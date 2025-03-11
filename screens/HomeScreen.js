import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>📖 Mini App de Receitas</Text>
            <Button title="Ver Receitas" onPress={() => navigation.navigate('Receitas')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 28, 
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#4a90e2',
    },
});
