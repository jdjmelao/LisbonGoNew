import React, {Component} from 'react';
import { Dimensions, KeyboardAvoidingView, useState, StyleSheet, Text, TextInput, TouchableOpacity, View,Button, Image, TouchableWithoutFeedback , Keyboard, ImageBackground, Linking} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as LocalAuthentication from 'expo-local-authentication';


export default class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={id:'', first_name:'', last_name:'', email:'', password:'', phone:'', birthday:'', photo: "", qr: ""}
    }

    
    

    
    

    render(){
        return(
            <ImageBackground style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height + 50, position: 'absolute',}}
                    source={require('./1.png')}>
                        
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Image style= {styles.image} source={require('./lisbongo.png')}/>
                        <Text style={styles.bigText}>Há comboios que só passam uma vez...</Text>
                        <Text style={styles.smallText}>Não percas o teu!</Text>
                    </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} >
                            <View style={styles.login}>
                                <Text style={styles.headerText}>Login</Text>
                            </View>
                        </TouchableOpacity>
                            <Text style={styles.register} onPress={() => {this.props.navigation.navigate('RegistrationScreen')}}>
                                Ainda não tens conta? Regista-te!
                            </Text>
                </View> 
                
            </ImageBackground> 
    
        )

    }
}


const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 150,
    },
    content: {
        paddingBottom: 90,
        backgroundColor: 'transparent',
        flexDirection: 'column', 
        alignItems: 'center',
    },
    bigText: {
        color: '#fff',
        fontSize: 32,
        textAlign: 'center',
     },
    smallText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    },
    register: {
        zIndex: 1,
        textAlign: 'center',
        color: '#fff',
        fontSize: 12,
    },
    inputContainer: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        width:'100%',
        borderRadius: 15,
        paddingBottom: 50,
    },
    image: {
        resizeMode: 'stretch',
     },
    input:{
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        width:'88%',
        marginLeft: 22,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5, 
    },
    textAboveInput: {
        marginLeft: 22,
        paddingTop: 15,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        
    },
    buttons: {
        backgroundColor: '#B98831',
        color: '#000',
        width: 300,
        height: 50,
        alignSelf: 'center',
        padding: 15,
        marginTop: 15,
        borderRadius: 15,
    },
    login: {
        backgroundColor: '#B98831',
        width: 300,
        height: 50,
        alignSelf: 'center',
        padding: 15,
        marginTop: 15,
        borderRadius: 15,
    },
})
