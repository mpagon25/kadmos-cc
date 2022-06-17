import React from "react";
import { Image, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import CustomText from "../components/CustomText";

const ProfilePage = (props) => {
    const { route, textLang } = props;
    const { user } = route.params;

    return (
        <Card style={styles.profileCard}>
            <CustomText
                moreStyles={[styles.text]}
                text={`${textLang.userProfile}`}
                variant="title"
            />
            <Image style={styles.image} source={{ uri: user.avatar }} />
            <CustomText
                moreStyles={[styles.text, styles.contentText]}
                text={`${textLang.userName}`}
                variant="label"
            />
            <CustomText
                moreStyles={[styles.text, styles.contentText]}
                text={user.name}
                variant="name"
            />
            <CustomText
                moreStyles={[styles.text, styles.contentText]}
                text={`${textLang.userMail}`}
                variant="label"
            />
            <CustomText
                moreStyles={[styles.text, styles.contentText]}
                text={user.email}
                variant="mail"
            />
        </Card>
    );
};

const styles = StyleSheet.create({
    profileCard: {
        flex: 1,
        alignItems: "center",
        margin: 20,
        padding: 20,
    },
    text: {
        textAlign: "center",
        marginBottom: 20,
    },
    contentText: {
        fontSize: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 30,
        alignSelf: "center",
    },
});

export default ProfilePage;
