import React from 'react';
import {
     View,
     FlatList,
     StyleSheet,
     Text,
     StatusBar,
     Image,
     TouchableOpacity,
     TouchableHighlight
} from 'react-native';

const DATA = [
     {
          id: '1',
          title: 'Strawberry',
          title_mini: '1kg',
          money: '$24.0',
          image: 'https://anhdep123.com/wp-content/uploads/2020/11/anh-qua-dau-tay-chan-thuc-nhat.jpg'
     },
     {
          id: '2',
          title: 'Avocado Bowl',
          title_mini: '1kg',
          money: '$24.0',
          image: 'https://anhdep123.com/wp-content/uploads/2021/03/hinh-anh-qua-bo-1.jpg'
     },
     {
          id: '3',
          title: 'Orginal Banana',
          title_mini: '1kg',
          money: '$24.0',
          image: 'https://anhdep123.com/wp-content/uploads/2020/11/hinh-anh-qua-chuoi-tieu.jpg'
     },
];

const Item = ({ DATA }) => (
     <TouchableOpacity onPress={() => console.log('Press item')}>
          <View style={styles.item}>
               <Image style={styles.img} source={{ uri: DATA.image }} />
               <Text style={styles.title}>{DATA.title}</Text>
               <Text style={styles.title_mini}>{DATA.title_mini}</Text>
               <View style={styles.add}>
                    <Text style={styles.txtdola}>{DATA.money}</Text>
                    <TouchableHighlight onPress={() => console.log('Add product')}>
                         <Image style={styles.imgadd} source={require('/Documents/XuongThucHanh/Git/XuongThucHanh/XuongThucHanh/assets/img/add_green.png')} />
                    </TouchableHighlight>
               </View>
          </View>
     </TouchableOpacity>
);

const Explore = () => {
     return (
          <View style={styles.container}>
               <FlatList
                    horizontal
                    data={DATA}
                    renderItem={({ item }) => <Item DATA={item} />}
                    keyExtractor={item => item.id}
               />
          </View>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
     },
     item: {
          height: 189,
          width: 150,
          backgroundColor: '#FFFFFF',
          padding: 16,
          marginHorizontal: 16,
          borderRadius: 15
     },
     img: {
          width: 89,
          height: 72.09,
          alignSelf: 'center'
     },
     title: {
          fontFamily: 'Klarna Text',
          fontWeight: '700',
          fontSize: 15,
          color: '#6D3805'
     },
     title_mini: {
          fontFamily: 'Klarna Text',
          fontWeight: '400',
          fontSize: 12,
          color: '#929292',
     },
     add: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 11
     },
     txtdola: {
          fontFamily: 'Klarna Text',
          fontWeight: '700',
          fontSize: 18,
          color: '#FF5E00'
     },
});

export default Explore;