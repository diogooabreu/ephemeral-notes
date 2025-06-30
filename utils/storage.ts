import AsyncStorage from "@react-native-async-storage/async-storage"
import { Note } from "@/types/Note";

const STORAGE_KEY = 'notes';

export async function getNotes(): Promise<Note[]>{
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : [];
}

export async function saveNote(newNote: Note): Promise<void> {
    const notes = await getNotes();
    notes.push(newNote);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export async function deleteNote(noteId: string): Promise<void>{
    const notes = await getNotes();
    const updated = notes.filter(note => note.id !== note.id);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}