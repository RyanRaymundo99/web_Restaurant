import React from 'react'
import { Route } from 'react-router-dom'
import { SubHeading } from '../components'
import './booktable.css'

const booktable = () => {
  return (
    <div className="app__booktable">
    <div className="app__booktable-heading">
      <SubHeading title="Book a table" />
      <h1 className="headtext__cormorant">Table reservation</h1>
      <p className="p__opensans">receive your confirmation via email</p>
    </div>
    <div className="app__booktable-input flex__center">
      <input type='time' placeholder='time' />
      <input type="date" />
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div>
  </div>
  )
}
export default booktable