import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";

const MainLayout = () => {

    //react ts demos auth api implementation (6) - 00:24:00
    const[icon, setIcon] = useState<string>('')

    const loadIcon = (iconLinc: string) => {
        setIcon(iconLinc);
    }

    return (
        <div>
            <span>MainLayout (comp.:Menu + Outlet) </span>
            <Menu icon = {icon}/>
            <Outlet context={loadIcon}/>
        </div>
    );
};

export default MainLayout;