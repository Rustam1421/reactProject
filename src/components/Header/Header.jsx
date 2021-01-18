import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
   
    return (
        <header className={s.header}>
            <input type="text" placeholder="search" />
            {/*<img src="https://s.yimg.com/ny/api/res/1.2/8o2xFCqan9_V3DejFWtckg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-AU/homerun/y7.yahoo7lifestyle/8cdb2bea3326c220667bd2a5dcee482e"  alt=""/>*/}
            <div className={s.loginBtn}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;