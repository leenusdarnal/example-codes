import React from 'react'
import type {PropsWithChildren} from 'react'
import {StyleSheet, Text, View} from 'react-native'

type CurrencyButtonProps = PropsWithChildren<{name: string; flag: string}>

const CurrencyButton = (props: CurrencyButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  )
}

export default CurrencyButton

const styles = StyleSheet.create({
  buttonContainer: {
    textAlign: 'center',
    alignItems: 'center',
  },
  flag: {
    fontSize: 28,
    color: '#FFFFFF',
  },
  country: {
    fontSize: 15,
    color: '#2D3436',
  },
})
