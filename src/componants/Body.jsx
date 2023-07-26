import React, { useContext, useState } from 'react'
import { DataMovie } from '../context/NoteContex'
import Card from './Card';
import Slider from './Slider';
import './Card.css'
import Header from './Header';
const Body = () => {
    const dataContext = useContext(DataMovie)
    const [status, setStatus] = useState('Now Playing Movie')
    console.log(dataContext.movieData);
    return (
        <>
        <Header setStatus={setStatus}/>
        <div className='body_container'>
            <Slider/>
        <h1>{status}</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {dataContext.movieData.map((e, i) => (
                    <Card key={i} movie={e} />
                ))}
            </div>
        </div >
        </>
    )
}

export default Body
