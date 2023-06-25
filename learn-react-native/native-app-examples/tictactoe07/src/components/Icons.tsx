import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import type {PropsWithChildren} from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'

type IconsProp = PropsWithChildren<{
  name: string
}>

export default function Icons({name}: IconsProp) {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color="white" />
      break
    case 'cross':
      return <Icon name="times" size={38} color="white" />
    default:
      return <Icon name="pencil" size={38} color="white" />
      break
  }
  return (
    <View>
      <Text>Icons</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
