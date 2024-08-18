import { View, Text, StyleSheet, Animated, useWindowDimensions } from 'react-native'
import React, { PropsWithChildren, useRef } from 'react'
import { PageIndicator } from 'react-native-page-indicator'
import { Utils } from '../constants';

interface PagesProps extends PropsWithChildren {
    pages: number
}

export default function Pager<T>({ pages, children }: PagesProps) {
    const { width, height } = useWindowDimensions();
    const scrollX = useRef(new Animated.Value(0)).current;
    const animatedCurrent = useRef(Animated.divide(scrollX, width)).current;
    console.log(pages)
    return (
        <View style={styles.root}>
            <Animated.ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: true,
                })}
            >
                <View style={[styles.page, { width }]}>
                    {children}
                </View>

            </Animated.ScrollView>
            <View style={styles.pageIndicator}>
                <PageIndicator count={pages} current={animatedCurrent} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        borderWidth: 1,
        borderColor: "yellow",
        height: "100%",
        width: "100%",
    },
    page: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageIndicator: {
        left: 20,
        right: 20,
        bottom: 50,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
})