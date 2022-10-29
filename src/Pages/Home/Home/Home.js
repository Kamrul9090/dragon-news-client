import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewsSummaryCart from '../../Shared/NewsSummaryCart/NewsSummaryCart';

const Home = () => {
    useTitle('Home')
    const AllNews = useLoaderData();
    return (
        <div>
            <h1>Dragon News Home: {AllNews.length}</h1>
            {
                AllNews.map(news => <NewsSummaryCart news={news} key={news._id}></NewsSummaryCart>)
            }
        </div>
    );
};

export default Home;