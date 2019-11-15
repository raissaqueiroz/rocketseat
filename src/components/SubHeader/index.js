import React from 'react';

import { View, Image, Text } from 'react-native';

import Button from '../Button';

import styles from './styles';

const SubHeader = () => (
    <View style={styles.container}>
        <Image
            style={styles.avatar}
            source={require('../../../assets/images/raissa.jpeg')}
        />

        <View style={styles.profileInfo}>
            <Text style={styles.name}>Raissa Queiroz</Text>
            <Text style={styles.bio}>"Somos infinitos quebrados tentando se regenerar"</Text>

            <View style={styles.buttonContainer}>
                <Button style={styles.firstButton}>Mensagens</Button>
                <Button type="outline">Seguir</Button>
            </View>
        </View>
    </View>
);

export default SubHeader;