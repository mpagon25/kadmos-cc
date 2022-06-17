import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Avatar, Card } from "react-native-paper";
import CustomText from "./CustomText";

const UserCard = (props) => {
    const { navigation } = props;
    const user = {
        name: `${props.user.first_name} ${props.user.last_name}`,
        email: props.user.email,
        avatar: props.user.avatar,
        id: props.user.id,
    };

    return (
        <Card
            style={styles.card}
            onPress={() => {
                navigation.push("profile", {
                    user,
                });
            }}
        >
            <View style={styles.cardView}>
                <Card.Content>
                    <Image style={styles.image} source={{ uri: user.avatar }} />
                </Card.Content>
                <Card.Content style={styles.details}>
                    <CustomText variant="name" text={user.name} />
                    <CustomText variant="mail" text={user.email} />
                </Card.Content>
                <Card.Content style={styles.arrowIcon}>
                    <Avatar.Icon
                        color="#000"
                        style={styles.arrow}
                        icon={require("../../assets/icons/chevron-right.png")}
                    />
                </Card.Content>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 2,
    },
    cardView: {
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: "row",
    },

    image: {
        flex: 1,

        width: 60,
        borderRadius: 0,
        backgroundColor: "#000000",
    },
    details: {
        width: "100%",
        flex: 10,
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: "space-between",
    },
    arrowIcon: {
        flex: 1,
        flexDirection: "row",
        padding: 0,
        justifyContent: "flex-end",
    },
    arrow: {
        backgroundColor: "transparent",
        borderRadius: 0,
        width: 20,
    },
});

export default UserCard;
