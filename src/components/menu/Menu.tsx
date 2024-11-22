import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styles from './Menu.module.css'

type MenuTypeProps = {icon?: string}

const Menu: FC<MenuTypeProps> = ({icon}) => {
    return (
        <div>
            <hr/>
            <h2>MENU:</h2>
            <ul className={styles.menu}>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'/login'}>login page</Link></li>
                <li><Link to={'/auth/resources'}>auth resources page</Link></li>
                {icon && <li><img src={icon} alt="icon"/></li>}
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;