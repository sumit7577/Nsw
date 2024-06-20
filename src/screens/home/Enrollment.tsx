import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Images, Theme, Utils } from '../../constants'
import { Block, Icon } from 'galio-framework'
import { SafeAreaView } from 'react-native-safe-area-context'
import RenderHtml from 'react-native-render-html';


export default function Enrollment() {
    const htmlContent = `
    <h1>Here are some bullet points:</h1>
    <ul>
      <li>First point</li>
      <li>Second point</li>
      <li>Third point</li>
    </ul>
  `;
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

                    <Block middle style={{ marginTop: "4%" }}>
                        <Image source={Images.Home.enrollment} style={{ height: Utils.height / 5, width: Utils.width / 1.2, resizeMode: "contain" }} />
                    </Block>
                </View>
                <View style={styles.body}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <RenderHtml
                            contentWidth={Utils.width}
                            source={{ html: htmlContent }}
                        />
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
        backgroundColor: Theme.COLORS.PRIMARY,
        paddingHorizontal: "4%",
        paddingVertical: "4%"
    },
    header: {

    },
    body: {

    },
    footer: {

    },
    text: {
        fontFamily: Theme.FONTFAMILY.BOLD,
        fontSize: 18,
        color: Theme.COLORS.BLACK
    }
})