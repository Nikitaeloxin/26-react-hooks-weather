import React, {useState} from 'react';
import Form from "./FormControled";
import Weather from "./Weather";
import {base_url, key} from "../utils/constants";

const Data =()=>{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         weatherInfo:{
    //
    //         },
    //         message:'Enter city name'
    //     }
    // }
    const [weatherInfo,setWeatherInfo] = useState('');
    const [message,setMessage] = useState();
    const getWeather = async (city) =>{
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${key}&units=metric`)
            if (!response.ok){
                throw new Error(response.status)
            }
            const data = await response.json();
            const wi1 = {
                country: data.sys.country,
                city:data.name,
                pressure:data.main.pressure,
                temp:data.main.temp,
                sunset: data.sys.sunset
            }
            setWeatherInfo(wi1);
            setMessage(null)

        }   catch (e){
            console.log(e.message);
            setMessage('Enter correct city name')

        }


    }

        return <div>
            <Form getWeather={getWeather}/>
            <Weather info={weatherInfo} message={message}/>
        </div>
};

export default Data;