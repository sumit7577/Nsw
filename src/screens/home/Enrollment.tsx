import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { Images, Theme, Utils } from '../../constants'
import { Block, Button, Icon } from 'galio-framework'
import { SafeAreaView } from 'react-native-safe-area-context'
import RenderHtml from 'react-native-render-html';
import { HomeProps, TabProps, TabScreenProps } from '../../navigators/bottomNavigator'
import { useQuery } from 'react-query'
import { ApiController } from '../../networking'
import { AppLoader } from '../../components'

type EnrollmentTypes = HomeProps<"Enrollment">;

export default function Enrollment(props: EnrollmentTypes) {
    const { navigation, route } = props;
    const { data, isLoading } = useQuery({
        queryFn: () => {
            return ApiController.singleCourse(route.params.id)
        },
        queryKey: ["courseDetail", route.params.id]
    })
    const htmlContent = data?.data.content ?? "";
    const [isAtEnd, setIsAtEnd] = useState(false);
    const scrollRef = useRef<ScrollView>(null);

    const handleScroll = (event: { nativeEvent: { layoutMeasurement: any; contentOffset: any; contentSize: any } }) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        const isEnd = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
        setIsAtEnd(isEnd);
    };

    const scrollToBottom = () => {
        if (scrollRef.current != null) {
            scrollRef?.current.scrollToEnd({ animated: true });
        }

    };
    const proceedToPayment = () => {
        navigation.navigate("Batch", {
            course: data!!
        })
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <AppLoader show={isLoading} />
                <View style={styles.header}>
                    <Block row space='between' middle>
                        <Block height={30} width={30} middle style={{ backgroundColor: Theme.COLORS.WHITE, borderRadius: 15 }}>
                            <Icon family="Entypo" name="chevron-left" size={22} color={Theme.COLORS.MUTED} onPress={() => {
                                navigation.goBack()
                            }} />
                        </Block>
                        <Block style={{ backgroundColor: Theme.COLORS.WHITE, padding: 4, borderRadius: 8 }}>
                            <Image source={Images.Home.logo} style={{ height: 40, width: Utils.width / 2.5 }} resizeMode="contain" />
                        </Block>
                    </Block>

                    <Block middle style={{ marginTop: "4%" }}>
                        <Image source={Images.Home.enrollment} style={{ height: Utils.height / 6, width: Utils.width / 1.2, resizeMode: "contain" }} />
                    </Block>
                </View>
                <View style={styles.body}>
                    <ScrollView ref={scrollRef} onScroll={handleScroll}
                        showsVerticalScrollIndicator={false}>
                        <RenderHtml
                            contentWidth={Utils.width}
                            source={{ html: htmlContent }}
                        />
                    </ScrollView>
                    <Block middle>
                        {!isAtEnd ? <Button color={Theme.COLORS.WHITE} round onPress={scrollToBottom}>
                            <Text style={[styles.text, { fontSize: 12, color: Theme.COLORS.PRIMARY }]}>More Information</Text>
                        </Button> :
                            <Button color={Theme.COLORS.WHITE} round onPress={proceedToPayment}>
                                <Text style={[styles.text, { fontSize: 12 }]}>Procced to Payment</Text>
                            </Button>
                        }
                    </Block>
                </View>
                <View style={styles.footer}>

                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: Theme.COLORS.PRIMARY,
        paddingHorizontal: "4%",
        paddingVertical: "4%"
    },
    header: {

    },
    body: {
        flex: 8

    },
    footer: {
        flex: 1

    },
    text: {
        fontFamily: Theme.FONTFAMILY.BOLD,
        fontSize: 18,
        color: Theme.COLORS.BLACK
    }
})