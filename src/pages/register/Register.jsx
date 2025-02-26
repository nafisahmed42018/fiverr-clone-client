import React, { useState } from 'react'
import upload from '../../utils/upload'
import './Register.scss'
import newRequest from '../../utils/newRequest.js'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [file, setFile] = useState(null)
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    img: '',
    country: '',
    isSeller: false,
    desc: '',
  })

  console.log(user)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked }
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const url = await upload(file)
    try {
      await newRequest.post('/auth/register', {
        ...user,
        img: url,
      })
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="register">
      <h1>Create a new account</h1>

      <form onSubmit={handleSubmit}>
        <div className="left">
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handleChange} />
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label htmlFor="">Country</label>
          <input
            name="country"
            type="text"
            placeholder="Usa"
            onChange={handleChange}
          />
        </div>
        <div className="right">
          <div className="picture">
            <label htmlFor="">Profile Picture</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>

          <div className="description">
            <label htmlFor="">Description</label>
            <textarea
              placeholder="A short description of yourself"
              name="desc"
              id=""
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="toggle">
            <label htmlFor="">Register as a Seller account?</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register
