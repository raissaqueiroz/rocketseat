import React from 'react';

import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Product = ({ product }) => (
    <View style={styles.container}>
        <Icon name="ios-checkmark-circle-outline" size={24} style={styles.checkIcon} />
        <View style={styles.imageContainer}>
            <Image source={{ uri: product.image }} style={styles.image} />
        </View>
        
        <View style={styles.infoContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>{product.price}</Text>
        </View>
        
    </View>
);

export default Product;