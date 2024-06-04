import React, { useState, useEffect } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import axios from 'axios'
import Background from '../components/Background'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import Paragraph from '../components/Paragraph'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    } 

    let pin = Math.floor(1000 + Math.random() * 9000)

    axios.get('https://zap.mdcz.net/login/' + email.value + '/' + pin)
    
    navigation.reset({
      index: 0,
      routes: [{ name: 'ActivationScreen' }],
    })
  }

  return (
    <Background>
      <Paragraph>
        Pro aktivaci prosím zadejte Váš e-mail...
      </Paragraph>
      <TextInput
        label="E-mail"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <Button mode="contained" onPress={onLoginPressed}>
        Aktivovat
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },

  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})