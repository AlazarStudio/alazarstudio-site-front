import React from "react";

// Структура фильтров с тегами из данных
export const filterCategories = {
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
            'Веб-дизайн', 'frontend', '2024'
        ]
    }
};

// Типы элементов для фильтрации
export const elementTypes = [
    { key: 'case', name: 'Кейсы' },
    { key: 'banner', name: 'Акции' },
    { key: 'new', name: 'Новости' },
    { key: 'shop', name: 'Магазин' }
];

// Данные кейсов
export const casesData = [
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

// Данные баннеров (акций)
export const bannersData = [
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

// Данные новостей
export const newsData = [
    {
        imgSrc: "/new-img-1.png",
        title: "Какие то новости",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi",
        tags: ["Новости"],
        type: 'new',
        date: '2026-01-11'
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
        date: '2026-01-13'
    },
    {
        imgSrc: "/new-img-1.png",
        title: "Какие то новости",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi",
        tags: ["Новости"],
        type: 'new',
        date: '2026-01-14'
    },
    {
        imgSrc: "/new-img-1.png",
        title: "Какие то новости",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi",
        tags: ["Новости"],
        type: 'new',
        date: '2026-01-15'
    },
];

// Данные магазина
export const shopData = [
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
