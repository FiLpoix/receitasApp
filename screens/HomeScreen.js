import React, { useLayoutEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const categories = ['Italiano', 'Mexicano', 'Chinês', 'Vegetariano', 'Doces', 'Outros'];

    const popularDishes = [
        { name: 'Pizza', image: require('../assets/pizza.jpg') },
        { name: 'Taco', image: require('../assets/tacos.jpg') },
        { name: 'Sushi', image: require('../assets/sushi.jpg') },
        { name: 'Salada', image: require('../assets/salada.jpg') },
        { name: 'Bolo de Chocolate', image: require('../assets/boloChocolate.jpg')}
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.userSection}>
            <Image style={styles.userPic} source={require('../assets/icon.jpg')} />
            <Text style={styles.welcomeText}>Olá, Usuário</Text>
            </View>
            <View style={styles.categoriesSection}>
                <Text style={styles.sectionTitle}>Categorias</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {categories.map((category, index) => (
                        <TouchableOpacity key={index} style={styles.categoryButton}>
                            <Text style={styles.categoryText}>{category}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.popularDishesSection}>
                <Text style={styles.sectionTitle}>Pratos Populares</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {popularDishes.map((dish, index) => (
                        <View key={index} style={styles.dishCard}>
                            <Image source={dish.image} style={styles.dishImage} />
                            <Text style={styles.dishName}>{dish.name}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Receitas')}>
                <Text style={styles.buttonText}>Ver Receitas</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#333333',
    },
    userSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        gap:15,
        paddingTop:10,
    },
    userPic:{
        width:50,
        height:50,
        borderRadius:20
    },
    welcomeText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff'
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 15,
        marginBottom: 50
    },
    categoriesSection: {
        marginBottom: 24,
        marginTop:15
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color:'#ec895f'
    },
    categoryButton: {
        backgroundColor: '#ec895f',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginRight: 12,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: '500',
        color:'#fff'
    },
    popularDishesSection: {
        marginBottom: 24,
    },
    dishCard: {
        alignItems: 'center',
        marginRight: 16,
    },
    dishImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    dishName: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: '500',
        color:'#fff'
    },
    button: {
        backgroundColor: '#ec895f',
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop:15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
