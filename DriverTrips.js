import React from 'react'
import {
    TouchableOpacity,
    Alert,
    Button,
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    AsyncStorage
} from "react-native";
import {ListItem} from 'react-native-elements'
import styles from "./assets/css/style";
import { CardList } from 'react-native-card-list';

export default class DriverTrips extends React.Component {

    static navigationOptions = {
        title: 'DriverTrips',
    }
    async componentDidMount() {
        const token = await AsyncStorage.getItem('token');
        console.log(token+"test");
        alert(token)
        this.setState({ bearer: 'Bearer ' + token });
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
            from:this.props.navigation.state.from,
            to:this.props.navigation.state.to,
            bearer :this.props.navigation.state.token

        };
    }



    async  componentDidMount() {
        const token = await AsyncStorage.getItem('token');
        fetch('http://192.168.0.104:8080/api/driver/trips', {
                method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token ,

            }
            }
        )
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(" no error");

                console.log(responseJson);
                this.setState({
                    data: responseJson
                })
            })
            .catch((error) => {
                console.log("error again");

                console.error(error);
            });
    }
    render() {
        // const { data, isLoading } = this.state;
        const data=this.state.data;

        const {navigate} = this.props.navigation;
        return (

            <SafeAreaView style={styles.container}>

                <View>
                    <Text style={styles.title}>
                        رحلاتك المتوفره حاليا
                    </Text>
                    <View>
                    </View>
                </View>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (

                         <Text style={styles.cardStyle}  onPress={() => navigate(
                             'Edit',{item:item})}> من 2:{item.source} الي :{item.destination}</Text>
                        )}
                    />
            </SafeAreaView>

        )
    }
}
