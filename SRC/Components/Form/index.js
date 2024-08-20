import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native-web";
import ResultImc from "./ResultImc";
import styles from "./style";

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
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Exemplo: 1.75"
                    keyboardType="numeric">
                </TextInput>

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Exemplo: 75.365"
                    keyboardType="numeric">
                </TextInput>

                <TouchableOpacity style={styles.buttomCalculator}
                onPress={() =>{
                    validationImc()
                }}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>

            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    )
}