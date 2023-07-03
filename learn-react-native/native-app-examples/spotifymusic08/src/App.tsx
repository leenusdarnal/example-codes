import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, {useEffect, useState} from 'react'
import {addTrack, setupPlayer} from './MussicPlayerServices'
import MusicPlayer from '../screens/MusicPlayer'

export default function App() {
  const [isPlayerReady, setIsPlayerReady] = useState(false)

  const doSetupPlayer = async () => {
    let isSetup = await setupPlayer()
    if (isSetup) {
      addTrack()

      setIsPlayerReady(isSetup)
    }
  }
  useEffect(() => {
    doSetupPlayer()
  }, [])

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" color="#00ff00" />
      </SafeAreaView>
    )
  }

  return (
    <>
      <Text style={styles.headingText}>Music App!!!!</Text>
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <MusicPlayer />
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
  container: {flex: 1},
})
