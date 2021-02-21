'use strict';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        marginBottom:100
    },
    title: {
        marginBottom:12,
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 40,
    },

    details: {
        marginBottom:12,
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 25,
        padding:15,
        backgroundColor:'#68a0cf',
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#fff'
    },
    label: {
        marginBottom:2,
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 30,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyle:{
        color: '#d8dee3',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20
    },
    cardStyle:{
        marginRight:40,
        marginLeft:40,
        textAlign:'center',
        fontSize:20,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        color:'#100c0c',
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#100c0c'
    },
    listStyle:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        color:'#100c0c',
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#100c0c'
    },
    buttonStyle:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    loginScreenButton:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#1E6738',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    loginText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    }
})
