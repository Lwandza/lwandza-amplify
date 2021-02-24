import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import albumDetails from '../data/albumDetails';
import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';
import { API, graphqlOperation } from 'aws-amplify';
import { getAlbum } from '../src/graphql/queries';
import {useEffect, useState} from "react";

const AlbumScreen = () =>{

    const route = useRoute();
    const albumId = route.params.id;

    const [album, setAlbum] = useState(null)

    useEffect(() => {
      const fetchAlbumDetails = async () => {
        try {
          const data = await API.graphql(graphqlOperation(getAlbum, { id: albumId }))
          setAlbum(data.data.getAlbum)
        } catch (e) {
          console.log(e);
        }
      }
  
      fetchAlbumDetails();
    }, [])
  
    if (!album) { 
      return <Text>Loading...</Text>
    }
 
    return(
        <View>
         
            <FlatList 
            data={album.songs.items}
            renderItem={({item}) => <SongListItem song={item} />}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={() => <AlbumHeader album={album} />}
            />
        </View>
    )
}
export default AlbumScreen;