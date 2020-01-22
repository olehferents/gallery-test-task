import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import React from "react";
import { Provider } from 'react-redux';
import App from "./src/App";
import store from './src/store/index';

const Redux = () => (
    <Provider store={ store }>
        <App/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
