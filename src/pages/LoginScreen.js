import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import useHideTabBar from '../hooks/useHideTabBar';
import Button from '../components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthenticated, setUser } from '../redux/reducers/userReducer';

export default function LoginScreen({ navigation }) {
  useHideTabBar(navigation);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginButton = () => {
    // Check if the entered email and password match the predefined values
    if (email === 'user@mail.com' && password === 'user') {
      // If the credentials are correct, dispatch the action
      dispatch(setIsAuthenticated(true));
      dispatch(setUser({
        ...user,
        email: email
      }))
  
      // Navigate to another screen if needed
      navigation.goBack();
    } else {
      // If the credentials are incorrect, you can show an error message
      console.log('Invalid credentials. Please check your email and password.');
    }
  };

  return (
    <View style={styles.container}>
      {/* title */}
      <View>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>Login</Text>
      </View>

      {/* input */}
      <View style={{ marginTop: 50, backgroundColor: '#EEF5FF', padding: 16, flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
        <TextInput
          placeholder='Email'
          style={[styles.input, { marginTop: 40 }]}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder='Password'
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry  // This makes the input field for passwords hide the entered characters
        />
        <Button name='Login' onPress={handleLoginButton}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    paddingTop: 50,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
});
