import React from "react";
import { View, Text } from "react-native";

export default function ResultImc() {
    return (
        <View>
            <Text>{props.messageResultImc}</Text>
            <Text>{props.resultImc}</Text>
        </View>
    );
}