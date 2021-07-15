import React, { useState } from 'react'
import { Post } from '../Posts/Posts'

export const Pagination = ({ countriesAll }) => {
    const [currentPage, setCurrentPage] = useState(0)

    const nextPage = () => {
        if(countriesAll.length <= currentPage + 10) {
            setCurrentPage(currentPage);
        } else setCurrentPage(currentPage + 10)
    }
    const prevPage = () => {
        if(currentPage < 9) {
            setCurrentPage(0);
        } else setCurrentPage(currentPage - 10)
    }

    const pageOne = () => {
        setCurrentPage(0)
    }

    if ( currentPage > countriesAll.length) {
        pageOne();
    }

    const filterC = countriesAll.slice(currentPage, currentPage + 10)

    return ( 
        <div> 
                    <div>
                        {currentPage !== 0 ? <button onClick={prevPage}>PREV</button> : <div/>}
                        {currentPage !== 240 ? <button onClick={nextPage}>NEXT</button> : <div/>}
                    </div>
            <div>
                {filterC && filterC?.map(c => (
                    <Post key={c.id} 
                    id = {c.id}
                    name = {c.name}
                    flag = {c.flag}
                    region = {c.region}
                    />
                ))}                
            </div>
        </div>
    );
};