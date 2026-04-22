import React from 'react'
import { View, Text, Image } from 'react-native'

type Props = {
    nombre: string;
}

function Clase02({ nombre }: Props) {
    return (
        <View>  
            <Text>Hola Mundo</Text>
            <View style={{ backgroundColor: "red", width: 50, height: 50 }}></View>
            <Text>Este es el loro de {nombre}</Text>
            <Image 
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqJduqdx1KagKdgSwtIVGNvTxqbtDOuUE4Q&s" }}
                style={{ width: 200, height: 200 }}
            />
        </View>
    )
}

export default Clase02