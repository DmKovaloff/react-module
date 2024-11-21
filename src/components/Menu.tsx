import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>HOME</Link> </li>
                <li><Link to={'todos'}>TODOS</Link></li>
                <hr/>
            </ul>
        </div>
    );
};

export default Menu;