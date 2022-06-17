import { React, useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import BottomNav from "./components/BottomNav";
import MainPage from "./views/MainPage";
import ProfilePage from "./views/ProfilePage";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsPage from "./views/SettingsPage";
import globalText from "./res/language.global.json";

const Main = () => {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [lang, setLang] = useState("English");

    const fetchData = () => {
        axios
            .get("https://reqres.in/api/users")
            .then((res) => {
                setUsers(res.data.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [loading]);

    const Stack = createNativeStackNavigator();
    const handleOnLangChange = (language) => {
        setLang(language);
    };
    const deLang = {};
    const engLang = {};
    for (const [key, value] of Object.entries(globalText)) {
        deLang[`${key}`] = value.de;
        engLang[`${key}`] = value.en;
    }

    const textLang = lang == "English" ? engLang : deLang;
    console.log(textLang);

    return (
        <>
            {loading ? (
                <Text>loading ..</Text>
            ) : (
                <NavigationContainer>
                    <View style={styles.container}>
                        <Stack.Navigator initialRouteName="home">
                            <Stack.Screen name="home">
                                {(props) => {
                                    return (
                                        <>
                                            <MainPage
                                                {...props}
                                                userList={users}
                                                lang={lang}
                                                textLang={textLang}
                                            />
                                        </>
                                    );
                                }}
                            </Stack.Screen>
                            <Stack.Screen name="profile">
                                {(props) => {
                                    return (
                                        <>
                                            <ProfilePage
                                                {...props}
                                                lang={lang}
                                                textLang={textLang}
                                            />
                                        </>
                                    );
                                }}
                            </Stack.Screen>
                            <Stack.Screen name="settings">
                                {(props) => {
                                    return (
                                        <>
                                            <SettingsPage
                                                {...props}
                                                lang={lang}
                                                textLang={textLang}
                                                onPress={handleOnLangChange}
                                            />
                                        </>
                                    );
                                }}
                            </Stack.Screen>
                        </Stack.Navigator>
                    </View>
                    <BottomNav textLang={textLang} />
                </NavigationContainer>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 9,
        paddingTop: 50,
    },
});

export default Main;
