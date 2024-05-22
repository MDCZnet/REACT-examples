import { Text, View, useWindowDimensions } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const CustomerID = '12 34 56';

export const Karta = () => {
  return (
    <View>
      <Text>
        {CustomerID}
      </Text>
      <QRCode value={CustomerID} size={useWindowDimensions().width-100} />
    </View>
  );
}

export default Karta;