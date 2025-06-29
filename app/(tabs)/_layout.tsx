import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "blue",
                headerShown: false
            }}
        >
        </Tabs>
    );
}