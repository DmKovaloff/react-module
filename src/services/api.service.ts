import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
})

export const apiService = {
    userService:{
        getAll: async (): Promise <IUser[]> => {
            // const axiosResponse = await axiosInstance.get<IUser[]>('/users');
            // return axiosResponse.data

            // ИЛИ можно сразу сделать деструктуризацию
            const {data} = await axiosInstance.get<IUser[]>('/users');
            console.log(data);
            return data;
        }
    },

    postService: {
        getAll: async (): Promise <IPost[]> => {
            const {data} = await axiosInstance.get<IPost[]>('/posts');
            return data;
        }
    },

    commentService:{
        getAll: async (): Promise <IComment[]> => {
    const {data} = await axiosInstance.get<IComment[]>('/comments');
    return data;
        }
    }
}


// Уйти от дублей кода в функциях (React. May-2024 Cons 3 - 01:19:31)

// const AllServices = async <T, > (endpoint: string): Promise<T> => {
//     const {data} = await axiosInstance.get<T>(endpoint);
//     return data;
// }


// костыль итерация объекта
// React. May-2024 Cons 3  -  01:29:32