import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screen
import DashboardScreen from '../screens/DashboardScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MapScreen from '../screens/MapScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#CAB08F',
        tabBarStyle:{
          height:87,
          backgroundColor:"#146956",
          borderTopEndRadius:20,
          borderTopStartRadius:20,
        }
        
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="view-dashboard" size={30} color={color} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="map" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="account-cog" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

type NavigationProps = {
  navigation:any;

};

export default function Navigation({ navigation }: NavigationProps) {
  return <MyTabs />;
}

