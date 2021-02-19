import React from 'react'

import {
    TouchableOpacity,
    Alert,
    Button,
    AsyncStorage,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView
} from "react-native";
import styles from "./assets/css/style";
import * as SecureStore from 'expo-secure-store';
const setToken = (token) => {
    return SecureStore.setItemAsync('secure_token', token);
};
const getToken = () => {
    return SecureStore.getItemAsync('secure_token');
};
export default class userAuth extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            login:"",
            password:""
        };
    }

    async  submit(){
        await   fetch('http://192.168.0.104:8080/api/authenticate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.login,
                password: this.state.password


            })
        }).then((res) => res.json())
            .then( async data => {
                console.log(data);
                if (data.id_token!=null) {
              const value=await AsyncStorage.setItem("token",data.id_token)
                    Alert.alert(
                        'تم الدخول لحسابك بنجاح',
                        '',
                        [
                            {text: 'تمام', onPress: () => this.props.navigation.navigate('Home')}
                        ],
                    );
                console.log(value);}
                else {
                    Alert.alert(
                        'هناك مشكله في عمليه التجسيل !يرجى التاكد من رقم التلفون او كلمه السر',
                        '',
                        [
                            {text: 'تمام', onPress: () => this.props.navigation.navigate('UserLogin')}
                        ],
                    );
                }
            })

            .then((response)=>{
                console.log(getToken)

  })
            .catch((err) =>{ console.log(err);
                console.log("testing");})
    };

    render() {
        const { navigate } = this.props.navigation;

        return(

            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        تسجيل الدخول
                    </Text>
                    <TextInput placeholder=" رقم التلفون"
                               keyboardType = 'numeric'
                               onChangeText={(login) => this.setState({login})}

                               style={styles.buttonStyle}>

                    </TextInput>
                    <TextInput placeholder="كلمه السر"
                               secureTextEntry={true}
                               onChangeText={(password) => this.setState({password})}

                               style={styles.buttonStyle}>

                    </TextInput>
                    <TouchableOpacity style={styles.buttonStyle}
                                      title=" تسجيل دخول"

                                      onPress={() => this.submit(this.props.navigation)}
                    >
                        <Text style={styles.textStyle}> تسجيل دخول </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
                )}
}
