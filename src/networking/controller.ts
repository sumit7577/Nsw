import { client, shopName } from "./interceptor"
import { courseRepo, Installment, loginResp, otpPost, registerPost, SingleCourseResp, UnpaidCourse } from "./resp-type";

const login = async (username: string, password: string): Promise<loginResp> => {
    const response = await client.post(`${shopName}/login/`, {
        username: username,
        password: password
    });
    const data = await response.data;
    return data
}

const register = async (input: registerPost): Promise<loginResp> => {
    const response = await client.post(`${shopName}/register/`, {
        ...input
    });
    const data = await response.data;
    return data
}


const otpVerify = async (input: otpPost): Promise<loginResp> => {
    const response = await client.post(`${shopName}/otp-verify/`, {
        ...input
    });
    const data = await response.data;
    return data
}

const getCourses = async (): Promise<courseRepo> => {
    const response = await client.get(`${shopName}/courses/`);
    const data = await response.data;
    return data
}

const singleCourse = async (id: number): Promise<SingleCourseResp> => {
    const response = await client.get(`${shopName}/courses/${id}`);
    const data = await response.data;
    return data;
}

export default { login, register, otpVerify, getCourses, singleCourse }