import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DATA } from '../../constants/DATA';
import DetailCategoryScreen from '../DetailCategoryScreen';
import IconIonicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../../assets/Colors';
import { IconSearch } from '../../../assets/images/svg';

const Tab = createMaterialTopTabNavigator();

const DetailCategoryNavigatorScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => { navigation.goBack() }}>
                    <IconIonicons name='chevron-back' color={Colors.primaryColor} size={25} />
                </Pressable>
                <Text style={styles.textHeader}>Categories</Text>
                <View style={{ width: 25 }} />
            </View>
            <View style={styles.searchView}>
                {/* <IconEntypo style={styles.iconSearch} name='magnifying-glass' size={25} color={Colors.placeholder} /> */}
                <IconSearch />
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
                        backgroundColor: Colors.primaryColor,
                        height: 3,
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
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "#fff",
        backgroundColor: "#F3F3F3",
        paddingStart: 10
    },
    textInput: {
        // flex: 1
        paddingStart: 10,
        flex: 1
    },
})