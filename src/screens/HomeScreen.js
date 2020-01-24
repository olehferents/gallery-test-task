import React from "react";
import PhotoListContainer from "../containers/PhotoListContainer";

class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <PhotoListContainer navigate={navigate} />
        );
    }
}

export default HomeScreen;
