
import { Button, Text, View } from 'react-native'

export default function First({navigation, pin}) {
  const onButtonPressed = () => {
    navigation.reset({
      routes: [{ name: 'Second page' }],
    })
  }

  return (
    <View  style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 40}}>
      <Text style={{fontSize: 20}} >
        PIN: {pin}
      </Text> 
      <Text />
      <Text />
      <Button title='Na další stranu >' onPress={onButtonPressed} />
    </View>
  )
}