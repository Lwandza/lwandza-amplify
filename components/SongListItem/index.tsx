import React from 'react';
import {View, Image, Text, FlatList, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import { Song } from '../../types';
import styles from './styles';
import { AppContext } from '../../AppContext';
import {useEffect, useState, useContext} from "react";

export type SongListItemProps = {
    song: Song
}
const SongListItem = (props: SongListItemProps) => {
    const {song} = props; 
    const { setSongId } = useContext(AppContext);

    const onPlay = () => {
      setSongId(song.id);
    }
  


    return(
        <TouchableOpacity onPress={onPlay}>
            <View style={styles.container}>
                <Image source={{uri: song.imageUri}} style={styles.image}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>          
            </View>
         </TouchableOpacity>
    )
}

export default SongListItem;