import { useState } from "react";
import {Card, FAB, Text} from "react-native-paper"
import { FlatList, StyleSheet } from "react-native";
import { sharedStyles } from "../styles/sharedStyle"
import ScreenWrapper from "../components/ScreenWraper";

interface Item{
    id: number,
    title: string,
    description: string,
}

export default function HomeScreen({navigation}: any) {
    // El item va a ser un elemento que se va a multiplicar y va a contener texto
    //nos va a permitir navegar a los detalles del item
    // Esto podria representar productos, posteos o cualquier cosa a la cual se pueda navegar internamente
    const [items] = useState<Item[]>([
        {id: 1, title: "Item 1", description: "Descripcion del item 1"},
        {id: 2, title: "Item 2", description: "Descripcion del item 2"},
        {id: 3, title: "Item 3", description: "Descripcion del item 3"}
    ])

    const renderItem = ({item}: {item:Item}) => (
        
        <Card style={sharedStyles.card}
            onPress={() => navigation.navigate("Details", {item})}>
                <Card.Content>
                    <Text style={styles.itemTitle}>
                        {item.title}
                    </Text>
                    <Text variant="bodyMedium"> 
                        {item.description}
                    </Text>
                </Card.Content>
        </Card>

    )

    return (
        <ScreenWrapper title="Lista de Items">

            <FlatList 
            data={items}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            />
            <FAB icon= "plus" style={sharedStyles.fab} onPress={() => console.log('nuevo item')}/>
        </ScreenWrapper>
    )

}


const styles = StyleSheet.create({
    itemTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
        color: '#1d1b20'
    }
})