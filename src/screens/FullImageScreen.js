import React from "react";
import {Button, Dimensions, Image, StyleSheet, Text, View} from "react-native";

class FullImageScreen extends React.Component {
    render() {
        const {width, height} = Dimensions.get('window');
        return (
            <View style={{flex: 1, alignItems: 'stretch'}}>
                <Image style={{flex: 1, width: width, height: height}}
                       source={{uri: this.props.navigation.getParam('img')}}
                />
            </View>
        );
    }
}

export default FullImageScreen;