import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
state = { email: '', password: '', error: '', loading: false }

onButtonPress() {
  const { email, password } = this.state;

  this.setState({error: '', loading: true});
  //Returns a promise - construct for handling asynchronous code
  firebase.auth().signInWithEmailAndPassword(email, password)
   .then(this.onLoginSuccess.bind(this))
   .catch(() => {
     firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
   });
}

onLoginFail() {
  this.setState({error: 'Authentication Failed', loading: false});
}

onLoginSuccess() {
  this.setState({error: '', loading: false, email: '', password: ''});
}

renderHelper() {
    if(this.state.loading) {
      return <Spinner size='large' />;
    }else{
      return(
        <Button onPress={this.onButtonPress.bind(this)}>
        Login
        </Button>
      );
    }
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
      {this.renderHelper()}
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
