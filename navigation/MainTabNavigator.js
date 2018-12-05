import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import MainScreen from '../screens/MainScreen';
import TodayScreen from '../screens/TodayScreen';

import ExampleScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const MainStack = createStackNavigator({
    Main: MainScreen,
});

MainStack.navigationOptions = {
    tabBarLabel: 'Main',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
            Platform.OS === 'ios'
            ? `ios-information-circle${focused ? '' : '-outline'}`
            : 'md-information-circle'
            }

        />
    ),
};

const LinksStack = createStackNavigator({
    Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        />
    ),
};

const ExampleStack = createStackNavigator({
    Example: ExampleScreen,
});

ExampleStack.navigationOptions = {
    tabBarLabel: 'Example',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        />
    ),
};



export default createBottomTabNavigator({
  MainStack,
  ExampleStack,
  LinksStack,
  SettingsStack
});
