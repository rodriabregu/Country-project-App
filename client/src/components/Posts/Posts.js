import React from 'react'

export const Posts = ({ posts, loading }) => {
    if( loading ){
        return <h2>Loading...</h2>
    }
    return <ul className="lists-group mb-4">
        {posts.map( c => ( //Mapea los elementos a mostrar por cada "post" o país;
            <li key={c.id} className='lists-group-item'>
                {c.name}
                {c.region}<br/>
                <img src={c.flag} alt="xd"/>
            </li>
        ))}
    </ul>;
};