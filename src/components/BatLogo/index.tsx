import React from 'react';
import { View, Text, Image} from 'react-native';
import batLogo from '../../../assets/bat-logo.png';
import { CustonBatImage, CustonTitle } from './styles';

export default function BatLogo() {
  return (
    <View>
        <CustonTitle>
            BAT PASS GENERATOR
        </CustonTitle>
        <CustonBatImage
            source={batLogo}
        />
    </View>
  );
}