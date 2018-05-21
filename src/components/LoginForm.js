import React, { Component } from 'react';

import { Button, Card, CardSection, Input } from './common'

class LoginForm extends Component {
state = { email: '', password: '' }


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

     <CardSection>
      <Button>
      Login
      </Button>
     </CardSection>
    </Card>
  );
}
}

export default LoginForm;
