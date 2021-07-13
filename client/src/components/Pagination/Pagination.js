import React from 'react'
import { Link } from 'react-router-dom';

export const Pagination = ({ postsPerPage, totalPosts, paginate, nextPage, prevPage, currentPage}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) { //Vamos iterando respecto a la cantidad en relacion a
        pageNumbers.push(i);                                         //la totalidad de los post mostrados y el por pag;
    };

    return ( 
        <nav>
            <ul className='pagination'> {/* Si currentPage es mayor a 1, permite renderizar y ejecutrar el 'prev'; */}
                {currentPage > 1 ? <li onClick={() => prevPage(currentPage)}> <Link to='/home'>PREV</Link></li>: ''} 
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <Link to="/home" className='page-link' onClick={() => paginate(number)}>{number}</Link>
                    </li>
                ))} {/* Si currentPage es menor a la longitud de PageNumbers, permite renderizar y ejecutrar el 'next'; */}
                {currentPage < pageNumbers[pageNumbers.length -1] 
                ? <li onClick={() => nextPage(currentPage)}><Link to="/home">NEXT</Link></li> : ""}
            </ul>
        </nav>
    );
};