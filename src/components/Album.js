
import React, {Component} from 'react';

import {View, Text, ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity , Image} from 'react-native';
import AlbumDetails from "./AlbumDetails";


class Album extends Component {

    state = {
        loading: true,
        error: false,
        posts: [],
    }



    componentWillMount = async () => {
        const {navigation} = this.props;
        const AlbumIdx = navigation.getParam('AlbumId', 'Its Null');

        try {
            const response = await
                fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + AlbumIdx )

            const posts = await
                response.json()

            this.setState({loading: false, posts})

        }
        catch (e) {
            this.setState({loading: false, error: true})

        }
    }


    onPress(url) {
        this.props.navigation.navigate('AlbumDetails', {
            URL: url.url,

        });
        // console.log("title :" + {title})

    }


    renderPost = ({id, title, body , url , thumbnailUrl} ) => {

        // console.log({id})

        return (
            <TouchableOpacity    key={id} onPress={()=>this.onPress({url})} >
                <View
                    key={id}
                    style={styles.post}
                >
                    <View style={styles.postContent}>
                        <Text style={styles.postContentText}>
                            {title}
                        </Text>
                        <Text style={styles.postBody}>
                            {body}
                        </Text>
                    </View>

                    <View style={styles.thumbnailContainerStyle} >
                        <Image style={styles.thumbnailStyle} source={{uri:thumbnailUrl}} />
                    </View>

                </View>
            </TouchableOpacity>


        )

    }



    render() {

        // const {navigation} = this.props;
        // const AlbumId = navigation.getParam('AlbumId', 'Its Null');

        const {posts, loading, error} = this.state;

        if (loading) {
            return (
                <View style={styles.center}>
                    <ActivityIndicator animating={true}/>
                </View>
            )
        }

        if (error) {
            return (
                <View style={styles.center}>
                    <Text>
                        Ops,Failed to load posts!
                    </Text>
                </View>
            )
        }


        return (

            <ScrollView style={styles.container}>
                {/*<Text>otherParam: {JSON.stringify(AlbumId)}</Text>*/}
                {posts.map(this.renderPost)}
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
    thumbnailStyle:{
        height:100,
        width:100,
        backgroundColor:'#ddd',
        borderRadius:20,

    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
        marginLeft:10,

    },
    postNumber: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    postNumberText: {
        fontSize: 100,
        color: '#fff'

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
    text: {
        padding: 15,
        backgroundColor: 'skyblue',
    },
    imageStyle:{
        width:100,

        height:100,
    }
})

export default Album;
