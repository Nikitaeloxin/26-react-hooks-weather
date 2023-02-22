import React from 'react';
import Form from "./FormControled";
import Weather from "./Weather";
import {base_url, key} from "../utils/constants";

class Data extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            weatherInfo:{

            },
            message:'Enter city name'
        }
    }
    getWeather = async (city) =>{
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${key}&units=metric`)
            if (!response.ok){
                throw new Error(response.status)
            }
            const data = await response.json();
            this.setState({
                weatherInfo: {
                    country: data.sys.country,
                    city:data.name,
                    pressure:data.main.pressure,
                    temp:data.main.temp,
                    sunset: data.sys.sunset
                },
                message:null
            })
        }   catch (e){
            console.log(e.message);
            this.setState({message:'Enter correct city name'})

        }


    }
    render () {
        return <div>
            <Form getWeather={this.getWeather}/>
            <Weather info={this.state.weatherInfo} message={this.state.message}/>
        </div>
    };
};

export default Data;