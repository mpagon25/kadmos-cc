import React from "react";
import { View, StyleSheet } from "react-native";
import UserList from "../components/UserList";

const MainPage = (props) => {
    const { userList } = props;

    return (
        <View style={styles.container}>
            <View>
                <UserList {...props} userList={userList} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MainPage;
