import React from 'react';

const NewsItem = ({ article }) => {
    const { title, description, url, urlToImage, publishedAt } = article;
    return (
        <div class="newsItemBlock">
            <div className="thumbnail">
                {urlToImage && (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="news-img">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                )}
            </div>
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p className="news-desc">{description}</p>
                <p className="news-date">{publishedAt}</p>
            </div>
        </div>
    );
};

export default NewsItem;