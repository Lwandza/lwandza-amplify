import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20,
    },
    rightContainer:{
        justifyContent: 'space-around',
        marginLeft:10,
    },

    image:{
        width: 200,
        height: 200,
        margin:15,
        
    },

    name:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',

        
    },
    creatorContainer:{
        flexDirection:'row',
        margin:10,
    },
    creator:{
        color: 'white',
        margin:5,
        fontSize: 20,
    },
    likes:{
        color: 'lightgrey',
        margin:5,
        fontSize: 20,
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    button:{
        backgroundColor:'#FF1493',
        height: 60,
        width:175,
        borderRadius:15,
        justifyContent: 'center',
        alignItems:'center',
    }


})

export default styles;