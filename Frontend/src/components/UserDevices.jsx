import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DeviceCard from './DeviceCard'
import '../css/Book.css'

const UserDevices = ({role}) => {
  const [devices, setDevices] = useState([])
  useEffect(() => {
    axios.get('https://react-dip-dali.onrender.com/device/user/devices')
    .then(res => {
      setDevices(res.data)
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

export default UserDevices