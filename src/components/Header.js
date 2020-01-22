import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Gallery
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: '#324291',
        justifyContent: 'center',
        padding: 15
    },
    title: {
        color: '#fff',
        fontSize: 24
    }
});

export default Header;