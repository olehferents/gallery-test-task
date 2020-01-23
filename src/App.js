import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from "react-navigation-stack";

import FullImageScreen from "./screens/FullImageScreen";
import HomeScreen from "./screens/HomeScreen";

const AppNavigator = createStackNavigator({
        Home: {screen: HomeScreen},
        FullImage: {screen: FullImageScreen},
    },
    {
        initialRouteName: 'Home'
    }
);

const App = createAppContainer(AppNavigator);

export default App;
