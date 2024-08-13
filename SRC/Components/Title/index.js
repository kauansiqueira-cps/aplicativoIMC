import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Title(){
    return(
        <View style={styles.BoxTitle}>
            <Text style={styles.texTitle}>Pedro Henrique e Kauan Siqueira</Text>
            <Text>13/08/2024...</Text>
          
        </View>
    );
}
