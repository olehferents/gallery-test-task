import {fetchPhotos} from "../actions/photos";
import {connect} from "react-redux";
import {Dimensions, ScrollView, StyleSheet, View} from "react-native";
import Photo from "../components/Photo";
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {bindActionCreators} from "redux";

const PhotoListContainer = (props) => {
    let photos;

    useEffect(() => {
        props.fetchPhotos().then(response => {
            photos = response;
        });
    }, []);

    return (
        <ScrollView contentContainerStyle={{paddingBottom: 60}}>
            {props.photos.map((photo, id) => {
                return <Photo author={photo.user.name} img={photo.urls.regular} key={id}/>
            })}
        </ScrollView>
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

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoListContainer);