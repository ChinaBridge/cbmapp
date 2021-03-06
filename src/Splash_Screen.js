'use strict';

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import SplashScreen from 'react-native-splash-screen'


export default class Splash_Screen extends Component<void, Props, void> {
  static navigationOptions = {
    header: {
      visible: false
    }
  };

  componentDidMount () {
    SplashScreen.hide(),
    this.props.navigation.navigate('Menu')
  }
}