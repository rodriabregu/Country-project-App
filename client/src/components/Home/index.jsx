import axios from "axios";
import React, { useState, useEffect } from "react";
/* import { useDispatch } from "react-redux"; */
import { BASE_URL } from "../../constants";
import { Posts } from "../Posts/Posts";
import { Pagination } from "../Pagination/Pagination";
/* import { allCountries } from '../../actions' */
const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "16px",
    margin: "70px",
    fontFamily: "Arial",
};

function Home() {
    /*const dispatch = useDispatch();*/
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); //Guarda el state del paginado;
    const [postsPerPage] = useState(10); //Cantidad de elem que muestra;

    const [usuarios, setUsuarios] = useState([]);
    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
        //Guardo dentro de una funcion, la data recibida del back;
            setLoading(true);
                const res = await axios.get(BASE_URL);
            setPosts(res.data);
            setLoading(false);
            setUsuarios(res.data);
            setTablaUsuarios(res.data);
        };
    fetchPosts();
    }, []);

    //Para recuperar los paises;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirsPost = indexOfLastPost - postsPerPage;
    /* const currentPosts = posts.slice(indexOfFirsPost, indexOfLastPost) */
    const currentFilter = usuarios.slice(indexOfFirsPost, indexOfLastPost);
    //Cambio de pag;
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //Prev & Next
    const nextPage = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
    };
    const prevPage = (pageNumber) => {
    setCurrentPage(pageNumber - 1);
    };

    const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    };
    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = tablaUsuarios.filter((e) => {
        if (
        e.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        ) {
        return e;
        }
        });
        setUsuarios(resultadosBusqueda);
    };

    /* useEffect(()=>{
        fetchPosts();
      },[]) */

    return (
        <div>
            <input
                onChange={handleChange}
                value={busqueda}
                placeholder="Search"
                className="searchInput"
                style={mystyle}
            ></input>
            <Posts //Props
                posts={currentFilter}
                loading={loading}
            />
            <Pagination //Props
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={currentPage}
            />
        </div>
    );
};

export default Home;