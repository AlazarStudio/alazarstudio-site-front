import React from "react";
import classes from './Header.module.css';
import { Link } from "react-router-dom";

function Header({ children, ...props }) {
    return (
        <header className={classes.header}>
            <div className={'centerBlock'}>
                <Link to={'/'}><img src="/alazar-logo.png" alt="Alazar Studio logo" /></Link>

                <div className={classes.header_links}>
                    <Link to={'/'}>Главная</Link>
                    <Link to={'/'}>Новости</Link>
                    <Link to={'/'}>Кейсы</Link>
                    <Link to={'/'}>Магазин</Link>
                    <Link to={'/'}>О нас</Link>
                    <Link to={'/'}>Контакты</Link>
                </div>

                <div className={classes.header_links_user}>
                    <Link to={'/'}><img src="/card.png" alt="" /></Link>
                    <Link to={'/'}><img src="/profile.png" alt="" /></Link>
                </div>
            </div>
        </header>
    );
}

export default Header;