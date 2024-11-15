import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {userService} from "../../services/dumyjson.api.services";
import User from "../user/User";


type UsersLift = {
    lift:(id:number) => void;
}
const Users:FC<UsersLift> = ({lift}) => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {

        const getUsers = async () => {
            setUsers(await userService.getUsers());
        }

        getUsers();

        return() => {
            console.log('lol');
    }

    }, []);


    return (
        <div>
            {
                users.map(value => <User key={value.id} item = {value} lift={lift}/> )
            }
            
        </div>
    );
};

export default Users;