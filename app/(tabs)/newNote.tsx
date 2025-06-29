import { useState, useCallback } from "react";
import { View, TextInput,StyleSheet} from "react-native";
import { useRouter, useFocusEffect } from "expo-router";
import Btn from "@/components/Btn";
import { notes } from "@/database/notes";
import ScreenContainer from "@/components/ScreenContainer";

export default function NewNote() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useFocusEffect(
    useCallback(() => {
      setTitle("");
      setContent("");
    }, [])
  );

  const handleSave = () => {
    notes.push({
      id: Math.random().toString(),
      title,
      content,
    });

    router.push("/");
  };

  return (
    <ScreenContainer>
      <View style={styles.container}>
      <TextInput
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
        style={styles.inputTitle}
      />
      <TextInput
        placeholder="[.....]"
        value={content}
        onChangeText={setContent}
        multiline
        style={styles.inputNote}
      />

      <Btn
        title="Salvar"
        onPress={handleSave}
        />
    </View>
    </ScreenContainer>
  );
  ;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 8,
    alignItems: "center",
  },
  inputTitle: {
    fontSize: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 8,
    width: "100%",
    height: 45,
    textAlign: "center",
    backgroundColor: "#DCDCDC",
  },
  inputNote: {
    flex: 1,
    width: "100%",
    textAlignVertical: "top",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    fontSize: 20,
    backgroundColor: "#C0C0C0",
  },
});
