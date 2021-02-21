import React from 'react'
import {
    TouchableOpacity,
    Alert,
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView
} from "react-native";
import styles from "./assets/css/style";
import moment from "moment";
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default class Rider extends React.Component{

    static navigationOptions={
        title: 'TripDetails',
    }

    render() {
        const { navigation } = this.props;

        const item = navigation.getParam('item', 'no data');

        const { navigate } = this.props.navigation;
        return(

            <SafeAreaView style={styles.container}>

                <View>
                    <Text style={styles.title}>
                        معلومات الرحله
                    </Text>
                    <ScrollView>
                    <Text style={styles.details}>
                        <FontAwesome name="arrow-left" size={25} style={{marginRight:120}} />
                        {"   "}

                        {item.source}

                    </Text>
                    <Text style={styles.details}>
                        <Ionicons name="location" size={25} style={{marginRight:120}} />
                        {"   "}

                        {item.destination}</Text>
                    <Text style={styles.details}>
                        <FontAwesome name="calendar" size={25} style={{marginRight:120}} />
                        {"   "}

                        {moment(item.startTime).format('YYY/MM/D HH:mm')}
                    </Text>
                    <Text style={styles.details}>
                        <Ionicons name="people" size={25} style={{marginRight:120}} />
                        {"   "}
                        {item.passengers}</Text>
                    <Text style={styles.details}>
                        <Ionicons name="md-call" size={25} style={{marginRight:120}} />
                        {"   "}

                        {item.contactNo}</Text>
                    </ScrollView>
                    <View>



                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
