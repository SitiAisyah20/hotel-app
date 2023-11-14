import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function FavoriteScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => navigation.navigate('Home')}>FavoriteScreen</Text>
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