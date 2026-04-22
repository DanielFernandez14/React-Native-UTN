import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'

interface Tarea {
    id: string;
    texto: string;
    completada: boolean;
}

export default function ToDoList() {
    const [tareas, setTareas] = useState<Tarea[]>([])
    const [nuevaTarea, setNuevaTarea] = useState("")

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Mi lista de tareas</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Escribí una tarea..."
                    value={nuevaTarea}
                    onChangeText={setNuevaTarea}
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    contador: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    boton: {
        backgroundColor: '#007AFF',
        padding: 15,
        marginLeft: 10,
        borderRadius: 5,
    },
    botonTexto: {
        color: 'white',
        fontWeight: 'bold',
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 22,
        height: 22,
        borderWidth: 2,
        borderColor: '#007AFF',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxCompletado: {
        backgroundColor: '#007AFF',
    },
    checkmark: {
        color: 'white',
        fontSize: 14,
    },
    textoTarea: {
        fontSize: 16,
    },
    textoTareaCompletado: {
        textDecorationLine: 'line-through',
        color: '#aaa',
    },
    textoEliminar: {
        fontSize: 20,
        marginLeft: 10,
    },
});