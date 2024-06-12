import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { AuthStackProps } from '../../navigators/authStack'
import { Block } from 'galio-framework';
import { Images, Theme, Utils } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OnboardFlow } from 'react-native-onboard';

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
                <OnboardFlow
                    pages={[
                        {
                            title: 'Start Learning New Skills',
                            subtitle: 'Learn almost any skill from a comport of your home with our app',
                            imageUri: Image.resolveAssetSource(Images.OnBoarding.teacher).uri,
                            titleStyle: styles.text,
                            subtitleStyle: styles.description
                        },
                        {
                            title: 'Learn From Anywhere',
                            subtitle: `You can Lean from anywhere you want to Learn about all are here !`,
                            imageUri: Image.resolveAssetSource(Images.OnBoarding.student).uri,
                            titleStyle: styles.text,
                            subtitleStyle: styles.description
                        },
                        {
                            title: 'Make Your Shedule Perfect',
                            subtitle: 'Mange your time by your own and learn any time you want!',
                            imageUri: Image.resolveAssetSource(Images.OnBoarding.women).uri,
                            titleStyle: styles.text,
                            subtitleStyle: styles.description
                        }
                    ]}
                    style={{ backgroundColor: Theme.COLORS.PRIMARY }}
                    type={'fullscreen'}
                />
                {/*<View style={styles.header}>
                    <Text>i am RItika</Text>
                </View>
                <View style={styles.body}>
                    <ScrollView style={{ flex: 1 }} horizontal snapToEnd={true} pagingEnabled
                        showsHorizontalScrollIndicator={false}>
                        {Object.values(Images.OnBoarding).map((item, index) => (
                            <ImageSlider key={index} item={item} />
                        ))}
                    </ScrollView>

                    </View>*/}
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
        color: Theme.COLORS.WHITE,
        fontSize: 22,
        fontFamily: Theme.FONTFAMILY.BOLD
    },
    description: {
        fontSize: 14,
        color: Theme.COLORS.WHITE,
        paddingHorizontal:"8%",
        fontFamily:Theme.FONTFAMILY.REGULAR
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