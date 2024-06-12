import { MMKVLoader } from "react-native-mmkv-storage";

const AppStorge = new MMKVLoader().withEncryption().initialize();

export default AppStorge;