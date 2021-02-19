import React from 'react'
import {TouchableOpacity, Alert, Button, SafeAreaView, StyleSheet, Text, View, AsyncStorage} from "react-native";

export default class Driver extends React.Component{

    static navigationOptions={
        title: 'Driver',
    }

    logout= () => {
       AsyncStorage.clear();
        this.props.navigation.navigate('Home')    // this.setState({isHidden:false});

}

    async componentDidMount() {
        const token = await AsyncStorage.getItem('token');
        this.setState({ token: token,
            isHidden:token!=null?true:false
        });

    }
    constructor(props) {
        super(props)
        this.state = {
            token:null,
            isHidden:true
        }

    }
        render() {
        const { navigate } = this.props.navigation;

            return(

            <SafeAreaView style={styles.container}>

                <View>
                    <Text style={styles.title}>
                        سائق
                    </Text>
                    <View style={styles.fixToText}>

                        { this.state.isHidden ?
                            <Text style={styles.subtitle}
                                  title="اضافه رحله"
                            > اهلا وسهلا بمكانك الان تسجيلات رحلات جديده والتعديل عليها
                            </Text>:null}

                    </View>
                    <View>

                        <TouchableOpacity style={styles.buttonStyle}
                                title="اضافه رحله"
                                onPress={() =>{ this.state.isHidden?navigate(
                                    'AddTripWithLoggedInUser'):navigate(
                                    'AddTrip')}}
                        >
                            <Text style={styles.textStyle}> اضافه رحله</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle}
                                          title="تعديل رحله"
                                          onPress={() => this.state.token!=null? navigate(
                                              'DriverTrips',{token:this.state.token}):alert("you need to login first ")}
                        >
                            <Text style={styles.textStyle}>تعديل رحله</Text>

                        </TouchableOpacity>
                        { !this.state.isHidden ?

                            <TouchableOpacity style={styles.buttonStyle}
                                          title="اضافه رحله"
                                          onPress={() => navigate(
                                              'UserLogin')}
                        >
                            <Text style={styles.textStyle}>تسجيل دخول</Text>

                        </TouchableOpacity>:null}
                        { !this.state.isHidden ?

                            <TouchableOpacity style={styles.buttonStyle}
                                          title="اضافه رحله"
                                          onPress={() => navigate(
                                              'UserRegis')}
                        >
                            <Text style={styles.textStyle}>تسجيل حساب</Text>
                        </TouchableOpacity>:null}
                        { this.state.isHidden ?
                        <TouchableOpacity style={styles.buttonStyle}
                                          title="اضافه رحله"
                                          onPress={this.logout}
                        >
                            <Text style={styles.textStyle}>تسجيل خروج</Text>
                        </TouchableOpacity>:null}

                    </View>
                </View>
            </SafeAreaView>
        );
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        marginBottom:6,
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 40,
        paddingBottom:90
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
    },
    subtitle: {
        marginBottom:1,
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 20,
        flex: 1,
        flexDirection: 'column',
    },

});
