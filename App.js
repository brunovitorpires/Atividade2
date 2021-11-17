import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login  from './view/Login';
import ListarContato from './view/ListarContato';
import CadastroUser from './view/CadastroUser';
import CadastroContato from './view/CadastroContato';
import AlterarCadastro from './view/AlterarCadastro';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListarContato">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="ListarContato" component={ListarContato}/>
        <Stack.Screen name="CadastroUser" component={CadastroUser}/>
        <Stack.Screen name="CadastroContato" component={CadastroContato}/>
        <Stack.Screen name="AlterarCadastro" component={AlterarCadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}