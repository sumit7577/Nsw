import { useMMKVStorage } from "react-native-mmkv-storage"
import AppStorge from "../constants/database"
import { loginResp } from "../networking/resp-type"

const userAuth = () => {
    const [user, setUser] = useMMKVStorage<loginResp['user']>("user", AppStorge);
    const [token, setToken] = useMMKVStorage<string>("token", AppStorge)
    return { user, setUser, token }
}

export default userAuth