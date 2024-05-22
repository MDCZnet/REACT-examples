import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Background from '../components/Background'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import Paragraph from '../components/Paragraph'
import { theme } from '../theme'
import { pinValidator } from '../helpers/pinValidator'

export default function ActivationScreen({ navigation }) {
  const [activation, setActivation] = useState({ value: '', error: '' })

  const onActivationPressed = () => {
    const activationError = pinValidator(activation.value)
    if (activationError) {
      setActivation({ ...activation, error: activationError })
      return
    } 
   
    navigation.reset({
      index: 0,
      routes: [{ name: 'Zákaznická karta' }],
    })
  }

  return (
    <Background>
      <Paragraph>
        ... vložte prosím PIN z e-mailu, který jsme k Vám právě odeslali
      </Paragraph>
      <TextInput
        label="PIN"
        returnKeyType="next"
        value={activation.value}
        onChangeText={(text) => setActivation({ value: text, error: '' })}
        error={!!activation.error}
        errorText={activation.error}
        textContentType="none"
        keyboardType="number-pad"
      />
      <Button mode="contained" onPress={onActivationPressed}>
        Potvrdit
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