import React from 'react'
import {
    TouchableOpacity,
    Alert,
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView, AsyncStorage
} from "react-native";
import styles from "./assets/css/style";

export default class userRegistraion extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            login:"",
            password:""
        };
    }

    async  submit(){
     await   fetch('http://192.168.0.104:8080/api/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                login: this.state.login,
                password: this.state.password,
                langKey: "ar"


            })
        })
            .then( response => {
                if (!response.ok) { Alert.alert(
                    'قد تم التسجيل بنفس هدا الرقم من قبل الرجا التسجيل برقم اخر  ',
                    '',
                    [
                        {text: 'تمام'}
                    ],
                ); throw response }})
         .then( async data => {
             const value=await AsyncStorage.setItem("token",data.id_token)

                Alert.alert(
            'تم اضافه حسابك بنجاح',
            '',
            [
                {text: 'تمام', onPress: () => this.props.navigation.navigate('Home')}
            ],
        );
  })
            .catch((err) => console.log(err))
    };

    render() {
        const { navigate } = this.props.navigation;

        return(

            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        تسجيل حساب
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
o
                    </TextInput>
                    <TouchableOpacity style={styles.buttonStyle}
                                      title="اضافه مستخدم"

                                      onPress={() => this.submit(this.props.navigation)}
                    >
                        <Text style={styles.textStyle}> اضافه رحله</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
                )}
}
