import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator() 

export default function TabNavigator() {
    return(
    <Tab.Navigator
    screenOptions={{
        tabBarActiveTintColor:"#6200ee",
        tabBarInactiveTintColor:"gray",
        headerShown: false, // Los headers los maneja el Stack
    }}
    >
        <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
            title: "Inicio",
            tabBarLabel: "Inicio",
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
            ),
        }}
        />
        <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
            title: "Perfil",
            tabBarLabel: "Perfil",
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
            ),
        }}
        />
        <Tab.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{
            title: "Ajustes",
            tabBarLabel: "Ajustes",
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
            ),
        }}
        />
    </Tab.Navigator>
)}