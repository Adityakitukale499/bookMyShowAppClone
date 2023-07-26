import React, { useState } from 'react'
import { ShowModal } from './ShowModal'
import './Card.css'
const Card = ({ movie }) => {
    const [showModal , setShowModal] = useState(false);
    const [movieData , setMovieData] = useState({});
    const handleModal=()=>{
        setShowModal(true)
        setMovieData(movie)
    }
    return (
        <>
            <div className="col" onClick={handleModal}>
                <div className="card">
                    <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} className="card-img-top" alt={movie?.title} />
                    <div className="card-body">
                        <h5 className="card-title">{movie?.title}</h5>
                        <div className="card-text"><span><i className="fa-solid fa-star" style={{color:'rgb(236, 94, 113)'}}></i> <strong>{movie?.vote_average}</strong> K Votes </span> <span>{movie?.original_language.toUpperCase()}</span> </div>
                    </div>
                </div>
            </div>
            <ShowModal movie={movieData} show={showModal} setShow={setShowModal}/>
        </>
    )
}

export default Card