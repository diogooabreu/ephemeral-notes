import { View, Text,  TextInput, TouchableOpacity, Image, StyleSheet  } from 'react-native'
import React from 'react'
import ScreenContainer from '@/components/ScreenContainer'
import { useRouter } from "expo-router";

export default function index() {
    const router = useRouter();

  return (
      <ScreenContainer>
        <View style={styles.imageWrapper}>
            <Image
            source={require('../assets/logo.png')} // Ajusta esse caminho conforme tua pasta
            style={styles.logo}
            resizeMode="contain"
        />
        </View>
          
        <View style={ styles.container }>
            <TextInput
            style={styles.input}
            placeholder="username"
            placeholderTextColor="#333"
            />
            <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="#333"
            secureTextEntry
            />

        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              router.push('/(tabs)/myNotes');
            }}
        >
            <Text style={styles.buttonText}>LogIn</Text>
        </TouchableOpacity>

        <Text style={styles.helpText}>Need help?</Text>
        </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
    imageWrapper: {
        alignItems: 'center',
        marginTop: 180,
        zIndex: 1,
      },
      logo: {
        width: 250,
        height: 250,
        borderRadius: 250,
        borderWidth: 4,
        borderColor: '#2f324a',
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 32,
        alignItems: 'center',
        gap: 16,
        zIndex: 1,
      },
    input: {
        backgroundColor: '#d9d9d9',
        width: '90%',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        fontSize: 16,
      },
      button: {
        backgroundColor: '#2f324a',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        marginTop: 10,
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic',
      },
      helpText: {
        marginTop: 150,
        fontWeight: 'bold',
        color: '#222',
      },
})