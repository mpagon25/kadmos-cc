import { React, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, Text } from "react-native-paper";
import icon from "../../assets/icons/cog.png";
import { useNavigation } from "@react-navigation/native";
const BottomNav = (props) => {
    const [activeNav, setactiveNav] = useState("users");
    const { textLang } = props;
    const navigation = useNavigation();
    return (
        <Appbar style={styles.nav}>
            <View style={styles.icons}>
                <Appbar.Action
                    style={{ flex: 1 }}
                    color={activeNav == "users" ? "green" : "black"}
                    size={50}
                    icon="account-group"
                    onPress={() => {
                        setactiveNav("users");
                        navigation.navigate("home");
                    }}
                />
                <Text style={{ color: "black" }}>{textLang.users}</Text>
            </View>
            <View style={styles.icons}>
                <Appbar.Action
                    style={{ flex: 1 }}
                    color={activeNav == "settings" ? "green" : "black"}
                    size={50}
                    icon={icon}
                    onPress={() => {
                        setactiveNav("settings");
                        navigation.navigate("settings");
                    }}
                />
                <Text style={{ color: "black" }}> {textLang.settings}</Text>
            </View>
        </Appbar>
    );
};

const styles = StyleSheet.create({
    nav: {
        flex: 1,
        position: "fixed",
        width: "100%",
        backgroundColor: "#fff",
        height: 120,
        justifyContent: "space-around",
        paddingBottom: 40,
        bottom: 0,
    },
    icons: {
        alignItems: "center",
    },
});

export default BottomNav;
