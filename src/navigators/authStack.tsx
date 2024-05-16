import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardingScreen } from "../screens/auth";

export type AuthStackParamList = {
    onBoarding: undefined,
}
const Stack = createNativeStackNavigator<AuthStackParamList>();

export type AuthStackProps<T extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, T>;

export default function AuthStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="onBoarding">
            <Stack.Screen name="onBoarding" component={OnBoardingScreen} />
        </Stack.Navigator>
    )
}