import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetails'

class AlbumList extends Component {

    state = {albums: []};

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));
    }

    renderContent() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
    }

    render() {
        if(!this.state.albums) return <Text>Loading...</Text>;
        return (
            <ScrollView>
                {this.renderContent()}
            </ScrollView>
        );
    }
}

export default AlbumList;