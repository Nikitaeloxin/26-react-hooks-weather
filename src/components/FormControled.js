import React, {Component} from 'react';

class FormControled extends Component {
    constructor(props) {
        super(props);
        this.state={
            city:''
        }
    }
    handleClick = ()=>{
        this.props.getWeather(this.state.city);
        this.setState({city:''})
    }
    handleChange = e =>{
        this.setState({city:e.target.value})
    }
    render() {
        return (
            <div>
                <input onChange={this.handleChange} type={'text'} value={this.state.city} placeholder={'City'}/>
                <button onClick={this.handleClick}>Get weather</button>
            </div>
        );
    }
}

export default FormControled;