import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Container = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20
  },
});

export default Container