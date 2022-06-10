import React from "react"
import '../App.css';

class SecondHeading extends React.Component{
    render(){
        const title={
            fontSize:'1.5em',
            fontWeight:'bold',
            textAlign:'center',
            padding:'0.5em',
            borderBottom:'2px solid black'
        }
        return (
            <div style={title}>{this.props.title}</div>
        )
    }
}

export default SecondHeading