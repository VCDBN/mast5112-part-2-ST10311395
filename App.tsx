import React from 'react';
import {Text, View} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import GenreScreen from './screens/GenreScreen';
import HistoryScreen from './screens/HistoryScreen.js';
import AddBook from './screens/AddBook';


//we need to wrap a navigation container inside our main component

//main component

const App =() =>{
  const Tab = createBottomTabNavigator();
  return(
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) =>{
          let iconName="";

          if (route.name === 'Home'){
            iconName = focused ? 'home' : 'home';
          }
          else if (route.name === 'Genre'){
            iconName = focused ? 'category' : 'category';
          }
          else if (route.name === 'History'){
            iconName = focused ? 'history' : 'history';
          }
          else if (route.name === 'AddBook'){
            iconName = focused ? 'category' : 'category';
          }
          return <Ionic name={iconName} color={color} size={size} />

        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Genre" component={GenreScreen}/>
      <Tab.Screen name="History" component={HistoryScreen}/>
      <Tab.Screen name="AddBook" component={AddBook}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
