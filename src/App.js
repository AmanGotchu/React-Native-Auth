import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header, Button, Spinner } from './components/common';


class App extends Component {

state = { loggedIn: null };

componentWillMount(){
  firebase.initializeApp({

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
