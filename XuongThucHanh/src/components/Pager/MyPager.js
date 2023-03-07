import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, Animated, Dimensions } from 'react-native';
import PagerView from 'react-native-pager-view';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

// Test component

const MyPager = ({ scroll = true, initPage = 0 }) => {

    const [currentPage, setCurrentPage] = useState(initPage);
    const [widthCurrentPage, setWidthCurrentPage] = useState(0);

    const viewPagerRef = useRef();
    const offsetAnimation = useRef(new Animated.Value(0)).current;

    const handleChangePage = (index) => {
        viewPagerRef.current.setPage(index);
    }

    const handleOnPageScroll = (e) => {
        const index = e.nativeEvent.position;
        const offset = e.nativeEvent.offset;
        Animated.spring(offsetAnimation, {
            toValue: (index * (width / 5)),
            useNativeDriver: true
        }).start()
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <ScrollView
                    contentContainerStyle={{ width: "100%" }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicato={false}>
                    <View style={[styles.tabView,
                    { justifyContent: scroll ? "flex-start" : "space-around", flex: scroll ? 0 : 1 }
                    ]}>
                        <Pressable style={[styles.tabViewItem,]} onPress={() => { handleChangePage(0) }}>
                            <Text>FirstPage</Text>
                        </Pressable >
                        <Pressable style={[styles.tabViewItem,]} onPress={() => { handleChangePage(1) }}>
                            <Text>SecondPage1</Text>
                        </Pressable>
                        <Pressable style={[styles.tabViewItem,]} onPress={() => { handleChangePage(2) }}>
                            <Text>SecondPage2</Text>
                        </Pressable>
                        <Pressable style={[styles.tabViewItem,]} onPress={() => { handleChangePage(3) }}>
                            <Text>SecondPage2</Text>
                        </Pressable>
                        <Pressable style={[styles.tabViewItem,]} onPress={() => { handleChangePage(4) }}>
                            <Text>SecondPage2</Text>
                        </Pressable>
                    </View>
                </ScrollView>

                {/* indicator */}
                <Animated.View style={[styles.indicator, {
                    transform: [{ translateX: offsetAnimation }]
                }]} />
            </View>


            <PagerView style={styles.pagerView}
                initialPage={initPage}
                ref={viewPagerRef}
                onPageScroll={handleOnPageScroll}
            >
                <View key="1" style={{ backgroundColor: "#ccc" }}>
                    <Text>First page</Text>
                </View>
                <View key="2" style={{ backgroundColor: "#c3c3c3" }}>
                    <Text>Second page</Text>
                </View>
                <View key="3" style={{ backgroundColor: "#c9c9c9" }}>
                    <Text>Third page</Text>
                </View>
                <View key="4" style={{ backgroundColor: "#c9c9c9" }}>
                    <Text>Third page</Text>
                </View>
                <View key="5" style={{ backgroundColor: "#c9c9c9" }}>
                    <Text>Third page</Text>
                </View>
            </PagerView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    },

    tabView: {
        height: 45,
        width: "100%",
        flexDirection: 'row',
        alignItems: "center",
    },
    tabViewItem: {
        marginHorizontal: 10,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    indicator: {
        backgroundColor: "#000",
        height: 3,
        width: 50,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        position: "absolute",
        bottom: 0,
        left: width / 5 / 2 - 25
    },
});

export default MyPager;