import React, {Component} from 'react';
import {View, Text, ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {connect} from 'react-redux';
import {fetchAlbum} from '../actions/postActions';

class Album extends Component {


    componentWillMount() {
        const {navigation} = this.props;
        const AlbumIdx = navigation.getParam('AlbumId', 'Its Null');
        this.props.fetchAlbum(AlbumIdx);
    }

    onPress(urlPhoto) {
        const url = urlPhoto.post.url;
        this.props.navigation.navigate('AlbumDetails', {
            URL: url,
        });
    }

    render() {


        const postItems = this.props.Albumx.map(post => (

            <TouchableOpacity key={post.id} onPress={() => this.onPress({post})}>
                <View
                    key={post.id}
                    style={styles.post}
                >
                    <View style={styles.postContent}>
                        <Text style={styles.postContentText}>
                            {post.title}
                        </Text>
                        <Text style={styles.postBody}>
                            {post.body}
                        </Text>
                    </View>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image style={styles.thumbnailStyle} source={{uri: post.thumbnailUrl}}/>
                    </View>
                </View>
            </TouchableOpacity>

        ))

        return (

            <ScrollView style={styles.container}>
                {postItems}
            </ScrollView>

        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    post: {
        flexDirection: 'row',
        backgroundColor: '#ddd',
        alignItems: 'center',
        alignContent: 'center',
        margin: 10,
        borderRadius: 20,
    },
    thumbnailStyle: {
        height: 100,
        width: 100,
        backgroundColor: '#ddd',
        borderRadius: 20,

    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,

    },

    postContent: {
        flex: 1,
        paddingVertical: 25,
        paddingRight: 15,
    },
    postContentText: {
        fontSize: 18,
        textAlign: 'center'
    },
    postBody: {
        marginTop: 10,
        color: 'lightgray',

    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})

const mapStateToProps = state => ({
    Albumx: state.Albumx.album
})

export default connect(mapStateToProps, {fetchAlbum})(Album);

