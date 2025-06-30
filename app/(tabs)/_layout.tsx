import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "white",
                headerShown: false,
                tabBarInactiveTintColor: 'white', // Ícones inativos escuros
                tabBarStyle: {
                    backgroundColor: '#2f324a', // Fundo da barra inferior
                    borderTopWidth: 0,
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold',
                    fontSize: 12,
                },
            }}
        >
            <Tabs.Screen
                name="myNotes"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="newNote"
                options={{
                    title: 'Nova nota',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus-square" color={color} />,
                }}
            />
        </Tabs>
    );
}