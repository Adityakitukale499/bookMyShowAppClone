import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import './Payment.css'
import CreditCardUi from './CreditCardUi';
const Payment = ({price,movie, Payment, setPayment}) => {
    const [seat,setSeat] = useState(1)
    const [summaryPrice,setSummaryPrice] = useState(price)
    const [convenience, setConvenience] = useState(price/100*1.70)
    useEffect(()=>{
        setConvenience((price/100*1.70)*seat);
        setSummaryPrice(price*seat+(convenience*seat))
    },[seat])
    return (
        <>
        <Modal className='paymentModal'
        size="lg"
        show={Payment}
        onHide={() => setPayment(false)}
        backdrop="static"
        aria-labelledby="example-modal-sizes-title-lg"
      >
            <Modal.Header closeButton className='paymentModalHeader'>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Payment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='paymentModalBody'>
            <div className="container">
                    <div className="modal_left_side">
                       <h2>Summary</h2>
                       <p>Movie: {movie?.title}</p>
                       <p>Ticket Price: <span>₹{price.toFixed(2)}</span></p>
                       <p>Number Of Tickets: <input type="number" value={seat} onChange={(e)=>setSeat(e.target.value)}/></p>
                       <p>Convenience Fee (1.70%):<span>₹{summaryPrice<10?0:convenience.toFixed(2)} </span></p>
                       <p>Total Price : <span>₹{summaryPrice<10?0:summaryPrice.toFixed(2)}</span></p>

                    </div>
                    <div className="modal_right_side">
                        <CreditCardUi setPayment={setPayment} movie={movie}/>
                    </div>
                </div>
            </Modal.Body>
        </Modal >
    </>
  )
}

export default Payment
