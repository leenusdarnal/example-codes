import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, {useState, type PropsWithChildren} from 'react'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
}

const Dice = ({imageUrl}: DiceProps) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

export default function App() {
  const [diceImage, setdiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6)
    const diceImages = [
      DiceOne,
      DiceTwo,
      DiceThree,
      DiceFour,
      DiceFive,
      DiceSix,
    ]
    setdiceImage(diceImages[randomNumber])
    ReactNativeHapticFeedback.trigger('notificationError', options)
  }
  return (
    <>
      <Text style={styles.headingText}>Roll The Dice</Text>
      <View style={styles.container}>
        <Dice imageUrl={diceImage} />
        <Pressable onPress={rollDiceOnTap}>
          <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
        </Pressable>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})
