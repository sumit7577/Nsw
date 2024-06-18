import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from "react-native";
import { Theme, Utils } from "../constants";
import { Home } from "../screens/home";
import { Icon } from "galio-framework";


type TabParamList = {
    Home: undefined,
    Course: undefined,
    Search: undefined,
    Message: undefined,
}

const Tab = createBottomTabNavigator<TabParamList>();

interface iconsProp {
    name: string,
    focused: boolean
}

const Icons: React.FC<iconsProp> = (props) => {
    const { name, focused } = props;
    if (props.name === "Home") {
        return <Icon name="home-filled" family="MaterialIcons" color={focused ? Theme.COLORS.BLACK : Theme.COLORS.MUTED} size={30} />
    }
    else if (name === "Course") {
        return <Icon name="book" family="Foundation" color={focused ? Theme.COLORS.BLACK : Theme.COLORS.MUTED} size={30} />
    }
    else if (name === "Search") {
        return <Icon name="search" family="EvilIcons" color={focused ? Theme.COLORS.BLACK : Theme.COLORS.MUTED} size={30} />
    }
    else {
        return <Icon name="message" family="Entypo" color={focused ? Theme.COLORS.BLACK : Theme.COLORS.MUTED} size={26} />
    }
}


function CustomBar(props: BottomTabBarProps) {
    const { state, descriptors, navigation } = props;
    return (
        <View style={{ flexDirection: 'row', height: Utils.height / 14, backgroundColor: Theme.COLORS.WHITE, justifyContent: "space-between", alignItems: "center", elevation: 8 }}>
            {state.routes.map((route: { key: string | number; name: any; }, index: React.Key | null | undefined) => {
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
                if (route.name === "Detail" || route.name === "Order") {
                    return null;
                }
                else {
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
                }
            })}
        </View>
    )

}

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator tabBar={(props) => <CustomBar {...props} />} initialRouteName="Home" screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Course" component={Home} />
            <Tab.Screen name="Search" component={Home} />
            <Tab.Screen name="Message" component={Home} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;