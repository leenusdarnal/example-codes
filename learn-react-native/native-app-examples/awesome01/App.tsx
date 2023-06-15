import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native'

import AppPro from './AppPro'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <SafeAreaView style={styles.contianer}>
      <View>
        <Text style={isDarkMode ? styles.darkText : styles.whiteText}>
          Hello World!!!!!9999
        </Text>
      </View>
      <AppPro />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contianer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: 'white',
  },
  darkText: {
    color: 'green',
  },
})

export default App
