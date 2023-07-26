import React from 'react'
import Modal from 'react-bootstrap/Modal';
import './ShowModal.css'
import Payment from './Payment';
export const ShowModal = ({ movie, show, setShow }) =>{
    const [price , setPrice] = React.useState(Math.floor(Math.random()*51)+250)
    const [payment, setPayment] = React.useState(false)
    const handlePayment=()=>{
        setShow(false)
        setPayment(true)
        console.log(movie);
    }
    return (<>
        <Modal
            size="lg"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-lg" backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Movie details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="modal_left_side">
                        <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title} />
                    </div>
                    <div className="modal_right_side">
                        <h3>{movie.title}</h3>
                        <p><i className="fa-solid fa-star" style={{ color: 'rgb(236, 94, 113)' }}></i><strong>{movie?.vote_average} %</strong> &nbsp; &nbsp; 
                            <strong>Votes : {movie?.vote_count}K</strong></p> 
                        <p><strong>Release Date </strong>: {movie?.release_date}</p>
                        <p><strong>Overview: </strong>{movie.overview}</p>
                        <h5>Price: {price}</h5>
                        <button onClick={handlePayment} className='bookBtn'>book now</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        <Payment price={price} movie={movie} Payment={payment} setPayment={setPayment}/>
    </>
    )
}
