import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function ThingSpeakData() {
    const [fieldValue, setFieldValue] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/thingspeak');
                console.log(response.data);
                setFieldValue(response.data.field1);
            } catch (error) {
                console.error('Error fetching data from ThingSpeak:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
        <h2>Movement Data</h2>
        <p>Value of Field 1: {fieldValue}</p>
        </div>
    );
}

export default ThingSpeakData