import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {


    return (
        <div>
            <hr/>
            <h2>HEADER</h2>
            <ul>
                <li><Link to={''}>home page</Link></li>
                <li><Link to={'users'}>users page</Link></li>
                <li><Link to={'posts'}>posts page</Link></li>
                <li><Link to={'comments'}>comments page</Link></li>
                <li><Link to={'total'}>total page</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default HeaderComponent;