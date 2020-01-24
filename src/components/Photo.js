import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Photo = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.author}</Text>
            <TouchableOpacity onPress={props.showPhoto}>
                <Image style={{width: '100%', height: 250}}
                       source={{uri: props.img}}
                       />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 300,
        padding: 15,
        backgroundColor: '#E5F0FF',
    },
    title: {
        color: '#002D6D',
        fontSize: 18,
        textAlign: 'center'
    }
});

export default Photo;