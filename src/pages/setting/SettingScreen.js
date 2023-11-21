import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Container from '../../components/layout/Container'
import Button from '../../components/button/Button'
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, setIsAuthenticated } from '../../redux/reducers/userReducer';
import { clearBookingHotel } from '../../redux/actions/hotelAction';
import { CommonActions } from '@react-navigation/native';

export default function SettingScreen({ navigation }) {
  const { user } = useSelector((state) => state.user);
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();



  const HandleAuth = () => {
    if (!isAuthenticated) {
      navigation.navigate('Login')
    } else {
      dispatch(setIsAuthenticated(false));
      dispatch(clearUser());
      dispatch(clearBookingHotel());

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'Home',
            }
          ],
        })
      );
      alert('Logout successfully')
    }
  }

  const HandleEditAccount = () => {
    if (isAuthenticated) {
      navigation.navigate('Edit Profile')
    } else {
      navigation.navigate('Login')
    }
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
          <Text style={{ fontSize: 16 }}>{user.firstName}</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingVertical: 16, justifyContent: 'space-between', borderBottomColor: '#ccc', borderBottomWidth: 2 }}>
          <Text style={{ fontSize: 16 }}>Last Name</Text>
          <Text style={{ fontSize: 16 }}>{user.lastName}</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingVertical: 16, justifyContent: 'space-between', borderBottomColor: '#ccc', borderBottomWidth: 2 }}>
          <Text style={{ fontSize: 16 }}>Phone</Text>
          <Text style={{ fontSize: 16 }}>{user.phone}</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingVertical: 16, justifyContent: 'space-between', borderBottomColor: '#ccc', borderBottomWidth: 2 }}>
          <Text style={{ fontSize: 16 }}>Email</Text>
          <Text style={{ fontSize: 16 }}>{user.email}</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingVertical: 16, justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16 }}>Gender</Text>
          <Text style={{ fontSize: 16 }}>{user.gender}</Text>
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
          <Text style={{ fontSize: 16, color: 'tomato', fontWeight: 'bold' }}>{isAuthenticated ? 'Logout' : 'Login'}</Text>
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