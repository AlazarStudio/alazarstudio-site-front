import React, { useState, useRef } from "react";
import classes from './Cases.module.css';
import { Link } from "react-router-dom";

function CaseCard({ imgSrc, title, description, tags, type, price = 0, date }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const caseRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!caseRef.current) return;

        const rect = caseRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setMousePosition({ x, y });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    function formatDate(date) {
        const d = new Date(date);
      
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
      
        return `${day}.${month}.${year}`;
      }
      

    return (
        <>
            {type == "case" &&
                <Link to={"/case"}
                    className={`${classes.case} ${classes.type_case}`}
                    ref={caseRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    data-cursor={type}
                >
                    {isHovered && (
                        <div
                            className={classes.case_glow}
                            style={{
                                left: `${mousePosition.x}px`,
                                top: `${mousePosition.y}px`,
                            }}
                        />
                    )}
                    <div className={classes.case_img}>
                        <img src={imgSrc} alt="" />
                        <div className={classes.case_img_tags}>
                            {tags.map((tag, index) => (
                                <Link key={index} to={'/'} className={classes.case_img_tag} data-cursor="filter">
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={classes.case_bottom}>
                        <div className={classes.case_bottom_title}>{title}</div>
                        <div className={classes.case_bottom_desc}>
                            {description}
                        </div>
                    </div>
                </Link>
            }

            {type == "banner" &&
                <Link to={"/banner"}
                    className={`${classes.case} ${classes.type_banner}`}
                    ref={caseRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    data-cursor={type}
                >
                    {isHovered && (
                        <div
                            className={classes.case_glow_blue}
                            style={{
                                left: `${mousePosition.x}px`,
                                top: `${mousePosition.y}px`,
                            }}
                        />
                    )}
                    <div className={classes.banner_tags}>
                        {tags.map((tag, index) => (
                            <Link key={index} to={'/'} className={classes.banner_tag} data-cursor="filter_blue">
                                {tag}
                            </Link>
                        ))}
                    </div>
                    <div className={classes.banner_text}>
                        <div className={classes.banner_title}>{title}</div>
                        <div className={classes.banner_desc}>{description}</div>
                    </div>

                    <div className={classes.banner_img}>
                        <div className={classes.banner_img_container}>
                            <img src={imgSrc} alt="" />
                        </div>
                    </div>
                </Link>
            }

            {type == "new" &&
                <Link to={"/new"}
                    className={`${classes.case} ${classes.type_new}`}
                    ref={caseRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    data-cursor={type}
                >
                    {isHovered && (
                        <div
                            className={classes.case_glow}
                            style={{
                                left: `${mousePosition.x}px`,
                                top: `${mousePosition.y}px`,
                            }}
                        />
                    )}
                    <div className={classes.new_container}>
                        <div className={classes.new_container_date_tag}>
                            <div className={classes.new_container_date}>{formatDate(date)}</div>
                            <div className={classes.new_container_dot}></div>
                            <div className={classes.new_container_tag}>
                                {tags.map((tag, index) => (
                                    <Link key={index} to={'/'} className={classes.banner_tag} data-cursor="filter">
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className={classes.new_container_title}>{title}</div>
                        <div className={classes.new_container_desc}>{description}</div>
                        <div className={classes.new_container_img}>
                            <img src={imgSrc} alt="" />
                        </div>
                    </div>
                </Link>
            }

            {type == "shop" &&
                <Link to={"/shop"}
                    className={`${classes.case} ${classes.type_shop}`}
                    ref={caseRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    data-cursor={type}
                >
                    {isHovered && (
                        <div
                            className={classes.case_glow_blue}
                            style={{
                                left: `${mousePosition.x}px`,
                                top: `${mousePosition.y}px`,
                            }}
                        />
                    )}
                    <div className={classes.shop_img}>
                        <img src={imgSrc} alt="" />
                    </div>
                    <div className={classes.shop_bottom}>
                        <div className={classes.shop_bottom_title}>{title}</div>
                        <div className={classes.shop_bottom_desc}>
                            {description}
                        </div>
                        <div className={classes.shop_img_tags}>
                            {tags.map((tag, index) => (
                                <Link key={index} to={'/'} className={classes.shop_img_tag} data-cursor="filter_blue">
                                    {tag}
                                </Link>
                            ))}
                        </div>
                        <div className={classes.shop_price_card}>
                            <div className={classes.shop_price}>
                                {price} ₽
                            </div>
                            <div className={classes.shop_card} data-cursor="card">
                                Добавить в корзину
                            </div>
                        </div>
                    </div>
                </Link>
            }
        </>
    );
}

function Cases({ children, ...props }) {
    const casesData = [
        {
            imgSrc: "/case-img-1.png",
            title: <>Магазин-каталог <br /> DR. PHONE</>,
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн",
            tags: ["Веб-дизайн", "frontend", "2024"],
            type: 'case'
        },
        {
            imgSrc: "/case-img-2.png",
            title: <>Магазин-каталог <br /> ВЕЛО МОТО DRIVE</>,
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн",
            tags: ["Веб-дизайн", "frontend", "2024"],
            type: 'case'
        },
        {
            imgSrc: "/case-img-3.png",
            title: "Сайт адвокатской коллегии",
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн",
            tags: ["Веб-дизайн", "frontend", "2024"],
            type: 'case'
        },
        {
            imgSrc: "/banner-img-1.png",
            title: "Какая то акция",
            description: <>Здесь описание. <br /> Сами карточки черные, подсвечиваются при наведении курсора</>,
            tags: ["Акция"],
            type: 'banner',
            date: '2026-01-12'
        },
        {
            imgSrc: "/banner-img-2.png",
            title: "Какая то акция",
            description: <>Здесь описание. <br /> Сами карточки черные, подсвечиваются при наведении курсора</>,
            tags: ["Акция"],
            type: 'banner',
            date: '2026-01-12'
        },
        {
            imgSrc: "/new-img-1.png",
            title: "Какие то новости",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi",
            tags: ["Новости"],
            type: 'new',
            date: '2026-01-12'
        },
        {
            imgSrc: "/new-img-1.png",
            title: "Какие то новости",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi",
            tags: ["Новости"],
            type: 'new',
            date: '2026-01-12'
        },
        {
            imgSrc: "/new-img-1.png",
            title: "Какие то новости",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi",
            tags: ["Новости"],
            type: 'new',
            date: '2026-01-12'
        },
        {
            imgSrc: "/case-img-1.png",
            title: <>Магазин-каталог <br /> DR. PHONE</>,
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн",
            tags: ["Веб-дизайн", "frontend", "2024"],
            type: 'shop',
            price: '50 000'
        },
        {
            imgSrc: "/case-img-2.png",
            title: <>Магазин-каталог <br /> ВЕЛО МОТО DRIVE</>,
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн",
            tags: ["Веб-дизайн", "frontend", "2024"],
            type: 'shop',
            price: '50 000'
        },
        {
            imgSrc: "/case-img-3.png",
            title: "Сайт адвокатской коллегии",
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн",
            tags: ["Веб-дизайн", "frontend", "2024"],
            type: 'shop',
            price: '50 000'
        },

    ];

    return (
        <div className={classes.casesContainer}>
            <div className={"centerBlock"}>
                <div className={classes.cases}>
                    {casesData.map((caseData, index) => (
                        <CaseCard key={index} {...caseData} />
                    ))}

                    {/* 
                    <div className={`${classes.case} ${classes.type_new}`}>new</div> */}
                </div>
            </div>
        </div>
    );
}

export default Cases;