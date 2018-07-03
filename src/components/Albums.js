import React, {Component} from 'react';
import {View, Text, ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';


class Albums extends Component {

    state = {
        loading: true,
        error: false,
        posts: [],

    }


    componentWillMount = async () => {
        try {
            const response = await
                fetch('https://jsonplaceholder.typicode.com/albums')

            const posts = await
                response.json()

            this.setState({loading: false, posts})
        }
        catch (e) {
            this.setState({loading: false, error: true})

        }
    }

    renderPost = ({id, title, body}, i) => {

        return (
            <TouchableOpacity>
                <View
                    key={id}
                    style={styles.post}
                >

                    <View style={styles.postNumber}>
                        <Text style={styles.postNumberText}>
                            {i + 1}
                        </Text>
                    </View>
                    <View style={styles.postContent}>
                        <Text style={styles.postContentText}>
                            {title}
                        </Text>
                        <Text style={styles.postBody}>
                            {body}
                        </Text>
                    </View>
                </View>

            </TouchableOpacity>



        )
    }


    render() {

        const {posts, loading, error} = this.state

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
})


export default Albums;
