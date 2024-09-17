
import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native"
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")

    const [erroMessage, setErroMessage] = useState(null)

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function verificarImc(){
        if(imc == null){
            setErroMessage("*Campo Obrigatório")
        }
    }

        function validationImc(){
            if(weight != null && height != null){
                imcCalculator()
                setHeight(null)
                setWeight(null)
                setMessageImc("Imc é igual: ")
                setTextButton("Calcular Novamente")
                return
            }

            verificarImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha peso e Altura")
        }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.erroMessage}>{erroMessage}</Text>
                <TextInput style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="EX. 1.75"
                keyboardType="numeric"
                ></TextInput>

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.erroMessage}>{erroMessage}</Text>
                <TextInput style={styles.input}
                onChangeText={setWeight}
                value={weight}
                 placeholder="EX. 75.365"
                  keyboardType="numeric"
                ></TextInput>





              
              <TouchableOpacity
              style={styles.buttomCalculator}
              onPress={() => {

              validationImc()
              }}
                > 
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
              </TouchableOpacity>
                 
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}
