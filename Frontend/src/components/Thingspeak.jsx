import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function ThingSpeakData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/thingspeak');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data from ThingSpeak:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
        <h2>Movement Data</h2>
        <p>Movement: {data} </p>
        </div>
    );
}

export default ThingSpeakData