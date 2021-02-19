import React from 'react'
import {TouchableOpacity,Alert, Button, SafeAreaView, StyleSheet, Text, View} from "react-native";
import styles from "./assets/css/style";
import moment from "moment";
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
                    <Text style={styles.details}>
                        من {item.source}</Text>
                    <Text style={styles.details}>
                        الي {item.destination}</Text>
                    <Text style={styles.details}>
                        {moment(item.startTime).format('MMMM,Do YYYY HH:mm')}
                    </Text>
                    <Text style={styles.details}>
                       عدد الركاب {item.passengers}</Text>
                    <Text style={styles.details}>
                        رقم التواصل {item.contactNo}</Text>
                    <View>



                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
