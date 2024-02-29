import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function ThingSpeakData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.thingspeak.com/channels/2295351/fields/1/last.json?api_key=Y62GZ7WDLD9BU1WR');
                console.log(response.data);
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