import React, { useState } from 'react';
import { Button, View, Text, Pressable} from 'react-native';
import { CustonPressable, TextPressable } from './styles';
import BatTextInput from '@components/BatTextInput';
import generatePass from '@service/passwordService';
import * as Clipboard from 'expo-clipboard';
import { PasswordLenghtDropDown } from '@components/PasswordLenghtDropDown';

export function BatButton() {
  
  const [pass, setPass] = useState('');

  const [length, setLenght] = useState<number>(6);

  function handleGenerateButton(){
    let generateToken = generatePass(length);
    setPass(generateToken);
  }

  function handleCopyButton(){
    Clipboard.setStringAsync(pass);
  }
  

  return (
    <>
        {/* <BatButtonStyle
        onPress={() => { console.log("Oi, meu chapa") }}
        accessibilityLabel="Clique em mim"
      >
        <BatButtonLabel style={{ color: 'white', fontSize: 16 }}>CLIQUE AQUI</BatButtonLabel>
      </BatButtonStyle> */}
      <BatTextInput
        pass= {pass}
      />

      <PasswordLenghtDropDown
        setLenght={setLenght}
      />

      <CustonPressable
      onPress={handleGenerateButton}
      >
        <TextPressable>GENERATE</TextPressable>
      </CustonPressable>

      <CustonPressable
      onPress={handleCopyButton}
      >
        <TextPressable>⚡COPY</TextPressable>
      </CustonPressable>
    </>
  );
}