import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <h2> HEADER </h2>
            <span><NavLink to={'about'}> ABOUT </NavLink></span>
            <span><NavLink to={'about2'}> HOME(About2)</NavLink> </span>
            <span><NavLink to={'contacts'}> CONTACTS </NavLink></span>
            <span><NavLink to={'products'}> Products </NavLink> </span>
            <hr/>
        </div>
    );
};

export default HeaderComponent;