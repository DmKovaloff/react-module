import React, {isValidElement, useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {apiService} from "../services/api.service";


const UsersPage= () => {

    const [users, setUsers] = useState<IUser[]>([]);
        useEffect(() => {
            apiService.userService.getAll().then(value => setUsers(value));
        }, []);

    return (
        <div>
            <hr/>
            <h2>USERS PAGE - in UsersPage.tsx:</h2>

            {
                users.map(value => <div> {value.id}. {value.name} - {value.username}</div>)
            }
        </div>
    );
};

export default UsersPage;