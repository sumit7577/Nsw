import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import { AuthStackProps } from '../../navigators/authStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Block, Button, Icon, Input } from 'galio-framework';
import { Utils, Images, Theme } from '../../constants';


type PhoneProps = AuthStackProps<"phoneNumber">;
export default function PhoneNumber(props: PhoneProps) {
  const { navigation } = props;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>

          <Block height={30} width={30} middle style={{ backgroundColor: Theme.COLORS.WHITE, borderRadius: 15 }}>
            <Icon family="Entypo" name="chevron-left" size={22} color={Theme.COLORS.MUTED} />
          </Block>

          <Block style={{ marginTop: "2%", gap: 8 }}>
            <Block>
              <Text style={styles.textTitle}>Continue with</Text>
              <Text style={styles.textTitle}>Phone</Text>
            </Block>

            <Block middle gap={8}>
              <Image source={Images.Auth.phone} style={{ height: 120, width: 120 }} />
              <Text style={[styles.textTitle, { fontSize: 15, fontFamily: Theme.FONTFAMILY.REGULAR }]}>Enter your Phone Number</Text>
            </Block>
          </Block>

        </View>
        <View style={styles.body}>
          <Block row style={{ borderWidth: 1, borderRadius: 14, borderColor: Theme.COLORS.WHITE }}>
            <Input
              placeholder='Phone Number'
              style={{ borderRadius: 18, borderWidth: 0, backgroundColor: Theme.COLORS.PRIMARY, flex: 9 }}
              textInputStyle={[styles.textTitle, { fontSize: 15, color: Theme.COLORS.WHITE }]}
              type="phone-pad"
              maxLength={10}
              placeholderTextColor={Theme.COLORS.WHITE}
            />
            <Button color={Theme.COLORS.WHITE} onPress={() => navigation.navigate("otp")}
              round style={{ flex: 1, borderRadius: 15, margin: 0, height: Utils.height / 15 }}>
              <Text style={[styles.textTitle, { color: Theme.COLORS.PRIMARY, fontSize: 16 }]}>Continue</Text>
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
  }
})