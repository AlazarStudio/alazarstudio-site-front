import React from "react";
import classes from './Discuss.module.css';

function Discuss({ children, ...props }) {
    return (
        <div className={classes.discussContainer}>
            <div className={"centerBlock"}>
                <div className={classes.discuss}>
                    <div className={classes.discuss_form}>
                        <form action="/">
                            <label className={classes.formTitle}>Обсудить <span> проект</span> </label>

                            <label>Ваше имя</label>
                            <input type="text" placeholder="Ваше имя" />
                            <label>Телефон</label>
                            <input type="text" placeholder="Телефон" />
                            <label>E-mail</label>
                            <input type="email" placeholder="E-mail" />
                            <label>Компания</label>
                            <input type="text" placeholder="Компания" />
                            <label>Бюджет</label>
                            <input type="text" placeholder="Бюджет" />
                            <label>Комментарий</label>
                            <input type="text" placeholder="Комментарий" />

                            <label className={classes.formInclude}>
                                <input type="radio" name="" id="" />
                                <p>Я согласен с правилами <span>обработки персональных данных</span></p>
                            </label>

                            <button type="submit">Отправить</button>
                        </form>
                        <img src="/formBG.png" alt="" className={classes.formBG} />
                    </div>
                    <div className={classes.discuss_img}>
                        <img src="/discuss_img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Discuss;