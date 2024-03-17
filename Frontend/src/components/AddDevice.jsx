import React, { useState } from 'react'
import axios from 'axios'
import  {useNavigate} from 'react-router-dom'

const AddDevice = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('') 
    const [channel, setChannel] = useState('') 
    const [chart, setChart] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://react-dip-dali.onrender.com/device/add', {name, description, channel,chart})
        .then(res => { 
            if(res.data.added) {
                navigate('/devices')
            }
            else {
                console.log(res)
            }
        })
        .catch(err => console.log(err))
      }

  return (
    <div className="user-form-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2>Add Device</h2>
        <div className="form-group">
          <label htmlFor="device">Device Name:</label>
          <input type="text" id="device" name="device" 
          onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" 
          onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="image">Channel:</label>
          <input type="text" id="channel" name="channel" 
          onChange={(e) => setChannel(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="image">Chart:</label>
          <input type="text" id="chart" name="chart" 
          onChange={(e) => setChart(e.target.value)}/>
        </div>
        <button type="submit">Add </button>
      </form>
    </div>
  )
}

export default AddDevice