import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Historic from '../screens/Historic';
import Questions from '../screens/Questions';

const {Navigator,Screen} = createNativeStackNavigator()

export const AppRoutes = () => {
    return(
        <Navigator
            initialRouteName={"Home"}
            screenOptions={{
                headerShown:false
            }}
        >
            <Screen
                name="Historic"
                component={Historic}
            />
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Questions"
                component={Questions}
            />
        </Navigator>
    )
}