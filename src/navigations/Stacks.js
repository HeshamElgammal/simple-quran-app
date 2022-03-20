import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from "../screens/Home"
import Category from "../screens/Category"
import QuranList from "../screens/quranList"
import Surah from '../screens/Surah'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
const Stacks = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' headerMode='none'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="category" component={Category} />
                <Stack.Screen name="QuranList" component={QuranList}/>
                <Stack.Screen name="surah" component={Surah}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Stacks

const styles = StyleSheet.create({})