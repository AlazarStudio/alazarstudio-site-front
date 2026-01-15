import React from "react";
import classes from './Header.module.css';
import { Link } from "react-router-dom";

function Header({ children, ...props }) {
    return (
        <header className={classes.header}>
            <div className={'centerBlock'}>
                <Link to={'/'}><img src="/alazar-logo.png" alt="Alazar Studio logo" /></Link>

                <div className={classes.header_links}>
                    {/* <Link to={'/'}>Главная</Link> */}
                    <Link to={'/'}>Кейсы</Link>
                    <Link to={'/blog'}>Блог</Link>
                    <Link to={'/shop'}>Магазин</Link>
                    <Link to={'/about'}>О нас</Link>
                    <Link to={'/contacts'}>Контакты</Link>
                </div>

                <div className={classes.header_links_user}>
                    <Link to={'/card'}><img src="/card.png" alt="" /></Link>
                    <Link to={'/profile'}><img src="/profile.png" alt="" /></Link>
                </div>
            </div>
        </header>
    );
}

export default Header;