import React from 'react';
import s from './Navbar.module.css';
import style from '../Friends/FriendsItem/FriendsItem.module.css';

import {NavLink} from "react-router-dom";
import FriendsItem from "../Friends/FriendsItem/FriendsItem";

const Navbar = ({friends}) => {
    let friendElement = friends.map(friend => <FriendsItem name={friend.name} src={friend.src}/>)

    return (
            <div>
                <nav className={s.nav}>
                    <ul>
                        <li><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></li>
                        <li><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></li>
                        <li><NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink></li>
                        <li><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></li>
                        <li><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></li>
                        <li><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></li>
                        <br/>
                        <br/>
                        <li className={s.friends}><NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink></li>
                        <div className={style.container}>
                            {friendElement}
                        </div>
                    </ul>
                </nav>
            </div>
    )
}

export default Navbar;