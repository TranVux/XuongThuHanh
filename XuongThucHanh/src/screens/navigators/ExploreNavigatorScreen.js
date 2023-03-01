import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExploreCategoryScreen from '../ExploreCategoryScreen';
import DetailCategoryNavigatorScreen from './DetailCategoryNavigatorScreen';
import { DetailProductScreen } from '..';

const ExploreNavigatorStack = createNativeStackNavigator();

const ExploreNavigatorScreen = () => {
    return (
        <ExploreNavigatorStack.Navigator screenOptions={{ headerShown: false }}>
            <ExploreNavigatorStack.Screen component={ExploreCategoryScreen} name="ExploreCategoryScreen" />
            <ExploreNavigatorStack.Screen component={DetailCategoryNavigatorScreen} name="DetailCategoryNavigatorScreen" />
            <ExploreNavigatorStack.Screen component={DetailProductScreen} name="DetailProductScreen" />
        </ExploreNavigatorStack.Navigator>
    )
}

export default ExploreNavigatorScreen