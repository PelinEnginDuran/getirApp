import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import HomeNavigator from './HomeNavigator';
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  const CustomBarOpen = ({ onPress }) => {
    return (
      <TouchableOpacity 
      style={{
        width:59,
        height:59,
        backgroundColor:'#5C3EBC',
        justifyContent:"center",
        alignItems:"center",
        borderRadius:33,
        marginTop:-8,
        borderColor:"white",
        borderWidth:3
        
      }}
      onPress={onPress}>
        <EntypoIcon name='list' size={32} color='#ffd00c' />
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName='AnaSayfa'
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#5C3EBC',
        tabBarInactiveTintColor: '#959595',
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}>
      <Tab.Screen
        name='AnaSayfa'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Icon name='home' size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name='Search'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Icon name='search1' size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name='CustomBar'
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => <CustomBarOpen {...props} />,
        }}
      />
      <Tab.Screen
        name='Personal'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Icon name='user' size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name='Gift'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Icon name='gift' size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
