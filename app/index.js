import React, {Component} from 'react';
import {
  StatusBar
} from 'react-native';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import MenuScreen from './screens/menu'
import EditProfileScreen from './screens/editProfile'
import MaleHomeScreen from './screens/maleHome'
import FemaleHomeScreen from './screens/femaleHome'
import LoginScreen from './screens/login'
import ProfileScreen from './screens/profile'
import LoadingScreen from './screens/loading'
import QuestionsScreen from './screens/questions'
import DecisionScreen from './screens/matchDecision'
import MatchesScreen from './screens/matches'
import MatchScreen from './screens/match'

import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBVB94M-JVYod9Q1l3dGPNfUJhiNL-PBik",
  databaseURL: "https://dategame-4957f.firebaseio.com",
} 

firebase.initializeApp(firebaseConfig)

export const Router = createRouter(() => ({
  menu: () => MenuScreen,
  editProfile: () => EditProfileScreen,
  maleHome: () => MaleHomeScreen,
  femaleHome: () => FemaleHomeScreen,
  login: () => LoginScreen,
  profile: () => ProfileScreen,
  loading: () => LoadingScreen,
  questions: () => QuestionsScreen,
  matchDecision: () => DecisionScreen,
  matches: () => MatchesScreen,
  match: () => MatchScreen,
}))

export default class App extends Component {
  render() {
    return(
      <NavigationProvider router={Router}>
        <StatusBar barStyle="dark-content" />
        <StackNavigation initialRoute={Router.getRoute('loading')} />
      </NavigationProvider>
      )
  }
}