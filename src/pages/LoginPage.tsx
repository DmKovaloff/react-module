import React, {useEffect, useState} from 'react';
import {login} from "../services/api.service";
import {useOutletContext} from "react-router-dom";
import {IUserWithTokens} from "../models/IUserWithTokens";

const LoginPage = () => {
    const loadIcon = useOutletContext<(iconLink:string) => void>()
    const[user, setUser] = useState<IUserWithTokens|null>(null)
    const[reason, setReason] = useState<string>('')
    useEffect(() => {
        login().then(response => {
            console.log(response)
            loadIcon(response.image)
            setUser(response)
        }).catch(reason => setReason(reason))

    }, []);

    return (
        <div>
            <h2>LOGIN PAGE: {user?.firstName}</h2>
            {
                reason && <div>{reason}</div>
            }
        </div>
    );
};

export default LoginPage;