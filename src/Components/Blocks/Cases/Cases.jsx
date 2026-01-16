import React, { useState, useRef, useEffect } from "react";
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

    function formatAmount(value) {
        return Number(value).toLocaleString('ru-RU');
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
                                {formatAmount(price)} ₽
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
    // Состояния для фильтрации
    const [selectedCategory, setSelectedCategory] = useState(null); // По умолчанию ничего не выбрано
    const [selectedTag, setSelectedTag] = useState(null); // По умолчанию ничего не выбрано (одиночный выбор)
    const [selectedType, setSelectedType] = useState(null); // По умолчанию ничего не выбрано (одиночный выбор)
    const [isFilterVisible, setIsFilterVisible] = useState(true); // Видимость оригинального фильтра
    const [isLoading, setIsLoading] = useState(false); // Состояние загрузки
    const filterRef = useRef(null);
    const casesRef = useRef(null);

    // Структура фильтров с тегами из данных
    const filterCategories = {
        all: {
            name: 'Все',
            tags: [] // Для категории "Все" теги не показываются
        },
        byField: {
            name: 'По сферам деятельности',
            tags: [
                'Ритейл', 'Недвижимость', 'Гостиницы и отели', 'Продукты и товары', 'Кафе и рестораны', 'Сервис',
                'Производство', 'Товары для детей', 'Косметка и красота', 'Спорт и здоровье', 'Мероприятия и развлечения'
            ]
        },
        byType: {
            name: 'По виду работ',
            tags: [
                'Веб-дизайн', 'frontend', '2024', 'Акция', 'Новости'
            ]
        }
    };

    // Типы элементов для фильтрации
    const elementTypes = [
        { key: 'case', name: 'Кейсы' },
        { key: 'banner', name: 'Акции' },
        { key: 'new', name: 'Новости' },
        { key: 'shop', name: 'Магазин' }
    ];

    // Отслеживание видимости фильтра при скролле
    useEffect(() => {
        const handleScroll = () => {
            if (filterRef.current) {
                const rect = filterRef.current.getBoundingClientRect();
                // Проверяем, скрылся ли фильтр с экрана (ниже видимой области)
                setIsFilterVisible(rect.bottom > 0);
            }
        };

        // Проверяем начальную позицию
        handleScroll();

        // Добавляем обработчик события скролла
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        // Очищаем обработчики при размонтировании
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // Показ лоадера при изменении типа или тега (не при изменении категории)
    useEffect(() => {
        // Показываем лоадер только при изменении типа или тега
        if (selectedType !== null || selectedTag !== null) {
            setIsLoading(true);
            
            // Показываем лоадер на 1 секунду
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1000);
            
            return () => clearTimeout(timer);
        } else {
            setIsLoading(false);
        }
    }, [selectedType, selectedTag]);

    // Прокрутка к началу фильтров при выборе типа или тега
    useEffect(() => {
        if ((selectedType !== null || selectedTag !== null) && filterRef.current) {
            const filterElement = filterRef.current;
            const elementPosition = filterElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 100; // Отступ сверху для header

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }, [selectedType, selectedTag]);

    // Обработчик выбора категории
    const handleCategorySelect = (category) => {
        // Если нажимаем на уже выбранную категорию, сбрасываем все фильтры
        if (category === selectedCategory) {
            setSelectedCategory(null);
            setSelectedType(null);
            setSelectedTag(null);
        } else {
            setSelectedCategory(category);
            setSelectedTag(null); // Сбрасываем выбранный тег при смене категории
            // Сбрасываем тип при смене категории (кроме "Все")
            if (category !== 'all') {
                setSelectedType(null);
            }
        }
    };

    // Обработчик выбора тега (одиночный выбор)
    const handleTagSelect = (tag) => {
        // Если выбран тот же тег, снимаем выбор
        setSelectedTag(prev => prev === tag ? null : tag);
    };

    // Обработчик выбора типа (одиночный выбор)
    const handleTypeSelect = (type) => {
        // Если выбран тот же тип, снимаем выбор
        setSelectedType(prev => prev === type ? null : type);
    };

    // Имитация данных из разных источников - разбиты по типу
    const casesData = [
        {
            imgSrc: "/case-img-1.png",
            title: <>Магазин-каталог <br /> DR. PHONE</>,
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн. Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн",
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
            imgSrc: "/case-img-3.png",
            title: "Сайт адвокатской коллегии1",
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн1",
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
            imgSrc: "/case-img-3.png",
            title: "Сайт адвокатской коллегии1",
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн1",
            tags: ["Веб-дизайн", "frontend", "2024"],
            type: 'case'
        },
        {
            imgSrc: "/case-img-3.png",
            title: "Сайт адвокатской коллегии1",
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн1",
            tags: ["Веб-дизайн", "frontend", "2024"],
            type: 'case'
        },
        {
            imgSrc: "/case-img-3.png",
            title: "Сайт адвокатской коллегии1",
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн1",
            tags: ["Веб-дизайн", "frontend", "2024"],
            type: 'case'
        },
    ];

    const bannersData = [
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
            imgSrc: "/banner-img-2.png",
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
            imgSrc: "/banner-img-2.png",
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

    ];

    const newsData = [
        {
            imgSrc: "/new-img-1.png",
            title: "Какие то новости",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi",
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
    ];

    const shopData = [
        {
            imgSrc: "/case-img-1.png",
            title: <>Магазин-каталог <br /> DR. PHONE</>,
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн",
            tags: ["Веб-дизайн", "frontend", "2024"],
            type: 'shop',
            price: '50000'
        },
        {
            imgSrc: "/case-img-2.png",
            title: <>Магазин-каталог <br /> ВЕЛО МОТО DRIVE</>,
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн",
            tags: ["Веб-дизайн", "frontend", "2024"],
            type: 'shop',
            price: '50000'
        },
        {
            imgSrc: "/case-img-3.png",
            title: "Сайт адвокатской коллегии",
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн",
            tags: ["Веб-дизайн", "frontend", "2024"],
            type: 'shop',
            price: '50000'
        },
        {
            imgSrc: "/case-img-3.png",
            title: "Сайт адвокатской коллегии",
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн",
            tags: ["Веб-дизайн", "frontend", "2024"],
            type: 'shop',
            price: '50000'
        },
        {
            imgSrc: "/case-img-3.png",
            title: "Сайт адвокатской коллегии",
            description: "Продумали внутреннюю логику для масштабного проекта, разработали систему и обновили дизайн",
            tags: ["Веб-дизайн", "frontend", "2024"],
            type: 'shop',
            price: '50000'
        },
    ];

    // Функция фильтрации данных
    const filterData = (data) => {
        let filtered = data;

        // Фильтруем по типу только для категории "Все" и если тип выбран
        if (selectedCategory === 'all' && selectedType !== null) {
            filtered = filtered.filter(item => item.type === selectedType);
        }

        // Затем фильтруем по тегу, если он выбран
        if (selectedTag !== null) {
            filtered = filtered.filter(item => {
                // Проверяем, есть ли выбранный тег в тегах элемента
                return item.tags.includes(selectedTag);
            });
        }

        return filtered;
    };

    // Функция для создания строк с учетом требования: 
    // 3 любых (кроме акций), 2 акции, 6 любых, 2 акции и т.д.
    const createRows = () => {
        const rows = [];

        // Фильтруем данные перед созданием строк
        const filteredCasesData = filterData(casesData);
        const filteredNewsData = filterData(newsData);
        const filteredShopData = filterData(shopData);
        const filteredBannersData = filterData(bannersData);

        // Собираем все элементы кроме акций (без перемешивания)
        const otherData = [...filteredCasesData, ...filteredNewsData, ...filteredShopData];

        // Создаем копию массива акций для работы
        const banners = [...filteredBannersData];

        let otherIndex = 0;
        let bannerIndex = 0;
        let isFirstGroup = true;

        while (otherIndex < otherData.length || bannerIndex < banners.length) {
            // Первая группа - 3 элемента, остальные - по 6
            const currentGroupSize = isFirstGroup ? 3 : 6;

            // Создаем строки для группы не-акций
            // Если группа из 6 элементов, разбиваем на 2 строки по 3
            const elementsToAdd = Math.min(currentGroupSize, otherData.length - otherIndex);

            if (elementsToAdd === 3) {
                // Создаем одну строку с 3 элементами
                const otherRow = [];
                for (let i = 0; i < 3 && otherIndex < otherData.length; i++) {
                    otherRow.push(otherData[otherIndex]);
                    otherIndex++;
                }
                if (otherRow.length > 0) {
                    rows.push(otherRow);
                }
            } else if (elementsToAdd === 6) {
                // Создаем 2 строки по 3 элемента
                for (let rowNum = 0; rowNum < 2; rowNum++) {
                    const otherRow = [];
                    for (let i = 0; i < 3 && otherIndex < otherData.length; i++) {
                        otherRow.push(otherData[otherIndex]);
                        otherIndex++;
                    }
                    if (otherRow.length > 0) {
                        rows.push(otherRow);
                    }
                }
            } else {
                // Для остальных случаев (меньше 3 или 6)
                const otherRow = [];
                for (let i = 0; i < elementsToAdd && otherIndex < otherData.length; i++) {
                    otherRow.push(otherData[otherIndex]);
                    otherIndex++;
                }
                if (otherRow.length > 0) {
                    rows.push(otherRow);
                }
            }

            // Создаем строку для 2 акций
            const bannerRow = [];
            if (bannerIndex < banners.length) {
                bannerRow.push(banners[bannerIndex]);
                bannerIndex++;
            }
            if (bannerIndex < banners.length) {
                bannerRow.push(banners[bannerIndex]);
                bannerIndex++;
            }
            if (bannerRow.length > 0) {
                rows.push(bannerRow);
            }

            isFirstGroup = false;
        }

        return rows;
    };

    const rows = createRows();
    const currentCategory = filterCategories[selectedCategory];
    const availableTags = currentCategory ? currentCategory.tags : [];

    // Функция для рендеринга фильтра
    const renderFilter = (containerClass = classes.filterContainer) => (
        <div className={containerClass}>
            {/* Верхние категории */}
            <div className={classes.filterCategories}>
                {Object.keys(filterCategories).map((key) => (
                    <button
                        key={key}
                        className={`${classes.filterCategory} ${selectedCategory === key ? classes.filterCategory_active : ''}`}
                        onClick={() => handleCategorySelect(key)}
                    >
                        {filterCategories[key].name}
                    </button>
                ))}
            </div>

            {/* Фильтр по типам - показывается только для категории "Все" */}
            {selectedCategory === 'all' && (
                <div className={classes.filterTypes}>
                    {elementTypes.map((type) => (
                        <button
                            key={type.key}
                            className={`${classes.filterType} ${selectedType === type.key ? classes.filterType_active : ''}`}
                            onClick={() => handleTypeSelect(type.key)}
                        >
                            {type.name}
                        </button>
                    ))}
                </div>
            )}

            {/* Нижние теги */}
            {availableTags.length > 0 && (
                <div className={classes.filterTags}>
                    {availableTags.map((tag) => (
                        <button
                            key={tag}
                            className={`${classes.filterTag} ${selectedTag === tag ? classes.filterTag_active : ''}`}
                            onClick={() => handleTagSelect(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <div className={classes.casesContainer}>
            <div className={"centerBlock"}>
                <div className={classes.cases}>
                    {/* Оригинальный фильтр */}
                    <div ref={filterRef}>
                        {renderFilter()}
                    </div>

                    {/* Начало кейсов для прокрутки */}
                    <div ref={casesRef}></div>

                    {/* Лоадер */}
                    {isLoading && (
                        <div className={classes.loaderContainer}>
                            <div className={classes.loader}></div>
                        </div>
                    )}

                    {/* Результаты или сообщение об отсутствии результатов */}
                    {!isLoading && (
                        <>
                            {rows.length > 0 ? (
                                rows.map((row, rowIndex) => (
                                    <div key={rowIndex} className={classes.casesRow}>
                                        {row.map((caseData, index) => (
                                            <CaseCard key={`${rowIndex}-${index}`} {...caseData} />
                                        ))}
                                    </div>
                                ))
                            ) : (
                                <div className={classes.noResults}>
                                    <p>Ничего не найдено</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Фиксированный фильтр внизу экрана */}
            {/* {!isFilterVisible && ( */}
            <div className={`${classes.filterFixed} ${isFilterVisible ? classes.animateTopVisible : classes.animateBottomVisible}`}>
                {renderFilter(classes.filterContainerFixed)}
            </div>
            {/* )} */}
        </div>
    );
}

export default Cases;