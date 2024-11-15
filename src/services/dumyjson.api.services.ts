import axios from "axios";
import {IUser} from "../components/models/IUser";
import {IPost} from "../components/models/IPost";
import {IResponsePostsModel} from "../components/models/IResponsePostsModel";
import {IResponseUsersModel} from "../components/models/IResponseUsersModel";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
});

   export const userService = {
        getUsers: async (): Promise<IUser[]> => {
            // let axiosResponse = await axiosInstance.get<IResponseUserModel>('/users')
            // let data = axiosResponse.data;
            // return data.user;
            return (await axiosInstance.get<IResponseUsersModel>('/users')).data.users
        }
    }



   export const postService = {
        getPostsOfUser:async (id:number): Promise<IPost[]> => {
            let axiosResponse = await axiosInstance.get<IResponsePostsModel>('/posts/user/' + id);
            return axiosResponse.data.posts
        }
    }




