import React from 'react';
import HeaderComponent from "../components/header/HeaderComponent";
import FooterComponent from "../components/footer/FooterComponent";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>

            <HeaderComponent/>
                <div>
                    MainLayout -
                    ниже будет OUTLET COMPONENT
                </div>
            <Outlet/>

            <FooterComponent/>

        </div>
    );
};

export default MainLayout;