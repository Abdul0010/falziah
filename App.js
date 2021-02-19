import React from 'react'
import {View,Text,Button} from "react-native-web";
import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
import Home from './Home'
import Rider from './Rider'
import Driver from './Driver'
import AddTrip from './AddTrip'
import SearchForTrips from './SearchForTrips'
import UserRegis from './userRegistraion'
import TripDetails from "./TripDetails"
import UserLogin from "./userAuth";
import userAuth from "./userAuth";
import editTrip from "./EditTrip";
import DriverTrips from "./DriverTrips";
import AddTripWithLoggedInUser from "./AddTripWithLoggedInUser";
import Edit from "./Edit";

const Navigator= createStackNavigator({
  Home:{screen:Home},
  Rider:{screen:Rider},
  Driver:{screen:Driver},
  AddTrip:{screen:AddTrip},
  UserRegis:{screen:UserRegis},
  tripList:{screen:SearchForTrips},
  TripDetails:{screen:TripDetails},
  UserLogin:{screen:userAuth},
  DriverTrips:{screen:DriverTrips},
  Edit:{screen:Edit},
  AddTripWithLoggedInUser:{screen:AddTripWithLoggedInUser}

});
 const App= createAppContainer(Navigator)


export default App;

