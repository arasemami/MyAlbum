import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Albums from './components/Albums';
import Album from './components/Album';
import AlbumDetails from "./components/AlbumDetails";


const RouterComponent = () => {

    return (

        <Router sceneStyle={{paddingTop: 1}}>
            <Scene key="MyAlbum" initial>
                <Scene key="Albums" component={Albums} title="My Albums"/>
                <Scene key="Album" component={Album} title="Album"/>
                <Scene key="AlbumDetails" component={AlbumDetails} title="Album"/>
            </Scene>
        </Router>

    );
};

export default RouterComponent;
