import React, { useState, useEffect } from "react";
import classes from './Header.module.css';
import { Link } from "react-router-dom";

function Header({ children, ...props }) {
    const [hasBackground, setHasBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Фон появляется после скролла на 400px
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            setHasBackground(scrollPosition > 500);
        };

        // Проверяем начальную позицию
        handleScroll();

        // Добавляем обработчик события скролла
        window.addEventListener('scroll', handleScroll);

        // Очищаем обработчик при размонтировании
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${classes.header} ${hasBackground ? classes.header_withBackground : ''}`}>
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