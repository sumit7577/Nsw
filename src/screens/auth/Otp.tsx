import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AuthStackProps } from '../../navigators/authStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Block, Button, Icon, Input } from 'galio-framework';
import { Utils, Images, Theme } from '../../constants';
import { OtpInput } from "react-native-otp-entry";


type OtpProps = AuthStackProps<"otp">;
export default function Otp(props: OtpProps) {
  const { navigation } = props;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>

          <Block height={30} width={30} middle style={{ backgroundColor: Theme.COLORS.WHITE, borderRadius: 15 }}>
            <Icon family="Entypo" name="chevron-left" size={25} />
          </Block>

          <Block style={{ marginTop: "2%", gap: 30 }}>
            <Block>
              <Text style={styles.textTitle}>Verify Phone</Text>
              <Text style={styles.textTitle}>Number</Text>
            </Block>

            <Block middle gap={8}>
              <Image source={Images.Auth.otp} style={{ height: 120, width: 120 }} />
              <Text style={[styles.textTitle, { fontSize: 15, fontFamily: Theme.FONTFAMILY.REGULAR }]}>Enter the code</Text>
            </Block>
          </Block>

        </View>
        <View style={styles.body}>
          <Block center style={{ paddingHorizontal: "15%" }}>
            <OtpInput numberOfDigits={4} theme={{
              pinCodeTextStyle: {
                color: Theme.COLORS.BLACK,
                fontFamily: Theme.FONTFAMILY.BOLD
              }
            }}
              onTextChange={(text) => console.log(text)} />
          </Block>

          <Block middle style={{marginTop:"8%"}}>
            <Button color={Theme.COLORS.WHITE} style={{borderRadius:18,height:50,width:Utils.width/2}}>
              <Text style={[styles.textTitle, { fontSize: 14, color: Theme.COLORS.BLACK }]}>Create the Account</Text>
            </Button>
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
    paddingHorizontal: "8%",
    paddingVertical: "2%",
  },
  header: {
  },
  body: {
    marginTop: "15%"
  },
  textTitle: {
    fontSize: 20,
    color: Theme.COLORS.WHITE,
    fontFamily: Theme.FONTFAMILY.BOLD
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
})