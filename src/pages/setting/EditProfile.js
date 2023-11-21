import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import useHideTabBar from '../../hooks/useHideTabBar';
import Container from '../../components/layout/Container';
import Button from '../../components/button/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/reducers/userReducer';

export default function EditProfile({ navigation }) {
  useHideTabBar(navigation);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState(user.gender);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ]);
  const handleUpdate = () => {
    // Create an updatedUser object with the changes
    const updatedUser = {
      ...user,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      gender: gender,
    };

    // Dispatch the setUser action with the updated user information
    dispatch(setUser(updatedUser));
    navigation.goBack();
  }
  return (
    <Container>
      <View style={{ backgroundColor: '#EEF5FF', padding: 16, borderRadius: 20 }}>
        <Text>First Name</Text>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          style={{ backgroundColor: 'white', padding: 10, borderRadius: 20, marginBottom: 20, marginTop: 6 }}
        />
        <Text>Last Name</Text>
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          style={{ backgroundColor: 'white', padding: 10, borderRadius: 20, marginBottom: 20, marginTop: 6 }}
        />
        <Text>Phone</Text>
        <TextInput
          placeholder="Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          style={{ backgroundColor: 'white', padding: 10, borderRadius: 20, marginBottom: 20, marginTop: 6 }}
        />
        <Text>Email</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{ backgroundColor: 'white', padding: 10, borderRadius: 20, marginBottom: 20, marginTop: 6 }}
        />
        <Text>Gender</Text>
        <DropDownPicker
          open={open}
          value={gender}
          items={items}
          setOpen={setOpen}
          setValue={setGender}
          setItems={setItems}
          style={{ marginTop: 6, marginBottom: 20, borderColor: 'transparent', borderRadius: 20 }}
          onChangeItem={(item) => setGender(item.value)}
        />
        <Button name="Update" onPress={handleUpdate} />
      </View>
    </Container>
  )
}