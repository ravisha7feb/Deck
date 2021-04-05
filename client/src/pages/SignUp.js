import React, {useState} from 'react'
import axios from 'axios'
import { setUserSession } from '../utils/common';
import {useHistory} from 'react-router-dom'
import Layout from '../components/Layout';
import logo from '../assets/logo.png'
import Register from '../components/Register';
import '../styles/Login.css'
import GreetingTwo from '../components/GreetingTwo';

function SignUp({setUserid}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const handleChange = (e) => {
    //       [e.target.name]: e.target.value,
    if(e.target.name === 'email')
        setEmail(e.target.value)
    else 
    setPassword(e.target.value)
      };

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios
          .post("http://localhost:5000/api/auth/login", {
            email: email,
            password: password,
          })
          .then((res) => {
            console.log(res)
           setUserid(res.data.user._id)
           setUserSession(res.data.token, res.data.user)
           history.push('/user')
          })
          .catch((err) => {
            console.log(err);
          });
      };
      console.log(email)
    return (
      <Layout>
        <div className="Login">
             <img className="logo" src={logo}/>
             <div className="row">
               <GreetingTwo />
               <Register setUserid={setUserid}/>
             </div>
        </div>
      </Layout>
    )
}

export default SignUp


{/* <form  onSubmit={handleSubmit}>
            <label>
              <b>Email:</b>
              <input
                name="email"
                type=""
                placeholder="Email"
                required
                onChange={handleChange}
                className="form-control"
              />
            </label><br />
            <label>
              <b>Password:</b>
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
                className="form-control"
              />
            </label><br />
            <button
              type="submit"
              className="btn btn-light btn-outline-secondary text-center btn-style"
            >
              Sign In
            </button>
            </form> */}