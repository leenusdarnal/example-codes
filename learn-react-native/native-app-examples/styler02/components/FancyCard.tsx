import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{uri: 'https://reactjs.org/logo-og.png'}}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>React Logo/ Card Title</Text>
          <Text style={styles.cardLabel}>React logo,cardLabel</Text>
          <Text style={styles.cardDescription}>
            This is the card Descrioption that holds the details for the card
            which constains variois details but is kept short and precise that
            the give the whole picture of the card image shown
          </Text>
          <Text style={styles.cardFooter}>THis is the card footer</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    display: 'flex',
    textAlign: 'center',
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginHorizontal: 5,
    marginVertical: 12,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
  },
  cardImage: {
    height: 180,
    // width: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    display: 'flex',
    flex: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {color: '#000000', fontSize: 14, marginBottom: 6},
  cardDescription: {
    color: '#0E2954',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
  },
  cardFooter: {color: '#000000', marginBottom: 6},
})
