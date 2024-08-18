import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window")


const dateFormatter = (date: string | null | undefined, locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined) => {
    if (date == null) {
        return ""
    }
    const time = new Date(date).toLocaleString(locales, options);
    return time

}
export default { height, width, dateFormatter };