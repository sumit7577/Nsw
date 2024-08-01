import { client, shopName } from "./interceptor"

const login = async () => {
    const response = await client.post(`${shopName}`);
    const data = await response.data;
    return data
}

export default { login }