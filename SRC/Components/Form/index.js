import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";

export default function Form(){

    const [height,setHeight] = useState(null)
    const [weight,setWeight] = useState(null)
    const [message,setMessage] = useState("Preencha o Peso e Altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")

        function imcCalcular(){
            return setImc((weight/(height*height)).toFixed(2))
        }

        function validationImc(){
            if (weight != null && height != null) {
                imcCalcular()
                setHeight(null)
                setWeight(null)
                setMessage("Seu Imc é = ")
                setTextButton("Calcular Novamente")
                return
            } 
            setImc(null)
            setMessage("Preencha o Peso e Altura")
        }
    return(
        <View>


        <View>
            <Text>Height: </Text>
            <TextInput 
                placeholder="Ex. 1.75"
                keyboardType="numeric"
            />
            <Text>Weight: </Text>
            <TextInput
                placeholder="75.865"
                keyboardType="numeric"
            /> 

            <Button
            onPress={() => validationImc}
            title="Calcular IMC"
            color="#61dafb"
            />

        </View>
        </View>
    );
}