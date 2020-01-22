import React from 'react';
import { View } from 'react-native';
import Header from "./components/Header";
import PhotoListContainer from "./containers/PhotoListContainer";

const App = () => {
    return (
        <View>
            <Header/>
            <PhotoListContainer/>
        </View>
    );
};

export default App;
