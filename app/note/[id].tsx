import { useLocalSearchParams, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { notes } from "../../database/notes";
import ScreenContainer from "@/components/ScreenContainer";
import Btn from "@/components/Btn";


export default function NoteDetail() {
  const { id } = useLocalSearchParams();
  const note = notes.find((n) => n.id === id);
  const router = useRouter();

  if (!note) {
  return (
    <View style={styles.container}>
      <Text style={styles.notFound}>Nota não encontrada.</Text>
    </View>
  );
  }
    
  const handleDelete = () => {
    router.push("/");
  };

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
              onPress={() => router.back()}
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