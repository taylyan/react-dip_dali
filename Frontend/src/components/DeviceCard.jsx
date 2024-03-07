import { Link } from 'react-router-dom';
import React, { useState } from 'react'

const DeviceCard = ({ device, role }) => {
  const { name, description, channel, chart } = device;
  const iframeSrc = `https://thingspeak.com/channels/${channel}/charts/${chart}?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line`;
  const [selectedMode, setSelectedMode] = useState('');
  const handleModeChange = (event) => {
    setSelectedMode(event.target.value);
  };
  const handleSubmit = () => {
    axios.post('/email/mode-selection', { mode: selectedMode })
        .then(response => {
            console.log('Mode selection submitted successfully');
            // Optionally, provide user feedback here
        })
        .catch(error => {
            console.error('Error submitting mode selection:', error);
            // Optionally, provide user feedback about the error
        });
};
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
      {role === "user" &&
        <div className="book-actions">
          <div>
            <h2>Select Your Preferred Mode</h2>
            <div>
                <input type="radio" id="mode1" name="mode" value="Don't Disturb" onChange={handleModeChange} />
                <label htmlFor="mode1">Don't Disturb</label>
            </div>
            <div>
                <input type="radio" id="mode2" name="mode" value="Balanced" onChange={handleModeChange} />
                <label htmlFor="mode2">Balanced</label>
            </div>
            <div>
                <input type="radio" id="mode3" name="mode" value="Active" onChange={handleModeChange} />
                <label htmlFor="mode3">Active</label>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </div>}

    </div>
  )
}

export default DeviceCard