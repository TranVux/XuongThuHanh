import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../assets/Colors';
import CategoryItem from '../components/Products/CategoryItem'
import { MasonryFlashList } from '@shopify/flash-list'
import { IconSearch } from '../../assets/images/svg';
import { useDispatch, useSelector } from 'react-redux';

const ExploreCategoryScreen = () => {

    const dispatch = useDispatch();
    const dataCategory = useSelector(state => state.categories);

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
                    <IconSearch />
                    <TextInput style={styles.textInput} placeholder="Search" placeholderTextColor={Colors.placeholder} cursorColor={Colors.text} />
                </View>
            </View>
            <View style={styles.categoryContainer}>
                <MasonryFlashList
                    showsVerticalScrollIndicator={false}
                    data={dataCategory}
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

export default ExploreCategoryScreen

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
    categoryContainer: {
        flex: 1,
        marginTop: 20,
    }
})