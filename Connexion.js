
import * as firebase from "firebase";
import React from 'react';
import { Text , StyleSheet} from 'react-native';
import { Container, Item, Form, Input, Button, Label } from "native-base";
import { SafeAreaView } from "react-native";
import { styles } from './assets/styles';

var config = {
  apiKey: "AIzaSyAluhcPKW5mudYLwtNy2xSzQlz55P92R5E ",
  authDomain: "crosspokedexapp.firebaseapp.com",
  databaseURL: "crosspokedexapp.firebaseio.com",
  projectId: "crosspokedexapp",
  storageBucket: "crosspokedexappappspot.com",
   messagingSenderId: "269398778466"
};
firebase.initializeApp(config);




export default class Connexion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  SignUp = (email, password) => {
    try {
      firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => { 
                 console.log(user);
           });
} catch (error) {
      console.log(error.toString(error));
    }
  };


  LogIn = (email, password) => {
    try {
      firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then(res => {
             console.log(res.user.email);
      });
} catch (error) {
      console.log(error.toString(error));
    }
  };

  render() {
    return (
      <Container style={styles.container} >
      <Form style={{ marginTop: 300 }}>
        <Item floatingLabel >
            <Label>Email</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={password => this.setState({ password })}
            />
                      </Item>
          <Container>
          <Button full rounded danger style={{ marginTop: 20 }}
          onPress={() => this.LogIn(this.state.email, this.state.password)}
          >
            <Text>Login</Text>
          </Button>

          <Button full rounded danger style={{ marginTop: 20 }}
          onPress={() => this.SignUp(this.state.email, this.state.password)}
          > 
            <Text style={color='red'}>Signup</Text>
          </Button>
          </Container>
        </Form>
      </Container>
    );
  }
}
