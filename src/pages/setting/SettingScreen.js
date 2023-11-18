import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Container from '../../components/layout/Container'
import Button from '../../components/button/Button'

export default function SettingScreen({ navigation }) {


  const HandleAuth = () => {
    navigation.navigate('Login')
  }

  const HandleEditAccount = () => {
    navigation.navigate('Edit Profile')
  }
  return (
    <Container>
      {/* My Account */}
      <View style={{ backgroundColor: '#EEF5FF', padding: 16, borderRadius: 20, }}>
        {/* title */}
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>My Account</Text>
        {/* details */}
        <View style={{ flexDirection: 'row', paddingVertical: 16, justifyContent: 'space-between', borderBottomColor: '#ccc', borderBottomWidth: 2 }}>
          <Text style={{ fontSize: 16 }}>First Name</Text>
          <Text style={{ fontSize: 16 }}>Gordon</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingVertical: 16, justifyContent: 'space-between', borderBottomColor: '#ccc', borderBottomWidth: 2 }}>
          <Text style={{ fontSize: 16 }}>Last Name</Text>
          <Text style={{ fontSize: 16 }}>Norman</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingVertical: 16, justifyContent: 'space-between', borderBottomColor: '#ccc', borderBottomWidth: 2 }}>
          <Text style={{ fontSize: 16 }}>Email</Text>
          <Text style={{ fontSize: 16 }}>gordonnorman@mail.com</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingVertical: 16, justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16 }}>Gender</Text>
          <Text style={{ fontSize: 16 }}>Male</Text>
        </View>

        <Button name='Edit Account' onPress={HandleEditAccount}></Button>

      </View>

      {/* Support */}
      <View style={{ backgroundColor: '#EEF5FF', padding: 16, borderRadius: 20, marginTop: 16 }}>
        {/* title */}
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Support</Text>
        {/* details */}
        <View style={{ flexDirection: 'row', paddingVertical: 16, justifyContent: 'space-between', borderBottomColor: '#ccc', borderBottomWidth: 2 }}>
          <Text style={{ fontSize: 16 }}>Term & policy</Text>
        </View>

        <Pressable onPress={HandleAuth} style={{ flexDirection: 'row', paddingVertical: 16 }}>
          <Text style={{ fontSize: 16, color: 'tomato', fontWeight: 'bold' }}>Log Out</Text>
        </Pressable>

      </View>
    </Container>
  )
}


const styles = StyleSheet.create({
  searchButton: {
    backgroundColor: "tomato",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },
  searchText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: "white",
  }
});