import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li> <Link to={"users"}> USERS</Link> </li>
                <li> <Link to={"posts"}> POSTS </Link>  </li>
                <li><Link to={"comments"}> COMMENTS</Link> </li>
            </ul>

        </div>
    );
};

export default Menu;