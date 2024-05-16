import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { AuthStackProps } from '../../navigators/authStack'
import { Block } from 'galio-framework';
import { Images, Theme, Utils } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';

type OnBoardingProps = AuthStackProps<"onBoarding">;


const ImageSlider = ({ item }: { item: any }) => {
    return (
        <Block>
            <Image source={item}
                style={{ height: Utils.height / 2.3, width: Utils.width / 1.1, resizeMode: "contain" }} />
        </Block>
    )
}

export default function OnBoarding(props: OnBoardingProps) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>i am RItika</Text>
                </View>
                <View style={styles.body}>
                    <ScrollView style={{ flex: 1 }} horizontal snapToEnd={true} pagingEnabled
                        showsHorizontalScrollIndicator={false}>
                        {Object.values(Images.OnBoarding).map((item, index) => (
                            <ImageSlider key={index} item={item} />
                        ))}
                    </ScrollView>

                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        paddingHorizontal: "4%",
        paddingVertical: "4%",
        backgroundColor: Theme.COLORS.WHITE
    },
    text: {

    },
    header: {
        flex: 1
    },
    body: {
        flex: 9,
        justifyContent: "center",
        alignItems: "center",
    }
})