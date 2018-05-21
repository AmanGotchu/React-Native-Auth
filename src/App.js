import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header, Button, Spinner } from './components/common';


class App extends Component {

state = { loggedIn: null };

componentWillMount(){
  firebase.initializeApp({
    apiKey: 'AIzaSyDduTXR0f3O4etQCuvYfpcIzCgkE_y-ts4',
    authDomain: 'authentication-69a70.firebaseapp.com',
    databaseURL: 'https://authentication-69a70.firebaseio.com',
    projectId: 'authentication-69a70',
    storageBucket: 'authentication-69a70.appspot.com',
    messagingSenderId: '94269555078'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      this.setState({ loggedIn: true });
    }else{
      this.setState({ loggedIn: false });
    }
  });
}

renderContent() {

  switch(this.state.loggedIn){
    case true:
      return (
        <View style={styles.buttonStyle}>
        <Button onPress={() => firebase.auth().signOut()}>
        Log Out
        </Button>
        </View>
      );
    case false:
      return <LoginForm />;
    default:
      return (
        <View style={styles.spinnerStyle}>
        <Spinner size='large'/>;
        </View>
      );
  }

}

render(){
  return (
    <View>
      <Header headerText="Authentication"/>
      {this.renderContent()}
    </View>
  );
}

}

const styles = {
 buttonStyle: {
 marginTop: 10,
 flexDirection: 'row'
 },
 spinnerStyle: {
 }
};

export default App;
