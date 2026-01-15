import React, { useState, useRef } from "react";
import classes from './Cases.module.css';
import { Link } from "react-router-dom";

function CaseCard({ imgSrc, title, description, tags }) {
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

    return (
        <div 
            className={`${classes.case} ${classes.type_case}`}
            ref={caseRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
                        <Link key={index} to={'/'} className={classes.case_img_tag}>
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
        </div>
    );
}

function Cases({ children, ...props }) {
    const casesData = [
        {
            imgSrc: "/case-img-1.png",
            title: <>Магазин-каталог <br /> DR. PHONE</>,
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн",
            tags: ["Веб-дизайн", "frontend", "2024"]
        },
        {
            imgSrc: "/case-img-2.png",
            title: <>Магазин-каталог <br /> ВЕЛО МОТО DRIVE</>,
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн",
            tags: ["Веб-дизайн", "frontend", "2024"]
        },
        {
            imgSrc: "/case-img-3.png",
            title: "Сайт адвокатской коллегии",
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн",
            tags: ["Веб-дизайн", "frontend", "2024"]
        }
    ];

    return (
        <div className={classes.casesContainer}>
            <div className={"centerBlock"}>
                <div className={classes.cases}>
                    {casesData.map((caseData, index) => (
                        <CaseCard key={index} {...caseData} />
                    ))}

                    {/* 
                    <div className={`${classes.case} ${classes.type_banner}`}>banner</div>

                    <div className={`${classes.case} ${classes.type_new}`}>new</div>

                    <div className={`${classes.case} ${classes.type_shop}`}>shop</div> */}
                </div>
            </div>
        </div>
    );
}

export default Cases;