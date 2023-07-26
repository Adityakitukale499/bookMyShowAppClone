import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import './Header.css'
import { citis } from './City';
import { Authcontext, City, DataMovie } from '../context/NoteContex';
import GerneItems from './GerneItems';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const Header = ({ setStatus }) => {
    const a = useContext(DataMovie)
    const { name } = useContext(Authcontext)
    const { city, setCity } = useContext(City)
    const [gerneid, setGerneid] = useState('')
    const [search, setSearch] = useState('')
    const [gerne, setGerne] = useState([]);
    const [nowPlaying, setNowPlaying] = useState(true);
    const [gerneName, setGerneName] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=ea6ad38b8056dca4c2bba7df8220e73d').then(res => res.json()).then(data => setGerne(data.genres))
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=ea6ad38b8056dca4c2bba7df8220e73d`).then(res => res.json()).then(data => a.setMovieData(data.results))
    }, [])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=ea6ad38b8056dca4c2bba7df8220e73d`).then(res => res.json()).then(data => a.setMovieData(data.results))
        setStatus('Now Playing Movie')
        console.log(city);
    }, [nowPlaying])

    useEffect(() => {
        if (gerneid !== '') {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ea6ad38b8056dca4c2bba7df8220e73d&with_genres=${gerneid}`).then(res => res.json()).then(data => a.setMovieData(data.results))
            setStatus(gerneName)
        }
    }, [gerneid])

    useEffect(() => {
        if (search !== '') {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=ea6ad38b8056dca4c2bba7df8220e73d&query=${search}`).then(res => res.json()).then(data => a.setMovieData(data.results))
        }
    }, [search])

    const searchUpdate = () => {
        const searchQuery = document.querySelector('.search').value
        setSearch(searchQuery)
    }

    const NowPlayingMovies = () => {
        setNowPlaying(!nowPlaying)
    }

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    return (
        <>
            <div className='header'>
                <div className="left_side">
                    <img src="pngwing.com.png" alt="Book my show" className='logo' />
                    <div className='search_container'>
                        <input className='search' type="text" placeholder='Search for movies' />
                        <button className="search_btn" onClick={() => searchUpdate()}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
                <div className='right_side'>
                    <Form.Select className='selectCity' onChange={(e)=> setCity(e.target.value)}>
                        <option>Amravati</option>
                        {citis.map((e, i) => (
                            <option key={i} >{e}</option>
                        ))}
                    </Form.Select>
                    <OverlayTrigger
                        placement='bottom'
                        overlay={
                            <Tooltip id='tooltip-bottom'>
                                LogOut
                            </Tooltip>
                        }
                    >
                        <button className="header_btn" onClick={() => navigate("/")}>
                            <i className="fa-solid fa-right-from-bracket"></i>
                            <p className='btn_content'>{name ? name.split(' ')[0] : 'login'}</p>
                        </button>
                    </OverlayTrigger>
                    <button className="header_btn" onClick={() => NowPlayingMovies()}>
                        <i className="fa-solid fa-home"></i>
                        <p className='btn_content'>Home</p>
                    </button>
                    <button className='header_btn' variant="primary" onClick={handleShow}>
                        <i className="fa-sharp fa-solid fa-bars"></i>
                        <p className='btn_content'>Gernes</p>
                    </button>
                </div>
            </div>
            <GerneItems gerne={gerne} show={show} setShow={setShow} setGerneid={setGerneid} setGerneName={setGerneName} />
        </>
    )
}

export default Header
