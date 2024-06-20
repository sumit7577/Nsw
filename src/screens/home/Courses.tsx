import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Images, Theme, Utils } from '../../constants'
import { Block, Icon } from 'galio-framework'
import { chunk } from "lodash";


const CourseItem = () => {
    return (
        <TouchableOpacity>
            <Block middle style={{ backgroundColor: Theme.COLORS.WHITE, borderRadius: 8, padding: "3%" }} gap={4}>
                <Text style={[styles.text, { fontSize: 8 }]}>DevOps Training</Text>
                <Image source={Images.Home.devops} style={{ height: 50, width: 65 }} resizeMode="contain" />
            </Block>
        </TouchableOpacity>
    )

}

export default function Courses() {
    const data = Array.from({ length: 8 }, (index) => index)
    const chunkedData = chunk(data, 3);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Block row space='between' middle>
                        <Block height={30} width={30} middle style={{ backgroundColor: Theme.COLORS.WHITE, borderRadius: 15 }}>
                            <Icon family="Entypo" name="chevron-left" size={25} />
                        </Block>
                        <Block style={{ backgroundColor: Theme.COLORS.WHITE, padding: 4, borderRadius: 8 }}>
                            <Image source={Images.Home.logo} style={{ height: 40, width: Utils.width / 2.5 }} resizeMode="contain" />
                        </Block>
                    </Block>
                </View>

                <View style={styles.body}>
                    <Block gap={10}>
                        <Block middle>
                            <Image source={Images.Home.course_screen} style={{ height: Utils.height / 4, width: Utils.width / 1.2, resizeMode: "contain" }} />
                        </Block>

                        <Block>
                            <Text style={[styles.text, { color: Theme.COLORS.WHITE, fontSize: 22 }]}>Trending Courses</Text>
                        </Block>
                        <FlatList data={chunkedData} showsVerticalScrollIndicator={false}
                            renderItem={({ item, index, separators }) => (
                                <Block row space='between' style={{ width: "100%", marginTop: "4%" }} middle>
                                    {item.map((subItem, subIndex) => (
                                        <CourseItem />
                                    ))}
                                </Block>
                            )} />

                        <Block style={{ marginTop: "2%" }}>
                            <Text style={[styles.text, { color: Theme.COLORS.WHITE, fontSize: 22 }]}>More Details</Text>
                        </Block>

                        <Block style={{ backgroundColor: Theme.COLORS.WHITE, padding: "2%", borderRadius: 8 }} gap={2}>
                            <Text style={[styles.text, { color: Theme.COLORS.BLACK, fontSize: 12 }]}>DevOps:</Text>
                            <Text style={[styles.text, { color: Theme.COLORS.BLACK, fontFamily: Theme.FONTFAMILY.REGULAR, fontSize: 10 }]}>DevOps, short for Development and Operations, is a set of practices, cultural philosophies, and tools aimed at improving collaboration, communication, and integration between software developers and IT operations teams.</Text>
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
        backgroundColor: Theme.COLORS.PRIMARY,
        paddingHorizontal: "4%",
        paddingVertical: "4%"
    },
    header: {

    },
    body: {
        marginTop: "10%",
    },
    footer: {

    },
    text: {
        fontFamily: Theme.FONTFAMILY.BOLD,
        fontSize: 18,
        color: Theme.COLORS.BLACK
    }
})