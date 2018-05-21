import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
state = { email: '', password: '', error: '' }

onButtonPress() {
  const { email, password } = this.state;

  //Returns a promise - construct for handling asynchronous code
  firebase.auth().signInWithEmailAndPassword(email, password)
   .catch(() => {
     firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(() => {
        this.setState({error: 'Authentication Failed'});
      });
   });
}

render(){
  return(
    <Card>

     //This Card Section is the Email
     <CardSection>
      <Input
        value={this.state.email}
        onChangeText={text => this.setState({ email: text })}
        label="Email"
        placeholder="user@gmail.com"
      />
     </CardSection>

     //This CardSection is the Password
     <CardSection>
     <Input
      label="Password"
      placeholder="Password"
      onChangeText={text => this.setState({ password: text})}
      value={this.state.password}
      secureTextEntry
      />
     </CardSection>

     <Text style={styles.errorTextStyle}>
      {this.state.error}
     </Text>

     <CardSection>
      <Button onPress={this.onButtonPress.bind(this)}>
      Login
      </Button>
     </CardSection>



    </Card>
  );
}
}

const styles = {
  errorTextStyle:{
    alignSelf: 'center',
    fontSize: 20,
    color: 'red'
  }
}

export default LoginForm;
