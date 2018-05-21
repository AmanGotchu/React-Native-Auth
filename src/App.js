import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';


class App extends Component {
componentWillMount(){
  firebase.initializeApp({

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
