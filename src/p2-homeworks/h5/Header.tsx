import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

function Header() {
    const [navbar, setNavbar] = useState<boolean>(false);
    const navbarStyle = navbar ? `${s.navbar} ${s.navbar_active}` : `${s.navbar}`;
    const onClickHandler = () => setNavbar(!navbar);
    const disableNavbar = () => setNavbar(false);

    return (
        <div className={navbarStyle}>
            <div className={s.nav_btn} onClick={onClickHandler}>
                <div className={s.btn_item}></div>
                <div className={s.btn_item}></div>
                <div className={s.btn_item}></div>
            </div>

            <div className={s.links}>
                <NavLink className={s.link} activeClassName={s.link_active} onClick={disableNavbar} to="/pre-junior">PreJunior</NavLink>
                <NavLink className={s.link} activeClassName={s.link_active} onClick={disableNavbar} to="/junior">Junior</NavLink>
                <NavLink className={s.link} activeClassName={s.link_active} onClick={disableNavbar} to="/junior+">Junior+</NavLink>
            </div>
        </div>
    );
}

export default Header;
