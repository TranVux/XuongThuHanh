import { Dimensions, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Entypo'
import { Colors } from '../constants/Color'
import Spacing from '../components/Spacing'
import { DATA } from '../constants/DATA'
import CategoryItem from '../components/Products/CategoryItem'
import { MasonryFlashList } from '@shopify/flash-list'

const ExploreScreenCategory = () => {

    const handleGetIdCategory = (item) => item.name;

    const handleRenderItemCategory = ({ item, index }) => {
        return (
            <CategoryItem data={item} />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 0 }}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Categories</Text>
                </View>
                <View style={styles.searchView}>
                    <Icon style={styles.iconSearch} name='magnifying-glass' size={25} color={Colors.placeholder} />
                    <TextInput style={styles.textInput} placeholder="Search" placeholderTextColor={Colors.placeholder} cursorColor={Colors.text} />
                </View>
            </View>
            <View style={styles.categoryContainer}>
                <MasonryFlashList
                    showsVerticalScrollIndicator={false}
                    data={DATA}
                    numColumns={3}
                    renderItem={handleRenderItemCategory}
                    estimatedItemSize={150}
                    ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                    keyExtractor={handleGetIdCategory}
                />
            </View>
        </SafeAreaView>
    )
}

export default ExploreScreenCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 17,
        backgroundColor: "#fff"
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
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
    categoryContainer: {
        flex: 1,
        marginTop: 30,
    }
})