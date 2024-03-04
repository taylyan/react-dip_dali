import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteDevice = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
      axios.delete('https://react-dip-dali.onrender.com/device/device/'+id)
      .then(res => {
          if(res.data.deleted) {
              navigate('/devices')
          }
      }).catch(err => console.log(err))
    }, [])
}

export default DeleteDevice