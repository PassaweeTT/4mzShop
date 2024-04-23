import React, { useEffect, useState } from 'react';
import { NewsModel } from '../model/model';
import '../css/NewsCss.css';

const News = () => {
    // สร้าง state สำหรับเก็บข้อมูลข่าว
    const [newsList, setNewsList] = useState<NewsModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // เรียก API จาก News API
        const fetchNews = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a95d6fc34c845a5a6467fea09f93bcd');
                const data = await response.json();
                data.articles = data.articles.slice(0, 6);
                setNewsList(data.articles);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch news');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>News</h2>
            <div className="news-grid">
                {newsList.map((item, index) => (
                    <div key={index} className="news-item">
                        <div className="news-header">
                            <h3>{item.title}</h3>
                        </div>
                        <div className="news-body">
                            <p>{item.description}</p>
                            <img src={item.urlToImage} alt={item.title} style={{ maxWidth: '100%' }} />
                        </div>
                        <div className="news-footer">
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="read-more">
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default News;