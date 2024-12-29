import React from "react";
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ContainerBody, InputContainer, LogoContainer } from "./styles";
import BatLogo from "@components/BatLogo";
import { BatButton } from "@components/BatButton";


export default function Home(){
    return(
        <ContainerBody>
            
            <LogoContainer>
                <BatLogo/>
            </LogoContainer>
            
            <InputContainer>
                
                <BatButton/>
            </InputContainer>

            <StatusBar style="auto" />
        </ContainerBody>
    )
}

