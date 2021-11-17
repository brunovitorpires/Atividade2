import React, {useState, useEffect} from "react"
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  Button,
  ScrollView,
  View,
} from "native-base"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


export const ListarContato = () => {
    const navigation = useNavigation(); 

    const [dados,setDados] = useState([]);

    useEffect (()=> {

      function resgatarDados(){
        axios('http://professornilson.com/testeservico/clientes')
        .then(function (response) {
          setDados(response.data);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
  });
      }
      resgatarDados();

    },[])

  return (
    <Box
      w={{
        base: "100%",
        md: "25%",
      }}
    >
      <Heading fontSize="xl" p="4" >
        Contatos
      </Heading>
      <FlatList
        data={dados}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.nome}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.cpf}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {item.email}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
            <Button size="sm" variant="subtle" marginTop ="5px" onPress={() => navigation.navigate('CadastroContato')}>Adicionar</Button>

    </Box>
   
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex="1" >
        <ListarContato />
      </Center>
    </NativeBaseProvider>
  )
}