import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'

export default function ActionCard() {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContaienr}>
          <Text style={styles.headerText}>
            Whats new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://th.bing.com/th?q=JS+Wallpaper&dc=2&w=100&h=100&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',
          }}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Just like every year ,Javascript brings new features. This year
            Javascript is bringing 4 new features , which are almost in
            production rollout. so let us jump to directily writing examples
            with features as explain what is going on and where these features
            are used.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              )
            }>
            <Text style={styles.socialLink}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/leenusdarnal/')
            }>
            <Text style={styles.socialLink}>Follow Me</Text>
          </TouchableOpacity>
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
    marginHorizontal: 6,
    marginVertical: 12,
  },
  elevatedCard: {
    backgroundColor: '#526D82',
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContaienr: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
  },
  cardImage: {
    height: 180,
    // width: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  bodyContainer: {padding: 10},
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  socialLink: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFF',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 6,
  },
})
