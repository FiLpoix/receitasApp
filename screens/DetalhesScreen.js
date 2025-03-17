import React, { useLayoutEffect } from 'react';
import { WebView } from 'react-native-webview';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function DetalhesScreen({ route, navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const { nome, ingredientes, preparo, imagem } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}> {nome}</Text>
            <Text style={styles.subtitle}> Ingredientes:</Text>
            <Text style={styles.text}> {ingredientes}</Text>
            <Text style={styles.subtitle}> Modo de Preparo:</Text>
            <Text style={styles.text}>{preparo}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()} >
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            <WebView
                style={styles.video} 
                source={{uri:'https://www.youtube.com/embed/1LxkSytm7yE?si=3_RRMpNxf3O4SaPI'}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        padding: 20,
        backgroundColor: '#333333',
        paddingTop: ''
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#ec895f',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        color: '#ec895f'
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        color: '#fff'
    },
    button: {
        backgroundColor: '#ec895f',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    video:{
        width:'5rem',
        marginTop:20
    },
});