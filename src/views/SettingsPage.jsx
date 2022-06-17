import { React } from "react";
import { View, StyleSheet } from "react-native";
import { List } from "react-native-paper";

const SettingsPage = (props) => {
    const { onPress, lang } = props;

    console.log(onPress);
    return (
        <View style={styles.container}>
            <List.Section title="Language">
                <List.Accordion title={lang}>
                    <List.Item
                        title={"English"}
                        onPress={() => {
                            onPress("English");
                        }}
                    />
                    <List.Item
                        title={"Deutsch"}
                        onPress={() => {
                            onPress("Deutsch");
                        }}
                    />
                </List.Accordion>
            </List.Section>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default SettingsPage;
