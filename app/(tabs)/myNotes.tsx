import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import ScreenContainer from '@/components/ScreenContainer'
import { NoteCard } from '@/components/NoteCard'
import { useRouter } from 'expo-router'
import { notes } from '@/database/notes'

export default function myNotes() {
  const router = useRouter();

  return (
    <ScreenContainer>
      <View style={ styles.container}>
        <Text style={styles.title}>
          Your Ephemeral Notes
        </Text>

        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NoteCard
              note={item}
              onPress={() => router.push(`/note/${item.id}`)}
            />
          )}
        />
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "serif",
    marginBottom: 12,
    color: "#DCDCDC",
  }
});