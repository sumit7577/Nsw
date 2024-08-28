import { View, Text, StyleSheet, ScrollView, Image, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useRef, useState } from 'react'
import { AuthStackProps } from '../../navigators/authStack'
import { Block, Button } from 'galio-framework';
import { Images, Theme, Utils } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OnboardFlow } from 'react-native-onboard';
import { PageIndicator } from 'react-native-page-indicator';

type OnBoardingProps = AuthStackProps<"onBoarding">;

const scrollData = [
    {
        title: <Text style={{
            color: Theme.COLORS.WHITE,
            fontSize: 20,
            fontFamily: Theme.FONTFAMILY.BOLD
        }}>Start Learning <Text style={{ color: Theme.COLORS.BLACK }}>New Skills</Text></Text>,
        image: <Image source={Images.OnBoarding.student} style={{ height: Utils.height / 2.3, width: Utils.width / 1.1, resizeMode: "contain" }} />,
        description: "Learn almost any skill from a comport of your home with our app"
    },
    {
        title: <Text style={{
            color: Theme.COLORS.WHITE,
            fontSize: 20,
            fontFamily: Theme.FONTFAMILY.BOLD
        }}>Learn From <Text style={{ color: Theme.COLORS.BLACK }}>Anywhere</Text></Text>,
        image: <Image source={Images.OnBoarding.teacher} style={{ height: Utils.height / 2.3, width: Utils.width / 1.1, resizeMode: "contain" }} />,
        description: "You can Lean from anywhere you want to Learn about all are here!"
    },
    {
        title: <Text style={{
            color: Theme.COLORS.WHITE,
            fontSize: 20,
            fontFamily: Theme.FONTFAMILY.BOLD
        }}>Make Your Shedule <Text style={{ color: Theme.COLORS.BLACK }}>Perfect</Text></Text>,
        image: <Image source={Images.OnBoarding.women} style={{ height: Utils.height / 2.3, width: Utils.width / 1.1, resizeMode: "contain" }} />,
        description: "Mange your time by your own and learn any time you want!",
    }
]


const ImageSlider = ({ item }: { item: typeof scrollData[0] }) => {
    return (
        <Block style={{ alignItems: "center" }} gap={14}>
            {item.image}
            {item.title}
            <Text style={[styles.text, { maxWidth: Utils.width / 1.4, textAlign: "center", fontSize: 13 }]}>{item.description}</Text>
        </Block>
    )
}


export default function OnBoarding(props: OnBoardingProps) {
    const { navigation } = props;
    const [currentPage, setCurrentPage] = useState(0);
    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / Utils.width);
        setCurrentPage(index);
    };
    const scrollRef = useRef<ScrollView>(null);

    const onNext = () => {
        if (currentPage < (scrollData.length - 1)) {
            const nextPage = currentPage + 1;
            scrollRef.current?.scrollTo({ x: nextPage * Utils.width / 1.1, y: 0, animated: true });
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>

                </View>
                <View style={styles.body}>
                    <Block>
                        <ScrollView horizontal snapToEnd={true}
                            ref={scrollRef}
                            onScroll={onScroll}
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}>
                            {scrollData.map((item, index) => (
                                <ImageSlider key={index} item={item} />
                            ))}
                        </ScrollView>
                        <Block middle flex={8}>
                            <PageIndicator count={scrollData.length} current={currentPage} variant="morse" color={Theme.COLORS.WHITE} />
                        </Block>

                        <Block middle flex={10}>
                            {currentPage === scrollData.length - 1 ?
                                <Block gap={8}>
                                    <Button round color={Theme.COLORS.WHITE} style={{ width: Utils.width / 1.5 }} onPress={() => {
                                        navigation.navigate("login")
                                    }}>
                                        <Text style={[styles.text, { color: Theme.COLORS.PRIMARY, fontSize: 14 }]}>Login</Text>
                                    </Button>
                                    <Button round color={Theme.COLORS.PRIMARY} onPress={() => {
                                        navigation.navigate("register")
                                    }}
                                        style={{ width: Utils.width / 1.5, borderWidth: 2, borderColor: Theme.COLORS.WHITE }}>
                                        <Text style={[styles.text, { color: Theme.COLORS.WHITE, fontSize: 14 }]}>SignUp</Text>
                                    </Button>
                                </Block> :
                                <Button round color={Theme.COLORS.WHITE} onPress={onNext}>
                                    <Text style={[styles.text, { color: Theme.COLORS.PRIMARY, fontSize: 14 }]}>Next</Text>
                                </Button>
                            }
                        </Block>
                    </Block>
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
        backgroundColor: Theme.COLORS.PRIMARY
    },
    text: {
        color: Theme.COLORS.WHITE,
        fontSize: 22,
        fontFamily: Theme.FONTFAMILY.BOLD
    },
    description: {
        fontSize: 14,
        color: Theme.COLORS.WHITE,
        paddingHorizontal: "8%",
        fontFamily: Theme.FONTFAMILY.REGULAR
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