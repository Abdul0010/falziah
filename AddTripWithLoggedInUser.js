import React, {useState} from 'react';
import ActionSheet from 'react-native-actionsheet'
import ActionSheet2 from 'react-native-actionsheet'

import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    TextInput,
    Picker,
    TouchableOpacity,
    ActionSheetIOS,
    Keyboard,
    ScrollView, AsyncStorage
} from 'react-native';
import t from 'tcomb-form-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import moment from "moment";
const Form=t.form.Form;
// const [date, setDate] = useState(new Date())
// const [date, setDate] = useState(new Date(1598051730000));
// const [mode, setMode] = useState('date');
// const [show, setShow] = useState(false);


var options =[];

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;


export default class AddTripWithLoggedInUser extends React.Component{

    static navigationOptions={
        title: 'اضافه رحله 2',
    }
    showActionSheet = () => {
        this.ActionSheet.show()
    }
    showActionSheet2 = () => {
        this.ActionSheet2.show()
    }


    showDatepicker = () => {
     this.setState({
         isVisible:true
     })
};
    async componentDidMount() {
        const token = await AsyncStorage.getItem('token');
        this.setState({ bearer: 'Bearer ' + token });
        global.cities.forEach(function (city){
            options.push(city);
        })
    }


    handlefromPresss = (buttonIndex) => {

        this.setState({
                selected: buttonIndex,
                source: options[buttonIndex]
        }
        );
    };
    handlePressto = (buttonIndex) => {

        this.setState({
                selected: buttonIndex,
            destination: options[buttonIndex]
            }
        );
    };
    // showActionSheet = () => {
    //     this.ActionSheet.show()
    // }
    // showActionSheet2 = () => {
    //     this.ActionSheet2.show()
    // }
    handleConfirm=(datetime)=>{
        alert();
        this.setState({
            isVisible:false,
            selectedDate:moment(datetime).format('yyyy-MM-d HH:mm'),
            startTime:datetime


        })
    };
    onTextChanged(e) {
        if (/^\d+$/.test(e.toString())) {
            this.setState({myNumber: e});
        }
    }
    hideDatePicker=()=>{
        this.setState({
            isVisible:false
        })
    };

    submitTrip(){

        if(this.state.source==undefined||this.state.source==""){
            alert("الرجاء ادخال منطقه الانطلاق")
        }
        else if(this.state.destination==undefined||this.state.destination==""){
            alert("الرجاء ادخال منطقه الوصول")
        }
        else if(this.state.startTime==undefined||this.state.startTime==""){
            alert("الرجاء ادخال تاريخ الرحله")
        }
        else if(this.state.passengers==undefined||this.state.passengers==""){
            alert("الرجاء ادخال عددالركاب ")
        }
        else if(this.state.contactNo==undefined||this.state.contactNo==""){
            alert("الرجاء ادخال رقم التواصل ")
        }else{
        fetch('http://192.168.0.104:8080/api/user/createTrip', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': this.state.bearer,

            },
            body: JSON.stringify({
            car:'',
            contactNo: this.state.contactNo,
            destination:this.state.destination ,
            passengers: this.state.passengers,
            source: this.state.source,
            startTime: this.state.startTime


            })
        }).then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
        Alert.alert(
            'تم sاضافه رحلتك بنجاح',
            '',
            [
                {text: 'تمام', onPress: () => this.props.navigation.navigate('Driver')}
            ],
        );

    }};
    constructor(props) {
        super(props)
        this.state = {
            language: 'الشحر',
            firstLanguage: 'المكلا',
            secondLanguage: 'الفيل',
            isVisible:false,
            dest:0,
            car:'',
            contactNo:'',
            destination: '',
            id: 0,
            passengers: 0,
            startTime: "",
             bearer :null


        }
    }


    render() {



        return(

        <SafeAreaView style={styles.container}>
            <ScrollView keyboardDismissMode={'on-drag'}>

                <Text style={styles.title}>
                    اضافه يرحله 2 </Text>
                <Text onPress={this.showActionSheet} style={styles.label}>من:</Text>
                <Text onPress={this.showActionSheet}
                      style={styles.buttonStyle}
                      value = {this.state.source}
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
                           style={styles.buttonStyle}>
                     {this.state.destination}

                </Text>
                <TouchableOpacity style={styles.buttonStyle}
                                  title="اضافه رحله"

                                  onPress={this.showDatepicker}
                >
                    <Text style={styles.textStyle}> تاريخ الرحله</Text>
                </TouchableOpacity>
                    <DateTimePickerModal
                    isVisible={this.state.isVisible}
                    mode={'datetime'}
                    onConfirm={this.handleConfirm}
                    onCancel={this.hideDatePicker}
                />
                <Text style={styles.label}
                      onChangeText={(startTime) => this.setState({startTime})}

                >{this.state.selectedDate}

                </Text>
                <TextInput placeholder="عدد الركاب"
                           keyboardType = 'numeric'
                           value = {this.state.myNumber}
                           onSubmit={Keyboard.dismiss}

                           style={styles.buttonStyle}
                    onChangeText={(passengers) => this.setState({passengers})}>

                </TextInput>
                <TextInput placeholder=" رقم التلفون"
                           keyboardType = 'numeric'
                           onChangeText={(contactNo) => this.setState({contactNo})}

                           style={styles.buttonStyle}>

                </TextInput>
                <TouchableOpacity style={styles.buttonStyle}
                                  title="اضافه رحله"

                                  onPress={() => this.submitTrip(this.props.navigation)}
                >
                    <Text style={styles.textStyle}> اضافه رحله</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        backgroundColor:'#68a0cf',
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
        paddingTop:20,
        paddingBottom:10,
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
    color: '#d8dee3',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20
},    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
