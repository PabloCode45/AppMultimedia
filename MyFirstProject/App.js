// import React, {useState} from 'react';
// import {Button, Text, TextInput, View} from 'react-native';

// export default function App () {
//   const [age, setAge] = useState(1);

//   const getFullName = (firstName, secondName) => {
//     return firstName + " " + secondName;

//   }

//   function messageAge() {
//     const message = "";
//     if (age < 18) {
//       return (<Text>
//         {age} años? Qué joven eres!
//       </Text>)
//     } else if (age >= 18 && age <= 20){
//   return (
//     <Text>
//     {age} años? Qué buena edad!
//     </Text>
//     )
//   } else {
//     return (
//       <Text>
//       {age} años? Qué viejo eres!
//       </Text>
//       )
//   }

//   }

//   const name = "Pablo"
  
//   return (
//     <View>
//       {/* <Text>Hola, soy {name}.</Text>  */}

//       <Text>Hola, Mi nombre es {getFullName("Pablo", "Aguilar")}!</Text>

//       {/* <Text>Hola, me llamo...</Text> */}

//       <TextInput
//         placeholder="Escribe aquí tu edad"
//         onChangeText={age => setAge(age)} />

//       <Text>{messageAge()}</Text>

//       <Button title="Finalizar"></Button>
//       <Text>Gracias por rellenar el formulario!</Text>
//       </View>

//   );


// }

// import React, { useState } from "react";
// import { View, Switch, Image, Text } from "react-native";

// const App = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//   return (
//     <View>
//       <Switch
//         trackColor={{ false: "#767577", true: "green" }}
//         thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       />
//       {isEnabled ? <Image style={{width: 50, height: 50}} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/> : <Text>Imagen no disponible</Text> }
//     </View>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { Text, Button, View, TextInput } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function miFuncionHomeScreen({ navigation}) {


//   const [enviar, setEnviar] = useState('');

//   return(
//     <View>
//       <Text>Home Screen</Text>
//       <Button title="Go to Details" onPress={() => navigation.navigate('Details',{userName : 'Pablo', pati : enviar})}/>
//       <TextInput
//          placeholder="Escribe aquí tu edad"
//          onChangeText={enviar => setEnviar(enviar)} />
//     </View>
//   )

// }

// function miFuncionDetailsScreen({ navigation, route }) {
//   const { userName } = route.params;
//   const { pati } = route.params;
  

//   return(
//     <View>
//       <Text>Details Screen</Text>
//       <Text>Hola {userName}</Text>
//       <Text>Tu edad es {pati}</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
//     </View>
//   )

// }

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={miFuncionHomeScreen}  />
//         <Stack.Screen name="Details" component={miFuncionDetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>


//   )

// }

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function HomeScreen() {
//   return (
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//       let iconName;
//       if (route.name === 'Feed') {
//         iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
//   } else if (route.name === 'Messages') {
//   iconName = focused ? 'paw' : 'paw-outline';
//   }
  
//   return <Ionicons name={iconName} size={size} color={color} />;
//   },
//   tabBarActiveTintColor: 'tomato',
//   tabBarInactiveTintColor: 'grey',
//   })}
//   >
//   <Tab.Screen name="Feed" component={FeedScreen} />
//   <Tab.Screen name="Messages" component={MessagesScreen} />
//   </Tab.Navigator>
//   );
//  }

//  function FeedScreen() {
//   return(
//     <View>
//       <Text>Estoy en feed</Text>
//     </View>

//   );


//  }

//  function MessagesScreen() {
//   return(
//     <View>
//       <Text>Estoy en mensajes</Text>
//     </View>

//   );


//  }

//  export default function App() {

//   return(
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="home"
//           component={HomeScreen}
//           options={{headerShown : false}}
//         />
//         {/* <Stack.Screen name="Profile" component={ProfileScreen}/>
//         <Stack.Screen name="Settings" component={SettingsScreen}/> */}
//       </Stack.Navigator>
//     </NavigationContainer>


//   );

//  }

 import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Feather';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const personas  =  [
                {edad: '34', nombre: 'Antonio Morlanes', sexo: 'Varón'},
                {edad: '29', nombre: 'Margarita Fuentes', sexo: 'Mujer'},
                {edad: '47', nombre: 'Manuel Machado', sexo: 'Varón'},
                ];


function HomeStack() {
  return (

    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} 
      options={{
        headerTitle : 'Listado de usuarios',
        headerTintColor : '#FFFFFF',
        headerStyle: {
          backgroundColor : '#FF2D00',
        }
          
        }}/>
      <Stack.Screen name="info" component={InformacionScreen} options={{
        headerTitle : 'Información',
        headerTintColor : '#FFFFFF',
        headerStyle: {
          backgroundColor : '#FF2D00',
        }
          
        }}/>
      <Stack.Screen name="persona" component={PersonaScreen} options={{
        headerTitle : 'Detalles de usuario',
        headerTintColor : '#FFFFFF',
        headerStyle: {
          backgroundColor : '#FF2D00',
        }
          
        }}/>
    </Stack.Navigator>
  );
 }

 function HomeScreen({navigation}) {
  return(
    <View>
      <FlatList 
      data={personas}
      renderItem =  {({ item  }) => (<TouchableOpacity onPress={() => navigation.navigate('persona', {user : item})}><Text>{item.nombre}</Text></TouchableOpacity>)}>
      </FlatList>
    </View>

  );


 }

 function PersonaScreen({route}){
   console.log(route);
  const nombre = route.params.user.nombre;
  const edad = route.params.user.edad;
  const sexo = route.params.user.sexo;

  return(
    <View>
      <Text>
        Tu nombre es {nombre}.
      </Text>
      <Text>
        Tu edad es {edad}.
      </Text>
      <Text>
        Tu sexo es {sexo}.
      </Text>
    </View>


  );


 }

 function InformacionScreen() {
  return(
    <View>
      <Text>Estoy en informacion</Text>
    </View>

  );


 }

 export default function App() {

  return(
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Listado') {
                iconName = focused ? 'link' : 'link-2';
              } else if (route.name === 'Información') {
                iconName = focused ? 'message-circle' : 'message-square';
              }
              
              return <Icons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey',
          })}>
    <Tab.Screen name="Listado" component={HomeStack} options={{headerShown : false}}/>
    <Tab.Screen name="Información" component={InformacionScreen} />
    </Tab.Navigator>
    </NavigationContainer>


  );

 }