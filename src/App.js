import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';


class App extends Component {
componentWillMount(){
  firebase.initializeApp({
    apiKey: 'AIzaSyDduTXR0f3O4etQCuvYfpcIzCgkE_y-ts4',
    authDomain: 'authentication-69a70.firebaseapp.com',
    databaseURL: 'https://authentication-69a70.firebaseio.com',
    projectId: 'authentication-69a70',
    storageBucket: 'authentication-69a70.appspot.com',
    messagingSenderId: '94269555078'
  });
}

render(){
  return (
    <View>
      <Header headerText="Authentication"/>
      <LoginForm />
    </View>
  );
}

}

export default App;
