import React, {useState, useEffect} from "react"
import {
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
  Text,
  Image,
  Button,
} from "native-base"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export const CadastroContato = () => {
    const navigation = useNavigation(); 

      function inserirDados(){
        axios.post('http://professornilson.com/testeservico/clientes', {
        nome: getNome,
        telefone: getTelefone,
        cpf: getCpf
        }).then(function (response) {
        console.log(response);
        }).catch(function (error) {
        console.log(error);
        
        });
        
        }

    return (
    <Box
      w={{
        base: "90%",
        md: "25%",
      }}
    >
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>Nome</FormControl.Label>
          <Input type="text" placeholder=""/>
          <FormControl.Label>E-mail</FormControl.Label>
          <Input type="email" placeholder="" />
          <FormControl.Label>Telefone</FormControl.Label>
          <Input type="text" placeholder="" />
          <Button size="sm" variant="subtle" marginTop ="5px" onPress={() => inserirDados}>Salvar</Button>
        </Stack>
      </FormControl>
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <CadastroContato />
      </Center>
    </NativeBaseProvider>
  )
}