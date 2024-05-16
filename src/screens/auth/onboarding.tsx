import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { AuthStackProps } from '../../navigators/authStack'
import { Block } from 'galio-framework';
import { Images, Theme } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';

type OnBoardingProps = AuthStackProps<"onBoarding">;


const ImageSlider = () => {
    return (
        <Block>
            <Image source={Images.OnBoarding.student} />
        </Block>
    )
}

export default function OnBoarding(props: OnBoardingProps) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>i am header</Text>
                </View>
                <View style={styles.body}>
                    <ImageSlider />
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
    },
    text: {

    },
    header: {
        flex: 1
    },
    body: {
        flex: 1,
        backgroundColor:Theme.COLORS.ACTIVE
    }
})