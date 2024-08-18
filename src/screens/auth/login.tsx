import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { AuthStackProps } from '../../navigators/authStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Block, Button, Icon, Input } from 'galio-framework';
import { Utils, Images, Theme } from '../../constants';
import AppStorge from '../../constants/database';
import { useMutation, useQuery } from 'react-query';
import { ApiController } from '../../networking';
import { AppLoader } from '../../components';


type LoginProps = AuthStackProps<"login">;

export default function Login(props: LoginProps) {
  const { navigation } = props;
  const [show, setShow] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginMutation = useMutation({
    mutationFn: (data: { username: string, password: string }) => {
      return ApiController.login(data.username, data.password);
    },
    onSuccess: (data) => {
      AppStorge.setMapAsync("user", data.user)
      AppStorge.setStringAsync("token", data.token)
    },
    onError: (data) => {
      console.log("error", data)
    }
  })

  const login = () => {
    loginMutation.mutate({ username: username, password: password })
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <AppLoader show={loginMutation.isLoading} />
        <View style={styles.header}>

          <Block height={30} width={30} middle style={{ backgroundColor: Theme.COLORS.WHITE, borderRadius: 15 }}>
            <Icon family="Entypo" name="chevron-left" size={22} color={Theme.COLORS.MUTED} />
          </Block>

          <Block>
            <Block right>
              <Image source={Images.Auth.login}
                style={{ height: 120, width: 120, resizeMode: "contain" }} />
            </Block>
            <Block style={{ gap: 8 }}>
              <Text style={styles.textTitle}>Log In</Text>
              <Text style={[styles.textTitle, { fontSize: 14, paddingHorizontal: "4%" }]}>Please enter your details below log in page</Text>
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
              onChangeText={(text) => {
                setUsername(() => text)
              }}
              family="MaterialCommunityIcons"
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
              onChangeText={(text) => {
                setPassword(() => text)
              }}
              iconColor={Theme.COLORS.BORDER_COLOR}
              textInputStyle={[styles.textTitle, { fontSize: 14, color: Theme.COLORS.BLACK }]}
            />
            <Text style={[styles.textTitle, { fontSize: 15, textAlign: "right" }]}>Forgot Password</Text>
          </Block>

        </View>
        <View style={styles.footer}>
          <Block middle gap={Utils.width / 6}>
            <Button round color={Theme.COLORS.WHITE} style={{ width: "100%" }} onPress={login}>
              <Text style={[styles.textTitle, { fontSize: 15, color: Theme.COLORS.ACTIVE }]}>Login</Text>
            </Button>
            <Text style={[styles.textTitle, { fontSize: 14 }]}>Don’t have an account? <Text onPress={() => {
              navigation.navigate("register");
            }}
              style={{ color: Theme.COLORS.BLACK }}
            >Sign up</Text></Text>
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
    flex: 1,
  },
  body: {
    flex: 1,
    gap: 40
  },
  footer: {
    flex: 1
  },
  textTitle: {
    fontSize: 34,
    color: Theme.COLORS.WHITE,
    fontFamily: Theme.FONTFAMILY.BOLD
  }
})