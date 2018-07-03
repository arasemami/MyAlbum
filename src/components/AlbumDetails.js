import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';


class AlbumDetails extends Component {

    state = {
        loading: true,
        error: false,

    }


    render() {
        const {navigation} = this.props;
        const UrlAddress = navigation.getParam('URL', 'Its Null will be default image');

        return (

            <View style={styles.thumbnailContainerStyle}>
                <Image style={styles.thumbnailStyle} source={{uri: UrlAddress}}/>
                {/*{console.log({UrlAddress})}*/}
            </View>

        );
    }

}

const styles = StyleSheet.create({

    thumbnailStyle: {
        height: '100%',
        width: 500,
        backgroundColor: '#ddd',

    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,

    }

})

export default AlbumDetails;





