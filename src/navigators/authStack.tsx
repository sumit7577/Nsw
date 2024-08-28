import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardingScreen,LoginScreen,SignUp, Otp, PhoneNumber } from "../screens/auth";

export type AuthStackParamList = {
    onBoarding: undefined,
    login:undefined,
    register:undefined,
    otp:undefined,
    phoneNumber:undefined,
}

const Stack = createNativeStackNavigator<AuthStackParamList>();

export type AuthStackProps<T extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, T>;

export default function AuthStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="onBoarding">
            <Stack.Screen name="onBoarding" component={OnBoardingScreen} />
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="register" component={SignUp} />
            <Stack.Screen name="otp" component={Otp} />
            <Stack.Screen name="phoneNumber" component={PhoneNumber} />
        </Stack.Navigator>
    )
}