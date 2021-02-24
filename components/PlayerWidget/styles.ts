import {StyleSheet} from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 49,
        width:'100%',
        backgroundColor:'#D9D9D9',

        borderColor: 'black',
        borderWidth:2,
    
       
    },
    rightContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
    },
    nameContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    iconsContainer:{
        flexDirection:'row',
        alignItems:'center', 
        width: 100,
        justifyContent: 'space-around',
    },

    image:{
        width:75,
        height: 75,
        marginRight:10,
    },

    title:{
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,

        
    },
    artist:{
        color: 'black',
        fontSize: 18,
        
    },
    progress:{
        height: 5,
        backgroundColor:'#FF1493'
    },
    row:{
        flexDirection: 'row',
    },


})

export default styles;