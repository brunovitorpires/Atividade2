import React, {useState} from "react"
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
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


export const Login = () => {
    const navigation = useNavigation(); 

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    const firebaseConfig = {
      apiKey: "AIzaSyBEaNq9mivI8Pjl3-87fAwQDFQjb8DWDh0",
      authDomain: "fir-615ff.firebaseapp.com",
      projectId: "fir-615ff",
      storageBucket: "fir-615ff.appspot.com",
      messagingSenderId: "783468783685",
      appId: "1:783468783685:web:3f35642572360a1d2cdb2c"
    };

    function loginFirebase(){
      const auth = getAuth();
      signInWithEmailAndPassword(auth, login, senha)
        .then((userCredential) => {
          console.log('Conectado! Uhu!!')
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          console.log('Deu Ruim!!!')
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }

    function cadastroUsuarioFirebase(){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, login, senha)
        .then((userCredential) => {
          console.log('Criado! Uhu!!')
    // Signed in
      const user = userCredential.user;
    // ...
  })
        .catch((error) => {
          console.log('Ihh, deu ruim!')
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
  });
    }
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    return (
    <Box
      w={{
        base: "90%",
        md: "25%",
      }}
    >
      <FormControl isRequired>
        <Stack mx="4">
          <Center>
          <Image
            source={{
              uri: "https://i.ibb.co/3pVR8KH/hock.png",
                    }}
               alt="Alternate Text"
              size="lg"
          />
          <Text bold fontSize="xl" mb="5">
            Plataforma Hock
          </Text>
          </Center>
          <FormControl.Label>Login</FormControl.Label>
          <Input type="text" placeholder="insira seu login" 
          value={login}
          onChangeText= {login => setLogin(login)} />
          <FormControl.Label>Senha</FormControl.Label>
          <Input type="password" placeholder="insira sua senha"
          value={senha}
          onChangeText= {senha => setSenha(senha)} />
          <Text>{senha}</Text>
           <FormControl.HelperText>
            Sua senha deve conter 6 caracteres.
          </FormControl.HelperText>
          <Button size="sm" variant="subtle" marginTop ="5px" onPress={() => loginFirebase()}>LOGIN</Button>
          <Button colorScheme="danger" marginTop ="5px" onPress={() => cadastroUsuarioFirebase()}>CADASTRE-SE</Button>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Senha incorreta.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Login />
      </Center>
    </NativeBaseProvider>
  )
}