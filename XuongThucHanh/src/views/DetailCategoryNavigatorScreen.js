import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DATA } from '../constants/DATA';
import DetailCategoryScreen from './DetailCategoryScreen';
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconEntypo from 'react-native-vector-icons/Entypo'
import { Colors } from '../constants/Color';

const Tab = createMaterialTopTabNavigator();

const DetailCategoryNavigatorScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable>
                    <IconIonicons name='chevron-back' color={Colors.primaryColor} size={25} />
                </Pressable>
                <Text style={styles.textHeader}>Categories</Text>
                <View style={{ width: 25 }} />
            </View>
            <View style={styles.searchView}>
                <IconEntypo style={styles.iconSearch} name='magnifying-glass' size={25} color={Colors.placeholder} />
                <TextInput style={styles.textInput} placeholder="Search" placeholderTextColor={Colors.placeholder} cursorColor={Colors.text} />
            </View>

            <Tab.Navigator
                screenOptions={{
                    tabBarScrollEnabled: true,
                    tabBarItemStyle: {
                        minWidth: 65,
                        width: "auto"
                    },
                    tabBarLabelStyle: {
                        textTransform: "capitalize",
                        fontWeight: "400",
                        fontSize: 20,
                    },
                    tabBarActiveTintColor: Colors.text,
                    tabBarInactiveTintColor: Colors.placeholder,
                    tabBarIndicatorStyle: {
                        borderColor: Colors.primaryColor,
                        borderRadius: 10,
                        borderBottomWidth: 3
                    },
                    tabBarStyle: {
                        height: 50,
                        elevation: 0,
                    },
                    tabBarPressColor: "transparent"
                }}
            >
                {
                    DATA.map(item => {
                        return (
                            <Tab.Screen
                                key={item.name}
                                name={item.name}
                                initialParams={{ name: item.name }}
                                component={DetailCategoryScreen}
                            />
                        )
                    })
                }
            </Tab.Navigator>
        </SafeAreaView>
    )
}

export default DetailCategoryNavigatorScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 17,
        backgroundColor: "#fff"
    },
    header: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    textHeader: {
        fontWeight: "700",
        fontSize: 24,
        color: Colors.primaryColor,
        marginStart: 5
    },
    searchView: {
        marginTop: 18,
        alignItems: "center",
        flexDirection: "row",
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "#fff",
        backgroundColor: "#F3F3F3",
        paddingStart: 40,
        flex: 1
    },
    iconSearch: {
        position: "absolute",
        start: 13,
        zIndex: 10,
        top: 13
    },
})