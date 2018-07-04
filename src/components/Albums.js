import React, {Component} from 'react';
import {View, Text, ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';


class Albums extends Component {


    componentWillMount() {
        this.props.fetchPosts();
    }

    onPress(postNumber) {
        //console.log(postNumber.post.id);
        this.props.navigation.navigate('Album', {
            AlbumId: postNumber.post.id,
        });
    }

    render() {

        const postItems = this.props.posts.map(post => (
            <TouchableOpacity key={post.id} onPress={() => this.onPress({post})}>
                <View key={post.id} style={styles.post}>
                    <View style={styles.postNumber}>
                        <Text style={styles.postNumberText}>
                            {post.id}
                        </Text>
                    </View>

                    <View style={styles.postContent}>
                        <Text style={styles.postContentText}>
                            {post.title}
                        </Text>
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
        backgroundColor: '#2471A3'
    },
    post: {
        flexDirection: 'column',
        backgroundColor: '#5DADE2',
        alignItems: 'center',
        alignContent: 'center',
        margin: 10,
        borderRadius: 20,
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
        backgroundColor: '#85C1E9',
        width: '100%',
        borderRadius: 10
    },
    postContentText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#1F618D'
    },


})

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, {fetchPosts})(Albums);
