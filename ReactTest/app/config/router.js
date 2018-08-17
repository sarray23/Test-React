import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Feed from '../screens/Feed';
import Welcome from '../screens/Welcome';

import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'List Github users',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
});

export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Github Users',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'My profile',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

export const WelcomeStack = StackNavigator({
  Welcome: {
      screen: Welcome,


      navigationOptions: {
      title: 'Settings',
    },
  },
});
export const SettingsStack = StackNavigator({
    Settings: {
        screen: Settings,


        navigationOptions: {
            title: 'Settings',
        },
    },
});
export const Root = StackNavigator({
    Welcome: {
        screen: WelcomeStack,
    },
    Settings: {
        screen: SettingsStack,
    },
  Tabs: {
    screen: Tabs,
  },

}, {
  mode: 'modal',
  headerMode: 'none',
});
