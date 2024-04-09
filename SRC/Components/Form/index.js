import React from "react";
import { View, Text, TextInput } from "react-native";

export default function Form(){
    return(
        <View>
            <View>
                <Text>Height: </Text>
                <TextInput 
                    placeholder="1.75"
                    keyboardType="numeric"
                />
                <Text>Weight: </Text>
                <TextInput
                    placeholder="75.865"
                    keyboardType="numeric"
                /> 
            </View>
        </View>
    );
}