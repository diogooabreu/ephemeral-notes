import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenContainer from '@/components/ScreenContainer';
import { NoteCard } from '@/components/NoteCard';
import { useRouter } from 'expo-router';
import { notes } from '@/database/notes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function myNotes() {
  const router = useRouter();

    const handleLogout = async () => {
      await AsyncStorage.removeItem('user');
      router.replace('/');
    };
  

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <Text style={styles.title}>Your Ephemeral Notes</Text>
        <TouchableOpacity onPress={handleLogout}>
          <FontAwesome name="sign-out" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

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
