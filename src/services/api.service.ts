import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens";
import {IProduct} from "../models/IProduct";
import {retriveLocalStorage} from "../helper/helpers";
import {IBaseResponseModel} from "../models/IBaseResponseModel";
import {ITokenPair} from "../models/ITokenPair";


const  axiosInstance = axios.create({
       baseURL: 'https://dummyjson.com/auth',
       headers: {}
})

axiosInstance.interceptors.request.use(request =>{
       console.log(request?.method?.toUpperCase())
       if(request?.method?.toUpperCase() === 'GET') {
              request.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
       }
       return request;
})

// axios возвращает от API объект data

const login = async ():Promise<IUserWithTokens> => {
       // axios возвращает от API объект data.
       // Сразу деструктурируем и переназываем на userWithTokens
       let {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {
              username: 'emilys',
              password: 'emilyspass',
              expiresInMins: 1
       })

       console.log(userWithTokens);
       // ответ нужно сохранить в local storage
       localStorage.setItem('user', JSON.stringify(userWithTokens));
       return userWithTokens;
}


const loadAuthProducts = async ():Promise<IProduct[]> => {
       let {data} = await axiosInstance.get<IBaseResponseModel & {products:IProduct[]}> ('/products', {
              // headers:{
              //        Authorization:'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
              // }
       });
       return data.products;
}

const refresh = async () => {
       console.log('refresh')
       const iUserWithTokens= retriveLocalStorage<IUserWithTokens>('user')
       const axiosResponse = await axiosInstance.post<ITokenPair>('/refresh', {
              refreshToken: iUserWithTokens.refreshToken,
              expiresInMins: 1
       });
       iUserWithTokens.refreshToken = axiosResponse.data.refreshToken
       iUserWithTokens.accessToken = axiosResponse.data.accessToken

       localStorage.setItem('user', JSON.stringify(iUserWithTokens))
}

export {login, loadAuthProducts, refresh}