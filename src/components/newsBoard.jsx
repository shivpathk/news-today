import React, { useEffect, useState } from 'react'
import NewsItem from './newsItem';

const newsBoard = ({category}) => {

  const [articles , setArticles] = useState([]);

  useEffect(()=>{
    let url =  `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=10&apikey=bcc5a7cc322610ae2a62dd62af241b67`
     fetch(url).then(Response=>Response.json()).then(data=>setArticles(data.articles))
  },[category])
  

  return (
    <div className='text-center py-3'>
      <h2 className='text-center fs-1 fw-bold'>Latest <span className='badge bg-danger'>News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.image} url={news.url} />
      })}
    </div>
  )
}

export default newsBoard