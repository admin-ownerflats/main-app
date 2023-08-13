import { StyleSheet } from 'react-native'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './screens/HomeScreen';
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
import WishlistScreen from "./screens/WishlistScreen";
import SignInScreen from "./screens/SignInScreen";
import SearchScreen from "./screens/SearchScreen";
import ListPropertyScreen from './screens/ListPropertyScreen';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        shadowOpacity: 4,
        shadowRadius: 4,
        elevation: 4,
        shadowOffset: {
          width: 0,
          height: -4
        },
        borderTopWidth: 0
      }
    }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarLabelStyle: { color: "grape" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="black" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarLabel: "Wishlist",
          headerShown: false,
          tabBarLabelStyle: { color: "black" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="heart" size={24} color="black" />
            ) : (
              <AntDesign name="hearto" size={24} color="black" />
            ),
        }}
      />

      <Tab.Screen
        name="List Flats"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search Flats",
          headerShown: false,
          tabBarLabelStyle: { color: "black" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="md-list" size={24} color="black" />
            ) : (
              <Ionicons name="ios-list-outline" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Sign In"
        component={SignInScreen}
        options={{
          tabBarLabel: "Sign  In Screen",
          headerShown: false,
          tabBarLabelStyle: { color: "black" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="black" />
            ) : (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/> */}
        <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ListProperty" component={ListPropertyScreen} options={{ headerShown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})

