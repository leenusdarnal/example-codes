import {Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.contianer} scrollEnabled={false}>
        {contacts.map(contact => (
          <View key={contact.uid} style={styles.useCard}>
            <Image source={{uri: contact.imageUrl}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{contact.name}</Text>
              <Text style={styles.userStatus}>{contact.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    display: 'flex',
    textAlign: 'center',
    margin: 10,
  },
  contianer: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  useCard: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: 'purple',
    borderRadius: 10,
  },
  userImage: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFF',
  },
  userStatus: {
    fontSize: 12,
  },
})
