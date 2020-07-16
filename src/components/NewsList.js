import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';


const NewsList = ({ category }) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=54cfead6486041a2af9ec1cf6e98d343`,
                );
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e)
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);

    if (loading) {
        return <div className="newsListBlock">대기 중...</div>
    }

    if (!articles) {
        return null;
    }


    return (
        <div className="newsListBlock">
            {articles.map(article => (
                <NewsItem article={article} />
            ))}
        </div>
    );
};

export default NewsList;