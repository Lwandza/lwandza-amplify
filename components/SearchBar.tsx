import React from 'react';
import{ Searchbar } from 'react-native-paper'
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class MyComponent extends Component{
    
  
    constructor(text:any){
        super(text);

        this.state ={
            text:text || '',
        };
    }
    handleChangeText(newText:any){
        const {onChange} = this.props;
        this.setState({
            text:newText,
        }, () =>{
            onChange && onChange(newText);
        });
    }
    render(){
        const {text} = this.state;
        return(
            <Searchbar
                placeholder="Search for music"
                onChangeText={newText => this.handleChangeText(newText)}
                value={text}
            />
        )
    }
}