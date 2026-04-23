import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { sharedStyles } from "../styles/sharedStyle"

interface ScreenWrapperProps {
    children: React.ReactNode;
    title?: string;
    withScroll?: boolean;
}

export default function ScreenWrapper({ children, title, withScroll = false }: ScreenWrapperProps) {
    const Container = withScroll ? ScrollView : View;

    return (
        <SafeAreaView style={sharedStyles.screen}
            edges={['bottom', 'left', 'right']} >
                <Container style={sharedStyles.content}>
                    {title && (
                        <Text style={sharedStyles.title}> 
                            {title}
                        </Text>

                    )
                } 
                    {children}
                </Container>
        </SafeAreaView>
    );
}


// finalidad del screenWrapper -> unifica la estructura de todas las pantallas 
// -- Maneja el safeAreaView con los bordes correctos
// -- centraliza el padding y el fondo
// -- opcionalmente renderiza un titulo estandar

