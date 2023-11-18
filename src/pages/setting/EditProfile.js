import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import useHideTabBar from '../../hooks/useHideTabBar';
import Container from '../../components/layout/Container';
import Button from '../../components/button/Button';
import DropDownPicker from 'react-native-dropdown-picker';

export default function EditProfile({ navigation }) {
  useHideTabBar(navigation);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' }
  ]);
  const handleUpdate = () => {
    console.log('Update');
  }
  return (
    <Container>
      <View style={{ backgroundColor: '#EEF5FF', padding: 16, borderRadius: 20, }}>
        <Text>First Name</Text>
        <TextInput placeholder='First Name' value='Gordon' style={{ backgroundColor: 'white', padding: 10, borderRadius: 20, marginBottom: 20, marginTop: 6 }}></TextInput>
        <Text>Last Name</Text>
        <TextInput placeholder='First Name' value='Norman' style={{ backgroundColor: 'white', padding: 10, borderRadius: 20, marginBottom: 20, marginTop: 6 }}></TextInput>
        <Text>Email</Text>
        <TextInput placeholder='First Name' value='gordonnorman@mail.com' style={{ backgroundColor: 'white', padding: 10, borderRadius: 20, marginBottom: 20, marginTop: 6 }}></TextInput>
        <Text>Gender</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={{ marginTop: 6, marginBottom: 20, borderColor: 'transparent', borderRadius: 20 }}
        />
        <Button name='Update' onPress={handleUpdate}></Button>
      </View>
    </Container>
  )
}