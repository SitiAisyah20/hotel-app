import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import useHideTabBar from '../hooks/useHideTabBar'
import Button from '../components/button/Button';

export default function LoginScreen({ navigation }) {
  useHideTabBar(navigation);

  const handleLoginButton = () => {
    console.log('Login');
  }
  return (

    <View style={styles.container}>
      {/* title */}
      <View>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24, textAlign: 'center' }}>Login</Text>
      </View>

      {/* input */}
      <View style={{ marginTop: 50, backgroundColor: '#EEF5FF', padding: 16, flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
        <TextInput placeholder='Email' style={{ backgroundColor: 'white', padding: 10, borderRadius: 20, marginBottom: 20, marginTop: 40 }}></TextInput>
        <TextInput placeholder='Password' style={{ backgroundColor: 'white', padding: 10, borderRadius: 20, marginBottom: 20 }}></TextInput>
        <Button name='Login' onPress={handleLoginButton}></Button>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    paddingTop: 50,

  },
})