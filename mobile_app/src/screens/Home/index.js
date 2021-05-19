import React from 'react'
import { Button, Image, ImageBackground, Text, TouchableNativeFeedback, View } from 'react-native'

import background from '../../assets/background.png'
import logo_home from '../../assets/logo_home.png'

import styles from './styles'

export default function(){
    return (
        <ImageBackground source={background} style={styles.Background} >
            <View style={styles.Container}>
                <Image source={logo_home} />
                <TouchableNativeFeedback onPress={
                    () => alert("Acessar o app")
                }>
                    <View style={styles.ContainerButton}>
                        <Text style={styles.TextButton}>Acessar</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </ImageBackground>
    )
}