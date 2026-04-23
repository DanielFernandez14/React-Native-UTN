import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator()

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false, //desactivado para evitar doble titulo junto al screenwrapper
            contentStyle: {
                backgroundColor: '#f5f5f5',
            }
        }}
        >
        <Stack.Screen 
        name= "Home"
        component={HomeScreen}
        />
        <Stack.Screen 
        name= "Details"
        component={DetailsScreen}
        />


        </Stack.Navigator>
    )

}