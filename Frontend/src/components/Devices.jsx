import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DeviceCard from './DeviceCard'
import '../css/Book.css'

const Devices = ({role}) => {
  const [devices, setBooks] = useState([])
  useEffect(() => {
    axios.get('https://react-dip-dali.onrender.com/device/devices')
    .then(res => {
      setBooks(res.data)
      console.log(res.data)
    }).catch(err => console.log(err))
  } , [])
  return (
    <div className='book-list'>
      {
        devices.map(device => {
          return <DeviceCard key={device.id} device = {device} role = {role}></DeviceCard>
        })
      }
    </div>
  )
}

export default Devices