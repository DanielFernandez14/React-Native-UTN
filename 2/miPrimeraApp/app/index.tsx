// import { ScrollView, Text, View, StyleSheet } from "react-native";
// import Clase02 from "./Clase02";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useState } from "react";

// export default function Index() {
//   const [nombre, setNombre] = useState("Daniel");
//   const [bio, setBio] = useState("Aprendiendo React Native");

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <ScrollView>
//         <View
//           style={{
//             flex: 1,
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Text style={styles.nombre}>{nombre}</Text>
//           <Text>{bio}</Text>
//           <Text>Editar app/index.tsx</Text>
//           <Clase02 nombre={"Daniel"} />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   nombre: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "black",
//   },
// });

import { ScrollView, Text, View, StyleSheet, Image, TextInput } from "react-native";
import Clase02 from "./Clase02";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function Index() {
  const [nombre, setNombre] = useState("Daniel");
  const [bio, setBio] = useState("Aprendiendo React Native");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/3b9ea735965035.560633088d683.jpg",
            }}
            style={styles.avatar}
          />

          <Text style={styles.nombre}>{nombre}</Text>
          <Text>{bio}</Text>

          <View style={styles.card}>
            <Text style={styles.label}>Nombre: </Text>
            <TextInput
              style={styles.input}
              value={nombre}
              onChangeText={setNombre}
            />

            <Text style={styles.label}>Biografía: </Text>
            <TextInput
              style={styles.input}
              value={bio}
              onChangeText={setBio}
            />
          </View>

          <Text>Editar app/index.tsx</Text>
          <Clase02 nombre={nombre} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, // la mitad del width/height para que quede redonda
    marginBottom: 16,
  },
  nombre: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  card: {
    width: "90%",
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginTop: 4,
  },
});
