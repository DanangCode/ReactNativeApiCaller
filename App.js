/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
'use strict';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';

const RootStack = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
});

const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;



