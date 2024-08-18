import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TabProps } from '../../navigators/bottomNavigator'
import { Block, Icon } from 'galio-framework'
import { Images, Theme, Utils } from '../../constants'
import { shopName } from '../../networking/interceptor'
import WebView from 'react-native-webview'
import userAuth from '../../hooks/auth'
import { AppLoader } from '../../components'

type PaymentScreenProps = TabProps<"Payment">

export default function PaymentScreen(props: PaymentScreenProps) {
    const { navigation, route } = props;
    const [loading, setLoading] = useState<boolean>(true);
    const { token } = userAuth()
    const paymentLink = `${shopName}/checkout/${route.params.id}`;
    const headers = {
        'Authorization': `Token ${token}`,
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppLoader show={loading} />
            <View style={styles.container}>
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
                    <WebView onLoad={() => {
                        setLoading(() => false)
                    }}
                        source={{ uri: paymentLink, headers: headers }}
                    />

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
        gap: 20
    },
    header: {
    },
    body: {
        flex: 9.9
    },
    footer: {
        flex: 1
    }
})