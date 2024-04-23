import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { validate } from "react-native-web/dist/cjs/exports/StyleSheet/validate";

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

                <Button
                onPress={validation()}
                title="Calcular IMC"
                color="#61dafb"
                />

                
            </View>
        </View>
    );
}