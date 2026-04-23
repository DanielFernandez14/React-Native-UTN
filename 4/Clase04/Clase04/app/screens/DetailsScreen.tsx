import { Button, Card, Text } from "react-native-paper"
import ScreenWrapper from "../components/ScreenWraper"
import { sharedStyles } from "../styles/sharedStyle"
import { StyleSheet } from "react-native"

export default function DetailsScreen({route, navigation}: any) {
    const { item } = route.params || {}

    return (
        <ScreenWrapper title="Detalle del item">
            {
            
            item ? (
                <Card style={sharedStyles.card}>
                    <Card.Content>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text variant="bodyMedium">{item.description}</Text>
                        <Text style={styles.itemId}>{item.id}</Text>
                    </Card.Content>
                </Card>
            ) : ( <Text>No se recibió información</Text>)
        }
        <Button style={styles.button} mode ="contained-tonal" onPress={() => navigation.goBack()}>Volver atrás</Button>
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
    itemTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
        color: '#1d1b20'
    }, 
        itemId: {
            marginTop: 16,
            color: '#49454f'
    }, 
            button: {
            marginTop: 16,
        }
    },
);

