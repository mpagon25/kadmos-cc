import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const switchVariant = (variant, text, moreStyles) => {
    switch (variant) {
        case "mail":
            return <Text style={[styles.mailText, moreStyles]}>{text}</Text>;
        case "name":
            return <Text style={[styles.nameText, moreStyles]}>{text}</Text>;
        case "title":
            return <Text style={[styles.titleText, moreStyles]}>{text}</Text>;
		case "label":
			return <Text style={[styles.labelText, moreStyles]}>{text}</Text>;

        default:
            break;
    }
};

const CustomText = (props) => {
    const { variant, text, moreStyles } = props;
    return <>{switchVariant(variant, text, moreStyles)}</>;
};

const styles = StyleSheet.create({
    mailText: {
        fontFamily: "Courier New",
        color: "green",
        fontSize: 14,
    },
    nameText: {
        fontSize: 18,
        fontWeight: "500",
    },
    titleText: {
        fontSize: 30,
        fontWeight: "600",
		width: 'auto'
    },
    labelText: {
		fontSize: 20,
		fontWeight: '700'
	},
});

export default CustomText;
