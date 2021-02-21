import React from 'react'
import {TouchableOpacity,Alert, Button, ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import styles from "./assets/css/style";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default class SearchForTrips extends React.Component {

    static navigationOptions = {
        title: 'SearchForTrips',
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
            from:this.props.navigation.state.from,
            to:this.props.navigation.state.to
        };
    }



    componentDidMount() {
        fetch('http://192.168.0.104:8080/api/trips' +
            '?from='+this.props.navigation.getParam('from')+'&to='+this.props.navigation.getParam('to')
            , {
                method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
            }
        )
            .then((response) => response.json())
            .then((responseJson) => {

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

        const {navigate} = this.props.navigation;
        return (

            <SafeAreaView style={styles.container}>

                <View>
                    <Text style={styles.title}>
                        الرحلات المتوفره حاليا
                    </Text>
                    <View>
                    </View>
                </View>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (
                            // <CardList id={item.id} title={item.source} content={item.source} style={styles.buttonStyle}/>

                         <Text style={styles.cardStyle}  onPress={() => navigate(
                             'TripDetails',{item:item})}>

                             {item.source}
                             <FontAwesome name="arrow-left" size={25} style={{marginRight:120}} />

                             {item.destination}</Text>
                        )}
                    />
            </SafeAreaView>

        )
    }
}
