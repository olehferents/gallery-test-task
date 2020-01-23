import {fetchPhotos} from "../actions/photos";
import {connect} from "react-redux";
import {ActivityIndicator, FlatList, View} from "react-native";
import Photo from "../components/Photo";
import React, {useEffect, useState} from "react";
import {bindActionCreators} from "redux";

const PhotoListContainer = (props) => {
    let [page, setPage] = useState(1);
    let [data, setData] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        loadPhotos();
    }, []);

    const loadMore = () => {
        setPage(page + 1);
        loadPhotos();
    };

    const loadPhotos = () => {
        props.fetchPhotos(page).then((response) => {
            if (page === 1) {
                setData(response);
                setIsLoading(false);
            } else {
                setData([...data, ...response]);
                setIsLoading(false);
            }
        })
    };

    const renderFooter = () => {
        return (
            <View>
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    if (isLoading) {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator />
            </View>
        )
    }

    return (
        <FlatList
            contentContainerStyle={{paddingBottom: 70}}
            data={data}
            renderItem={({item}) => (
                <Photo author={item.user.name} img={item.urls.regular}/>
            )}
            keyExtractor={(item, index) => String(index)}
            ListFooterComponent={renderFooter}
            onEndReached={loadMore}
            onEndReachedThreshold={100}
        />
    )
};

const mapStateToProps = (state) => {
    return {
        photos: state.photo.photos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPhotos: bindActionCreators(fetchPhotos, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoListContainer);