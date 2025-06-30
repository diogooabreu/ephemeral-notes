import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useState, useCallback} from "react";
import ScreenContainer from "@/components/ScreenContainer";
import Btn from "@/components/Btn";
import { getNotes, deleteNote } from "@/utils/storage";
import { Note } from "@/types/Note";

export default function NoteDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [note, setNote] = useState<Note | null>(null);

  useFocusEffect(
    useCallback(() => {
      const loadNote = async () => {
        const allNotes = await getNotes();
        const found = allNotes.find((n) => n.id === id);
        setNote(found || null);
      };
      loadNote();
    }, [id])
  );
    
  const handleDelete = async () => {
    await deleteNote(id as string);
    router.replace('/(tabs)/myNotes');
  };

  if (!note) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>Nota não encontrada.</Text>
      </View>
    );
  }

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{note.title}</Text>
          <TouchableOpacity style={styles.Btn} onPress={() => router.back()}>
            <FontAwesome name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        </View>
        <Text style={styles.content}>{note.content}</Text>
      </View>
          <Btn
              title="deletar"
              onPress={handleDelete}
          />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
  },
  header: {
    flexDirection: "row",  
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
    content: {
    fontSize: 16
  },
  notFound: {
    fontSize: 18,
    color: "red"
  },
  Btn: {
    backgroundColor: "#1C1C1C",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  }
});