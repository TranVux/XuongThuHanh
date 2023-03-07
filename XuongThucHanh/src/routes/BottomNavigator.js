import { } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Account, CartScreen, ExploreCategoryScreen, FavouriteEmpty, ShopScreen } from '../screens';
import { Colors } from '../../assets/Colors';
import { IconHome, IconExplore, IconHeart, IconUser, IconCart } from '../../assets/images/svg';
import ExploreNavigatorScreen from '../screens/navigators/ExploreNavigatorScreen';
import AccountNavigatorScreen from '../screens/navigators/AccountNavigatorScreen';
import CartNavigatorScreen from '../screens/navigators/CartNavigatorScreen';

const BottomTab = createBottomTabNavigator();

const handleTabBarIcon = (color, name) => {
    switch (name) {
        case "Shop":
            return <IconHome fill={color} />
        case "Explore":
            return <IconExplore fill={color} />
        case "Cart":
            return <IconCart fill={color} />
        case "Favorite":
            return <IconHeart fill={color} />
        case "Account":
            return <IconUser fill={color} />
        default:
            return <IconHome fill={color} />
    }
}

const BottomNavigator = () => {
    return (
        <BottomTab.Navigator initialRouteName='Shop' screenOptions={
            {
                headerShown: false,
                tabBarActiveTintColor: Colors.primaryColor,
                tabBarInactiveTintColor: Colors.text,
                tabBarStyle: {
                    height: 60,
                    paddingTop: 5,
                    borderTopRightRadius: 25,
                    borderTopLeftRadius: 25,
                    elevation: 20,
                    backgroundColor: "#fff"
                },
                tabBarLabelStyle: {
                    marginBottom: 10
                }
            }
        }>
            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ color }) => handleTabBarIcon(color, "Shop")
                }}
                component={ShopScreen}
                name="Shop"
            />

            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ color }) => handleTabBarIcon(color, "Explore")
                }}
                component={ExploreNavigatorScreen}
                name="Explore"
            />

            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ color }) => handleTabBarIcon(color, "Cart")
                }}
                component={CartNavigatorScreen}
                name="Cart"
            />

            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ color }) => handleTabBarIcon(color, "Favorite")
                }}
                component={FavouriteEmpty}
                name="Favourite"
            />

            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ color }) => handleTabBarIcon(color, "Account")
                }}
                component={AccountNavigatorScreen}
                name="Account"
            />
        </BottomTab.Navigator>
    )
}

export default BottomNavigator