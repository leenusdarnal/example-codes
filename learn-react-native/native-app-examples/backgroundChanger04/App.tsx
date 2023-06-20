import {StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'

export default function App() {
  const [randomBgColor, setRandomBgColor] = useState('#000000')

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += hexRange.charAt(Math.floor(Math.random() * 16))
    }
    setRandomBgColor(color)
  }
  return (
    <>
      <StatusBar backgroundColor={'black'}></StatusBar>
      <Text style={styles.headingText}>Background Changer</Text>
      <View style={[styles.container, {backgroundColor: randomBgColor}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    display: 'flex',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
})
