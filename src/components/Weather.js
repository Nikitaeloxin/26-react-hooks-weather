import React from 'react';

const Weather = ({info, message}) => {

        return (
            <div className='infoWeath'>
                {!message && <div>
                    <p>Location: {info.country}, {info.city}</p>
                    <p>Temp:{info.temp}</p>
                    <p>Pressure: {info.pressure}</p>
                    <p>Sunset: {new Date(info.sunset*1000).toLocaleTimeString()}</p>
                </div>}
                <p>{message}</p>
            </div>
        );

};

export default Weather;