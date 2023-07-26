import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
    const [userData, setUserData] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
        // console.log(userData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(userData)
        axios.post('https://bookmyshow-clone-backend-8h46.onrender.com/users', userData)
        alert('Users has been added successfully')
        navigate("/")
    }


    return (
        <div className='form_container'>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div>
                    <label>Enter Name *</label>
                    <input type="text" name="name" onChange={handleChange} required className="input" />
                </div>
                <div>
                    <label>Email address *</label>
                    <input type="email" onChange={handleChange} name="email" required className="input" />
                </div>
                <div>
                    <label>Password *</label>
                    <input type="password" name="password" onChange={handleChange} required className="input" autoComplete="on" />
                </div>
                <div className='btnContainer'>
                    <input type="submit" value={"Sign Up"} className='submit' />
                </div>
            </form>
            <div className="haveACOrNot">Already have an account?<button onClick={() => navigate("/")}>Log In</button></div>

        </div>
    )
}

export default SignUp
