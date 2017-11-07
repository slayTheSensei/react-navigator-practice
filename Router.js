import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Artists from './screens/Artists.js'
import Events from './screens/Events.js'
import Maps from './screens/Maps.js'
import ArtistProfile from './screens/ArtistProfile.js'

export const ArtistStack = StackNavigator({
  Artists: {
    screen: Artists,
    navigationOptions: {
      headerTitle: 'Artists',

    }
  },
  ArtistProfile: {
    screen: ArtistProfile,
  },
})

export const Tabs = TabNavigator({
  Artists: {
    screen: ArtistStack,
    navigationOptions: {
      tabBarLabel: 'Artists',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-disc' : 'ios-disc-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Events: {
    screen: Events,
    navigationOptions: {
      tabBarLabel: 'Events',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-pin' : 'ios-pin-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Map: {
    screen: Maps,
    navigationOptions: {
      tabBarLabel: 'Map View',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-map' : 'ios-map-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
})
