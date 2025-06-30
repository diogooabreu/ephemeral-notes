import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useCallback } from 'react';
import ScreenContainer from '@/components/ScreenContainer';
import { NoteCard } from '@/components/NoteCard';
import { useRouter, useFocusEffect } from 'expo-router';
import { getNotes } from '@/utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Note } from '@/types/Note';

export default function myNotes() {
  const router = useRouter();
  const [note, setNote] = useState<Note[]>([]);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    router.replace('/');
  };

  const loadNotes = async () => {
    const savedNotes = await getNotes();
    setNote(savedNotes);
  };

  useFocusEffect(
    useCallback(() => {
      const loadNotes = async () => {
        const allNotes = await getNotes();
        const user = await AsyncStorage.getItem('user');
        if (!user) return;
  
        const filtered = allNotes.filter(note => note.user === user);
        setNote(filtered);
      };
      loadNotes();
    }, [])
  );
  

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <Text style={styles.title}>Your Ephemeral Notes</Text>
        <TouchableOpacity onPress={handleLogout}>
          <FontAwesome name="sign-out" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={note}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteCard
            note={item}
            onPress={() => router.push(`/note/${item.id}`)}
          />
        )}
        ListEmptyComponent={
          <Text style={{ color: "#ccc", textAlign: "center", marginTop: 40 }}>
            Nenhuma nota salva ainda.
          </Text>
        }
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#DCDCDC',
  },
});
