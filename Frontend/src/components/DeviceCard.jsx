import React from 'react'
import { Link } from 'react-router-dom';

const DeviceCard = ({ device, role }) => {
  const { name, description, channel, chart } = device;
  const iframeSrc = `https://thingspeak.com/channels/${channel}/charts/${chart}?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line`;

  return (
    <div className='book-card'>
      <iframe width="450" height="260" style={{ border: "1px solid #cccccc" }} 
      src={iframeSrc}>
      </iframe>
      <div className="book-details">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      {role === "admin" &&
        <div className="book-actions">
          <button><Link to={`/device/${device._id}`} className='btn-link'>edit</Link></button>
          <button><Link to={`/delete/${device._id}`} className='btn-link'>delete</Link></button>
        </div>}

    </div>
  )
}

export default DeviceCard