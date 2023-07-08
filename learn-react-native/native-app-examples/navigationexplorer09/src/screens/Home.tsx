import {Button, StyleSheet, Text, View} from 'react-native'
import React from 'react'
// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function Home({navigation}: HomeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
        title="Go to Details"
        // onPress={() => navigation.navigate('Details', {productId: '99'})}
        // onPress={() => navigation.navigate('Details')}
        onPress={() => navigation.push('Details', {productId: '88'})}
        // onPress={() => navigation.replace('Details', {productId: '88'})}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
})
