import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../../Shared/NewsSummaryCart/NewsSummaryCart';

const Category = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
            <h1>This Category has news {categoryNews.length}</h1>
            {
                categoryNews.map(news => <NewsSummaryCart key={news._id}
                    news={news}
                ></NewsSummaryCart>)
            }
        </div>
    );
};

export default Category;