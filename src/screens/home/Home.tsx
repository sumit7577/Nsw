import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Images, Theme, Utils } from '../../constants'
import { Block, Icon } from 'galio-framework'
import userAuth from '../../hooks/auth'
import { TabProps } from '../../navigators/bottomNavigator'

type HomeProps = TabProps<"Home">

export default function Home(props: HomeProps) {
  const { user } = userAuth()
  const { navigation } = props;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Block row space='between' middle>
            <Block />
            <Block style={{ backgroundColor: Theme.COLORS.WHITE, padding: 4, borderRadius: 8 }}>
              <Image source={Images.Home.logo} style={{ height: 40, width: Utils.width / 2.5 }} resizeMode="contain" />
            </Block>
          </Block>
        </View>
        <View style={styles.body}>

          <Block gap={30}>
            <Block row style={{ alignItems: "center" }} gap={10}>
              <Image source={Images.Home.profile_picture} style={{ height: 60, width: 60, resizeMode: "contain" }} />
              <Block>
                <Text style={[styles.text, { fontSize: 14, color: Theme.COLORS.WHITE }]}>Hi, {user?.email}</Text>
                <Text style={[styles.text, { fontSize: 10, color: Theme.COLORS.WHITE, fontFamily: Theme.FONTFAMILY.REGULAR }]}>Let’s start learning</Text>
              </Block>
            </Block>

            <Block middle>
              <Image source={Images.Home.homepage_landing} style={{ height: Utils.height / 3, width: Utils.width / 1.2, resizeMode: "contain" }} />
            </Block>

            <Block middle>
              <Text style={[styles.text, { fontSize: 12, textAlign: "center", color: Theme.COLORS.WHITE }]}>Welcome to Vision It Technology a world class training and
                Placement Company</Text>
            </Block>

            <Block row space='between'>
              <Block middle>
                <Image source={Images.Home.courses} style={{ height: 100, width: 100, resizeMode: "contain" }} />
                <Text style={[styles.text, { fontSize: 10, color: Theme.COLORS.WHITE }]}>Courses</Text>
              </Block>

              <Block middle>
                <Image source={Images.Home.booking_offer} style={{ height: 100, width: 100, resizeMode: "contain" }} />
                <Text style={[styles.text, { fontSize: 10, color: Theme.COLORS.WHITE }]}>Early Booking Offer</Text>
              </Block>

              <Block middle>
                <Image source={Images.Home.placement} style={{ height: 100, width: 100, resizeMode: "contain" }} />
                <Text style={[styles.text, { fontSize: 10, color: Theme.COLORS.WHITE }]}>Placement</Text>
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
    paddingVertical: "4%"
  },
  header: {

  },
  body: {
    marginTop: "4%"
  },
  footer: {

  },
  text: {
    fontFamily: Theme.FONTFAMILY.BOLD,
    fontSize: 18,
    color: Theme.COLORS.BLACK
  }
})