import React from 'react';
import './LinhaDeFilmes.css'

export default ({title, items}) => {
    console.log(items)
    return (
        <div className="linhaFilme">
            <h2>{title}</h2>
            <div className="linhaFilme--listarea">
                <div className="linhaFilme--list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="linhaFilme--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}