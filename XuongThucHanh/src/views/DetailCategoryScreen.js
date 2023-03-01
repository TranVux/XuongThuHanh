import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import ProductItem from '../components/Products/ProductItem';
import { ProductList } from '../constants/DATA';
import { MasonryFlashList } from '@shopify/flash-list';

const DetailCategoryScreen = ({ route }) => {

    const { params } = route;

    const handleRenderItemProd = ({ item }) => {

        if (item.type === "banner") {
            return (
                <ProductItem type="banner" data={item} />
            )
        }

        return (
            <ProductItem
                type="product"
                data={item} />
        )
    }

    const handleGetIdProd = (item, index) => index;

    return (
        <SafeAreaView style={styles.container}>
            <MasonryFlashList
                showsVerticalScrollIndicator={false}
                data={ProductList}
                numColumns={2}
                renderItem={handleRenderItemProd}
                estimatedItemSize={164}
                // ItemSeparatorComponent={() => <View style={{ marginVertical: 5 }} />}
                keyExtractor={handleGetIdProd} />
        </SafeAreaView>
    )
}

export default DetailCategoryScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingTop: 16,
        flex: 1,
        paddingHorizontal: 2
    }
})