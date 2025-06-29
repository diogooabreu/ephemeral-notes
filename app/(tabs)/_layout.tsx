import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "blue",
                headerShown: false
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