import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainPage from "./src/views/MainPage";
import ProfilePage from "./src/views/ProfilePage";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <MainPage />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
