import axios from "axios";
import {ITodo} from "../models/ITodo";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers:{"Content-Type": "application/json"}
})



export const apiService = {
    todo: {
        getAll: async (page:number):Promise<ITodo[]> => {
            const skip = (page - 1) * 30;

            const {data: {todos}} = await axiosInstance.get<ITodo[]>('/todos', {
                params:{
                     skip: skip
                }
            });
            console.log(data)
            return data;
        }
    }
}