import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Authcontext } from "../context/NoteContex"
import './FormStyle.css'

const LogIn = () => {
    const [userData, setUserData] = useState({})
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    const { setAuth, setName } = useContext(Authcontext)

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        async function getData() {
            const data = await axios.get('https://bookmyshow-clone-backend-8h46.onrender.com/users')
            // console.log(data);
            setUsers([...data.data])
        }
        getData()
    }, [])

    const handleSubmit = async (e) => {
        // console.log(userData)
        // console.log(users)
        e.preventDefault()
        let ok = true
        // console.log(userData)
        for (let i in users) {
            if (users[i].email == userData.email && users[i].password == userData.password) {
                // console.log('Login success')
                ok = true
                setName(users[i].name)
                localStorage.setItem("name", JSON.stringify(users[i].name))
                break;
            }
            else {
                ok = false
            }
        }

        if (ok) {
            alert('Login Success')
            setAuth(true)
            navigate("/home")
        }
        else {
            alert('Inalid credentials')
        }
    }

    return (
        <div className="form_container">
            <form onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <div>
                    <label>Email address *</label>
                    <input type="email" onChange={handleChange} name="email" required className="input"/>
                </div>
                <div>
                    <label>Password *</label>
                    <input type="password" name="password" onChange={handleChange} required className="input" autoComplete="on"/>
                </div>
                <div className="btnContainer">
                <input type="submit" value={"Log In"} className="submit"/>
                </div>
            </form>
            
            <div className="haveACOrNot">Creat an Account!<button onClick={() => navigate("/signup")} >Sign Up</button></div>
        </div>
    )
}

export default LogIn
