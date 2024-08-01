import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { AuthStackProps } from '../../navigators/authStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Block, Button, Icon, Input } from 'galio-framework';
import { Utils, Images, Theme } from '../../constants';
import CheckBox from '../../components/CheckBox';


type SignupProps = AuthStackProps<"register">;
export default function Signup(props: SignupProps) {
  const { navigation } = props;
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>

          <Block height={30} width={30} middle style={{ backgroundColor: Theme.COLORS.WHITE, borderRadius: 15 }}>
            <Icon family="Entypo" name="chevron-left" size={22}
              color={Theme.COLORS.MUTED} onPress={() => {
                navigation.goBack()
              }} />
          </Block>

          <Block>
            <Block right>
              <Image source={Images.Auth.login}
                style={{ height: 80, width: 80, resizeMode: "contain" }} />
            </Block>
            <Block style={{ top: "-20%" }}>
              <Text style={[styles.textTitle, styles.textWithShadow]}>Sign Up</Text>
              <Text style={[styles.textTitle, { fontSize: 14 }]}>Please enter your details below Sign Up page</Text>
            </Block>
          </Block>

        </View>
        <View style={styles.body}>
          <Block>
            <Text style={[styles.textTitle, { fontSize: 14, paddingLeft: "4%" }]}>Email</Text>
            <Input
              rounded
              style={{ borderRadius: 18 }}
              left
              icon='email'
              family="MaterialCommunityIcons"
              textInputStyle={[styles.textTitle, { fontSize: 14, color: Theme.COLORS.BLACK }]}
            />
          </Block>

          <Block>
            <Text style={[styles.textTitle, { fontSize: 14, paddingLeft: "4%" }]}>Phone Number</Text>
            <Input
              rounded
              style={{ borderRadius: 18 }}
              maxLength={10}
              type="phone-pad"
              left
              icon='call'
              family="Ionicons"
              textInputStyle={[styles.textTitle, { fontSize: 14, color: Theme.COLORS.BLACK }]}
            />
          </Block>


          <Block>
            <Text style={[styles.textTitle, { fontSize: 14, paddingLeft: "4%" }]}>Password</Text>
            <Input
              left
              icon="lock"
              family="Foundation"
              iconSize={20}
              style={{ borderRadius: 18 }}
              password
              viewPass
              iconColor={Theme.COLORS.BORDER_COLOR}
              textInputStyle={[styles.textTitle, { fontSize: 14, color: Theme.COLORS.BLACK }]}
            />

          </Block>

          <Block>
            <Text style={[styles.textTitle, { fontSize: 14, paddingLeft: "4%" }]}>Re-Enter Password</Text>
            <Input
              left
              icon="lock"
              family="Foundation"
              iconSize={20}
              style={{ borderRadius: 18 }}
              password
              viewPass
              iconColor={Theme.COLORS.BORDER_COLOR}
              textInputStyle={[styles.textTitle, { fontSize: 14, color: Theme.COLORS.BLACK }]}
            />

          </Block>

        </View>
        <View style={styles.footer}>
          <Block middle gap={25}>
            <Button round color={Theme.COLORS.WHITE} style={{ width: "100%" }} onPress={() => {
              navigation.navigate("phoneNumber")
            }}>
              <Text style={[styles.textTitle, { fontSize: 15, color: Theme.COLORS.ACTIVE }]}>Sign Up</Text>
            </Button>
            <Block style={{ width: "80%" }} middle gap={25}>
              <CheckBox color="warning" initialValue={checked} onChange={() => {
                setChecked(() => !checked)
              }} label="Please Click the checkbox and read to agree with our term & condition"
                labelStyle={{ color: Theme.COLORS.WHITE, fontSize: 12, fontFamily: Theme.FONTFAMILY.REGULAR }} />

              <Block style={{ borderWidth: 1, backgroundColor: Theme.COLORS.WHITE, borderColor: Theme.COLORS.WHITE, border: 8, width: "100%" }} />
              <Text style={[styles.textTitle, { fontSize: 14 }]}>Already have an account? <Text onPress={() => {
                navigation.navigate("login");
              }}
                style={{ color: Theme.COLORS.BLACK }}
              >Log in</Text></Text>
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
    paddingHorizontal: "8%",
    paddingVertical: "2%",
  },
  header: {
  },
  body: {
    gap: 20,
  },
  footer: {
    marginTop: "10%"
  },
  textTitle: {
    fontSize: 34,
    color: Theme.COLORS.WHITE,
    fontFamily: Theme.FONTFAMILY.BOLD
  },
  textWithShadow: {
    // Android
    elevation: 5,
    // iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
})