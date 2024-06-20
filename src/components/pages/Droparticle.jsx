import React, { useState } from 'react';
import "./Dropdown_container.css";
import Articlesdata from '../../data/Articlesdata';
import './Droparticle.css';

const Droparticle = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='main-drop-container main-articles-container'>
      {Object.entries(Articlesdata).map(([year, articles], index) => (
        <div key={year} className={`drop-content drop-article-content ${openIndex === index ? 'open' : ''}`}>
          <button className='drop-heading drop-article-heading' onClick={() => handleClick(index)}>{year}</button>
          <div className={`drop-text drop-article-text ${openIndex === index ? 'open' : ''}`}>
            <ul>
              {articles.map((article, i) => (
                <li key={i}><a className='articles-tag' href={article.link}>{article.heading}</a></li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Droparticle;