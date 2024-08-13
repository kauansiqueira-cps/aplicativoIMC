import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native-web";
import ResultImc from "./ResultImc";

export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")


    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2))
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc(" IMC é Igual: ")
            setTextButton("Calcular Novamente")
            return
        }

        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha Peso e Altura")
    }

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Exemplo: 1.75"
                    keyboardType="numeric">
                </TextInput>
                <Text>Peso</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Exemplo: 75.365"
                    keyboardType="numeric">
                </TextInput>
                <Button 
                onPress={() => validationImc()}
                title={textButton}
                color='#61dafb'/>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    )
}