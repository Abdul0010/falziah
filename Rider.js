import React from 'react'
import {TouchableOpacity, Alert, Button, SafeAreaView, StyleSheet, Text, View, ScrollView} from "react-native";
import ActionSheet from 'react-native-actionsheet'
import ActionSheet2 from 'react-native-actionsheet'
var options = [];

export default class Rider extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            language: 'الشحر',
            firstLanguage: 'المكلا',
            secondLanguage: 'الفيل',
            isVisible:false,
            dest:0,
            source:'',
            contactNo:'',
            destination: '',

        }
    }
    static navigationOptions={
        title: 'Rider',
    }
    handlefromPresss = (buttonIndex) => {

        this.setState({
                selected: buttonIndex,
                source: options[buttonIndex]
            }
        );
    };
    async componentDidMount() {

        global.cities.forEach(function (city){
            options.push(city);
        })
    }
    handlePressto = (buttonIndex) => {

        this.setState({
                selected: buttonIndex,
                destination: options[buttonIndex]
            }
        );
    };
    showActionSheet = () => {
        this.ActionSheet.show()
    };
    showActionSheet2 = () => {
        this.ActionSheet2.show()
    };
    render() {
        const { navigate } = this.props.navigation;
        return(

            <SafeAreaView style={styles.container}>

                <View>
                    <Text style={styles.title}>
                        الراكب
                    </Text>
                    <View>
                        <Text onPress={this.showActionSheet} style={styles.label}>من:</Text>
                        <Text onPress={this.showActionSheet}
                              style={styles.buttonStyle}
                              value = {this.state.source}
                              onChangeText={text => this.setState({source})}
                        >
                            {this.state.source}
                        </Text>

                        <ActionSheet
                            ref={o => (this.ActionSheet = o)}
                            title={"مكان الانطلاق"}
                            options={options}
                            cancelButtonIndex={5}
                            value={this.state.source}

                            onPress={this.handlefromPresss}
                        />
                        <ActionSheet2
                            ref={o => this.ActionSheet2 = o}
                            title={'مكان الوصول'}
                            options={options}
                            cancelButtonIndex={2}
                            destructiveButtonIndex={1}

                            onPress={this.handlePressto}
                        />



                        <Text  style={styles.label}  onPress={this.showActionSheet2}>الى</Text>
                        <Text onPress={this.showActionSheet2}
                              onChangeText={text => this.setState({source})}

                              style={styles.buttonStyle}>
                            {this.state.destination}

                        </Text>

                        <TouchableOpacity style={styles.buttonStyle}
                                title="البحث عن رحله رحله"

                                onPress={() => navigate(
                                    'tripList',{from:this.state.source,to:this.state.destination})}
                        >
                            <Text style={styles.textStyle}> البحث عن رحله</Text>

                        </TouchableOpacity>
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
        backgroundColor:'#e7e9ea',
    },
    picker: {
        width: 200,
        backgroundColor: '#FFF0E0',
        borderColor: 'black',
        borderWidth: 1,
    },
    pickerItem: {
        color: 'red'
    },
    onePicker: {
        width: 200,
        height: 44,
        backgroundColor: '#FFF0E0',
        borderColor: 'black',
        borderWidth: 1,
    },
    onePickerItem: {
        height: 44,
        color: 'red'
    },
    title: {
        marginBottom:12,
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 40,
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
    buttonStyle:{
        marginRight:40,
        marginLeft:40,
        marginTop:5,
        marginBottom:10,
        paddingTop:20,
        paddingBottom:30,
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        color: '#d8dee3',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20,
    },    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
