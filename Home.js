import React from 'react';
import {StyleSheet, Button, View, SafeAreaView, Text, Alert, AsyncStorage, TouchableOpacity} from 'react-native';

export default class Home extends React.Component{

    static navigationOptions={
        title: 'Home',
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
            token: null,
            isHidden: true
        }
    }

        render() {
        const { navigate } = this.props.navigation;
    return(

        <SafeAreaView style={styles.container}>

            <View>
                <Text style={styles.title}>
                    الفلزه
                </Text>

                <View style={styles.fixToText}>
                    <Button style={styles.buttonStyle}
                            title="سائق"
                            onPress={() => navigate(
                                'Driver')}
                    />
                <Button style={styles.buttonStyle}
                            title="راكب"
                            onPress={() => navigate(
                                'Rider')}
                            // onPress={() => Alert.alert('Right button pressed')}
                    />
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
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 40,
        paddingBottom:100
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonStyle:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:20,
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
});
