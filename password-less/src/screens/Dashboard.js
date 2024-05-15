import React from 'react'
import Background from '../components/Background'

import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Paragraph>
        Přihlášení do aplikace proběhlo úspěšně.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
          })
        }
      >
        Sign out
      </Button>
    </Background>
  )
}