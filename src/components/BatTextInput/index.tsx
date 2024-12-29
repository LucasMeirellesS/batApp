import React from 'react';
import { View, TextInput } from 'react-native';
import { BatInput } from './styles';

interface BatTextInputProps{
  pass: string;
}

export default function BatTextInput(props: BatTextInputProps) {
  return (
    <BatInput
      placeholder='pass'
      value={props.pass}
    >
    </BatInput>
  );
}