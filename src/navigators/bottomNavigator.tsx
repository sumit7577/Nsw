import { BottomTabBarProps, BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View, Text } from "react-native";
import { Theme, Utils } from "../constants";
import { Home, Courses } from "../screens/home";
import { Block, Icon } from "galio-framework";
import Enrollment from "../screens/home/Enrollment";
import { SingleCourseResp } from "../networking/resp-type";
import Batch from "../screens/home/Batch";
import PaymentScreen from "../screens/home/PaymentScreen";


type TabParamList = {
    Home: undefined,
    Course: undefined,
    Search: { id: number },
    Message: undefined,
    Batch: { course: SingleCourseResp }
    Payment: { id: number },
}

const Tab = createBottomTabNavigator<TabParamList>();

export type TabProps<T extends keyof TabParamList> = BottomTabScreenProps<TabParamList, T>

interface iconsProp {
    name: string,
    focused: boolean
}

const Icons: React.FC<iconsProp> = (props) => {
    const { name, focused } = props;
    const color = focused ? Theme.COLORS.PRIMARY : Theme.COLORS.MUTED
    if (props.name === "Home") {
        return (
            <Block middle gap={4}>
                <Icon name="home-filled" family="MaterialIcons" color={color} size={30} />
                <Text style={{ color: color, fontFamily: Theme.FONTFAMILY.BOLD, fontSize: 10 }}>{props.name}</Text>
            </Block>
        )
    }
    else if (name === "Course") {
        return (
            <Block middle gap={4}>
                <Icon name="book" family="Foundation" color={color} size={30} />
                <Text style={{ color: color, fontFamily: Theme.FONTFAMILY.BOLD, fontSize: 10 }}>{props.name}</Text>
            </Block>
        )

    }
    else if (name === "Search") {
        return (
            <Block middle gap={4} style={{ position: "relative", top: -15, backgroundColor: Theme.COLORS.WHITE, height: 70, width: 70, borderRadius: 35 }}>
                <Block style={{ backgroundColor: Theme.COLORS.MUTED, height: 50, width: 50, borderRadius: 25, top: 4 }} middle>
                    <Icon name="search" family="EvilIcons" color={focused ? Theme.COLORS.PRIMARY : Theme.COLORS.BLACK} size={30} style={{ top: -3 }} />
                </Block>
                <Text style={{ color: color, fontFamily: Theme.FONTFAMILY.BOLD, fontSize: 10 }}>{props.name}</Text>

            </Block>

        )
    }
    else if (name === "Message") {
        return (
            <Block middle gap={4}>
                <Icon name="message" family="Entypo" color={color} size={25} />
                <Text style={{ color: color, fontFamily: Theme.FONTFAMILY.BOLD, fontSize: 10 }}>{props.name}</Text>
            </Block>
        )

    }
    else {
        return null
    }
}


function CustomBar(props: BottomTabBarProps) {
    const { state, descriptors, navigation } = props;
    return (
        <View style={{
            flexDirection: 'row', height: Utils.height / 13, backgroundColor: Theme.COLORS.WHITE,
            justifyContent: "space-between", alignItems: "center", elevation: 8,
            marginLeft: "10%", position: "absolute", bottom: 0, width: "90%",
            borderTopStartRadius: 30
        }}>
            {state.routes.slice(0, 4).map((route: { key: string | number; name: any; }, index: React.Key | null | undefined) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        key={index}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ alignItems: "center", justifyContent: "center", height: 70, width: 70 }}
                    >
                        <Icons name={route.name} focused={isFocused} />
                    </TouchableOpacity>
                )
            })}
        </View>
    )

}

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <CustomBar {...props} />} initialRouteName="Home" screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Course" component={Courses} />
            <Tab.Screen name="Search" component={Enrollment} />
            <Tab.Screen name="Message" component={Home} />
            <Tab.Screen name="Batch" component={Batch} />
            <Tab.Screen name="Payment" component={PaymentScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;