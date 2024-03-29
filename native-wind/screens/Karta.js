import { Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export const Karta = () => {
  return (
    <View className="flex-1 items-center justify-center bg-red-400 text-red-600">
      <Text className="text-red-600">Karta ..........</Text>
      <QRCode value="123456789" />
    </View>
  );
}

export default Karta;