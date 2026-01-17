import React, { useState, useEffect } from "react";
import classes from './Blog.module.css';
import { newsData } from '../../../data/casesData.jsx';
import { IconButton, Tooltip } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import CaseCard from "../../Blocks/CaseCard/CaseCard.jsx";

function Blog({ children, ...props }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('newest'); // 'newest' или 'oldest'
    const [isLoading, setIsLoading] = useState(false);
    const [filteredNews, setFilteredNews] = useState(newsData);

    // Фильтрация, поиск и сортировка
    useEffect(() => {
        const hasActiveFilters = searchQuery.trim() !== '';

        // Показываем лоадер только если есть активные фильтры
        if (hasActiveFilters) {
            setIsLoading(true);
        }

        let filtered = [...newsData];

        // Поиск по названию и описанию
        if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(item => {
                const titleMatch = typeof item.title === 'string'
                    ? item.title.toLowerCase().includes(query)
                    : false;
                const descMatch = item.description.toLowerCase().includes(query);
                return titleMatch || descMatch;
            });
        }

        // Сортировка по дате
        filtered.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sortOrder === 'newest'
                ? dateB - dateA  // Новые первыми
                : dateA - dateB; // Старые первыми
        });

        // Показываем лоадер на 0.5 секунды для плавности, если есть поиск
        if (hasActiveFilters) {
            const timer = setTimeout(() => {
                setFilteredNews(filtered);
                setIsLoading(false);
            }, 500);
            return () => clearTimeout(timer);
        } else {
            // Если нет поиска, сразу показываем все новости без лоадера
            setFilteredNews(filtered);
            setIsLoading(false);
        }
    }, [searchQuery, sortOrder]);

    // Обработчик изменения поиска
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Обработчик переключения сортировки
    const handleSortToggle = () => {
        setSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest');
    };

    return (
        <div className={classes.blogContainer}>
            <div className={classes.blogContent}>
                {/* Заголовок */}
                <div className={classes.blogTitle}>
                    <div className={classes.blogTitle_text}>
                        Блог

                        <div className={classes.sideLight_right}>
                            <img src="/sideLight.png" alt="" />
                        </div>
                        <div className={classes.sideLight_left}>
                            <img src="/sideLight.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className={classes.blogContent_info}>

                    {/* Поиск и сортировка */}
                    <div className={classes.searchRow}>
                        {/* Поиск */}
                        <input
                            type="text"
                            placeholder="Поиск по новостям..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className={classes.searchInput}
                        />

                        {/* Иконка сортировки */}
                        <Tooltip
                            title={sortOrder === 'newest' ? 'Сначала новые' : 'Сначала старые'}
                            arrow
                        >
                            <IconButton
                                onClick={handleSortToggle}
                                className={classes.sortIconButton}
                                sx={{
                                    color: '#FFFFFF',
                                    border: '1px solid rgba(255, 255, 255, 0.5)',
                                    borderRadius: '27px',
                                    padding: '12px',
                                    '&:hover': {
                                        backgroundColor: '#FFFFFF',
                                        color: '#000000',
                                        borderColor: '#FFFFFF',
                                    },
                                }}
                            >
                                <SortIcon />
                            </IconButton>
                        </Tooltip>
                    </div>

                    {/* Прелоадер */}
                    {isLoading && (
                        <div className={classes.loaderContainer}>
                            <div className={classes.loader}></div>
                        </div>
                    )}

                    {/* Результаты */}
                    {!isLoading && (
                        <>
                            {filteredNews.length > 0 ? (
                                <div className={classes.newsGrid}>
                                    {filteredNews.map((item, index) => (
                                        <CaseCard key={index} {...item} />
                                    ))}
                                </div>
                            ) : (
                                <div className={classes.noResults}>
                                    <p>Ничего не найдено</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Blog;
