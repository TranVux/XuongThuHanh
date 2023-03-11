import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../assets/Colors';
import CategoryItem from '../components/Products/CategoryItem';
import Spacing from '../components/Spacing';
import ProductItem from '../components/Products/ProductItem';
import {IconLocation, IconSearch} from '../../assets/images/svg';
import {useSelector} from 'react-redux';

const ShopScreen = (props) => {
  const products = useSelector(state => state.products);
  const categories = useSelector(state => state.categories);

  const handleGetIdCategory = item => item._id;

  const handleRenderItemCategory = ({item}) => (
    <CategoryItem style={{width: 100, height: 134, margin: 0}} data={item} />
  );

  const handleRenderItemProd = ({item}) => {
    if (item.type) {
      return <></>;
    }
    return <ProductItem style={{width: 150}} type="product" data={item} />;
  };
  const handleGetIdProd = item => item.name;

  return (
    <SafeAreaView style={{flex: 1, padding: 16, backgroundColor: '#fff'}}>
      <View style={styles.header}>
        <IconLocation />
        <Text style={styles.textHeader}>Lungangen</Text>
      </View>
      <View style={styles.searchView}>
        <IconSearch />
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor={Colors.placeholder}
          cursorColor={Colors.text}
        />
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryHeader}>
          <Text style={styles.textCategory}>Categories</Text>
          <Pressable>
            <Text style={styles.textButtonSeeAll}>See All</Text>
          </Pressable>
        </View>
        <View style={styles.categoryContent}>
          <FlatList
            ItemSeparatorComponent={Spacing}
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={handleRenderItemCategory}
            horizontal={true}
            keyExtractor={handleGetIdCategory}
          />
        </View>
      </View>
      <View style={styles.popularDeals}>
        <View style={styles.categoryHeader}>
          <Text style={styles.textCategory}>Popular deals</Text>
          <Pressable>
            <Text style={styles.textButtonSeeAll}>See All</Text>
          </Pressable>
        </View>
        <View style={styles.popularDealsContent}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={products}
            renderItem={handleRenderItemProd}
            horizontal={true}
            keyExtractor={handleGetIdProd}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textHeader: {
    fontWeight: '700',
    fontSize: 24,
    color: Colors.primaryColor,
    marginStart: 5,
  },
  searchView: {
    marginTop: 18,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#fff',
    backgroundColor: '#F3F3F3',
    paddingStart: 10,
  },
  textInput: {
    // flex: 1
    paddingStart: 10,
    flex: 1,
  },
  categoryContainer: {
    marginTop: 30,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 13,
  },
  textCategory: {
    fontWeight: '700',
    color: Colors.text,
    fontSize: 22,
  },
  textButtonSeeAll: {
    color: Colors.primaryColor,
    fontWeight: '400',
    fontSize: 18,
  },
  categoryContent: {
    width: '100%',
  },
  popularDeals: {
    marginVertical: 40,
  },
  popularDealsContent: {},
});
