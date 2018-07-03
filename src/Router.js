import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import {BackAndroid } from 'react-native';
import Albums from './components/Albums';
import Test from './components/Test';
import Album from './components/Album';
import AlbumDetails from "./components/AlbumDetails";




const RouterComponent = () => {


    return (

        <Router sceneStyle={{paddingTop: 1}}>
            {/*<Scene key="test" >*/}
                {/*<Scene key="tes" component={Test} title="Test" />*/}
            {/*</Scene>*/}

            <Scene key="MyAlbum" initial >
                {/*<Scene key="Test" component={Test} title="My Albums"  />*/}
                <Scene key="Albums" component={Albums} title="My Albums"  />
                <Scene key="Album" component={Album} title="Album"  />
                <Scene key="AlbumDetails" component={AlbumDetails} title="Album"  />
            </Scene>

        </Router>


    );
};

export default RouterComponent;
