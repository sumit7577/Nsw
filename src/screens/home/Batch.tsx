import { View, Text, StyleSheet, Image, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Block, Button, Icon } from 'galio-framework'
import { Images, Theme, Utils } from '../../constants'
import { TabProps } from '../../navigators/bottomNavigator'
import { QueryCache, useQuery } from 'react-query'
import { AppLoader, AppPager } from '../../components'
import { ApiController } from '../../networking'
import { UnpaidCourse } from '../../networking/resp-type'
import { chunk } from 'lodash'
import { PageIndicator } from 'react-native-page-indicator'




const ScrollBarItem = (props: { data: UnpaidCourse[] }) => {
    const { data } = props;

    return (
        <Block space="between" style={{}} gap={10}>
            {data.map((item, index) => {
                const startTime = item.teaching_time_start && new Date(item.teaching_time_start).getHours()
                const endTime = item.teaching_time_end && new Date(item.teaching_time_end).getHours()
                return (
                    <Block row space='between' middle key={index}>
                        {index === 1 &&
                            <Block style={{ width: "50%" }} middle>
                                <Image source={Images.Home.course1} style={{ height: 140, width: 120 }} resizeMode="cover" />
                            </Block>
                        }
                        <Block style={{ backgroundColor: Theme.COLORS.WHITE, padding: "3%", paddingHorizontal: "8%", borderRadius: 8, top: index === 1 ? -15 : 15 }} middle>
                            <Image src={item.image} style={{ height: 80, width: 100 }} resizeMode="contain" />
                            <Text style={[styles.text, { color: Theme.COLORS.BLACK, fontSize: 12 }]}>Starting from- {Utils.dateFormatter(item.starting_date, "en", {
                                day: "numeric",
                                month: "short"
                            })}
                            </Text>
                            <Text style={[styles.text, { color: Theme.COLORS.BLACK, fontSize: 10, fontFamily: Theme.FONTFAMILY.BOLD }]}>Time : {Utils.dateFormatter(item.teaching_time_start, "en", {
                                weekday: "short"
                            })} to {Utils.dateFormatter(item.teaching_time_end, "en", {
                                weekday: "long"
                            })} {startTime}-{endTime}{'\n'} Weekend Batch - 2hrs
                            </Text>
                        </Block>

                        {index === 0 && <Block style={{ width: "50%" }} middle>
                            <Image source={Images.Home.course2} style={{ height: 100, width: 100 }} resizeMode="contain" />
                        </Block>
                        }

                    </Block>
                )
            })}
        </Block>
    )
}

type BatchProps = TabProps<"Batch">
export default function Batch(props: BatchProps) {
    const { route, navigation } = props;
    const [currentPage, setCurrentPage] = useState(0);
    const { data, isLoading, isError } = useQuery({
        queryFn: ApiController.getCourses,
        queryKey: ["course"]
    })
    const proccedToPayment = () => {
        navigation.navigate("Payment", {
            id: route.params.course.data.id
        })
    }
    const chunkedData = chunk(data?.results, 2);
    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / Utils.width);
        setCurrentPage(index);
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <AppLoader show={isLoading} />
                <View style={styles.header}>
                    <Block row space='between' middle>
                        <Block height={30} width={30} middle style={{ backgroundColor: Theme.COLORS.WHITE, borderRadius: 15 }}>
                            <Icon family="Entypo" name="chevron-left" size={25} color={Theme.COLORS.MUTED} onPress={() => {
                                navigation.goBack()
                            }} />
                        </Block>
                        <Block style={{ backgroundColor: Theme.COLORS.WHITE, padding: 4, borderRadius: 8 }}>
                            <Image source={Images.Home.logo} style={{ height: 40, width: Utils.width / 2.5 }} resizeMode="contain" />
                        </Block>
                    </Block>
                </View>

                <View style={styles.body}>
                    <Block space='between' gap={14}>

                        <FlatList data={chunkedData} horizontal
                            onScroll={onScroll}
                            showsHorizontalScrollIndicator={false} pagingEnabled={true}
                            renderItem={({ item, index, separators }) => (
                                <Block style={{ width: Utils.width / 1.1, height: "100%", padding: "2%" }}>
                                    <ScrollBarItem data={item} key={index} />
                                </Block>

                            )} />
                        <Block middle>
                            <PageIndicator count={chunkedData.length} current={currentPage} variant="beads" />
                        </Block>

                        <Block gap={20}>
                            <Block gap={6}>
                                <Text style={[styles.text, { fontFamily: Theme.FONTFAMILY.BOLD, fontSize: 16 }]}>Fee Structure</Text>
                                <Block style={{ marginLeft: "10%" }} gap={2}>
                                    <Text style={styles.text}>Registration Fees: 25k</Text>
                                    <Text style={styles.text}>you can pay in {route.params.course.installment.length} installments like</Text>
                                    {route.params.course.installment.map((item, index) => (
                                        <Block key={index}>
                                            <Text style={styles.text}>{'\u2022'} Rs. {item.price}</Text>
                                        </Block>
                                    ))}
                                </Block>

                            </Block>
                            <Block center gap={4} style={{
                                backgroundColor: Theme.COLORS.WHITE,
                                paddingHorizontal: "8%", paddingVertical: "2%", borderRadius: 4
                            }}>
                                <Text style={[styles.text, {
                                    fontFamily: Theme.FONTFAMILY.BOLD,
                                    color: Theme.COLORS.BLACK,
                                    fontSize: 10
                                }]}>Early Joiners 3k off</Text>
                                <Image source={Images.Home.booking_offer} style={{ height: 70, width: 70 }} resizeMode="contain" />
                            </Block>

                            <Block middle>
                                <Button color={Theme.COLORS.WHITE} round onPress={proccedToPayment}>
                                    <Text style={[styles.text, {
                                        fontSize: 12, fontFamily: Theme.FONTFAMILY.BOLD,
                                        color: Theme.COLORS.BLACK
                                    }]}>Procced to Payment</Text>
                                </Button>
                            </Block>


                        </Block>
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
        paddingVertical: "4%",
    },
    header: {

    },
    body: {
        marginTop: "4%",

    },
    footer: {

    },
    text: {
        fontFamily: Theme.FONTFAMILY.REGULAR,
        fontSize: 14,
        color: Theme.COLORS.WHITE
    }
})