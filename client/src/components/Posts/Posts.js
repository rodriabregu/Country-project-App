import React from 'react'
import { Link } from 'react-router-dom'

export const Post = ({ name, flag, region, id, loading }) => {
    if( loading ){
        return <h2>Loading...</h2>
    }
    return (
        <Link to={`/home/${id}`}>
        <div>
            <h3>{name}</h3>
            <h3>{region}</h3>
            <div>
                <img src={flag} alt="not found" />
            </div>
        </div>
        </Link>
    );
};