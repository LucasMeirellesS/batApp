import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { DropDownContainer } from './styles';

interface PasswordLenghtDropDownProps{
    setLenght: (data: number) => void;
}

export function PasswordLenghtDropDown(props: PasswordLenghtDropDownProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <DropDownContainer>
      <ScrollView>
        <RNPickerSelect
          onValueChange={(value) =>props.setLenght(value)}
          onOpen={handleFocus}
          onClose={handleBlur}
          items={[
            { label: '6', value: 6 },
            { label: '7', value: 7 },
            { label: '8', value: 8 },
            { label: '9', value: 9 },
            { label: '10', value: 10 },
            { label: '11', value: 11 },
            { label: '12', value: 12 },
            { label: '13', value: 13 },
            { label: '14', value: 14 },
            { label: '15', value: 15 },
          ]}
          style={{
            inputAndroid: {
              width: '100%',
              backgroundColor: isFocused ? '#e5bf3c' : 'black', // Muda a cor de fundo quando focado
              padding: 10,
              borderRadius: 10,
              color: '#e5bf3c',
              fontSize: 14,
              height: 60,
              borderWidth: 1,
              textAlign: 'center',
              textAlignVertical: 'center',
            },
            inputIOS: {
              width: '100%',
              backgroundColor: isFocused ? '#e5bf3c' : 'black',
              padding: 10,
              borderRadius: 10,
              color: '#e5bf3c',
              fontSize: 14,
              height: 60,
              borderWidth: 1,
              textAlign: 'center',
              textAlignVertical: 'center',
            },
          }}
          useNativeAndroidPickerStyle={false} 
        />
      </ScrollView>
    </DropDownContainer>
  );
}
