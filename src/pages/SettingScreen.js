import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SettingScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { fontSize: 30, fontWeight: 'bold' }
});