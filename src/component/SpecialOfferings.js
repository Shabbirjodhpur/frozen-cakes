import React from "react"
import '../App.css';

import icon from "../images/ourofferings.png"

const mystyle={
    width:'50vw',
    marginLeft:'50vw',
    transform:'translate(-50%,0)',
    maxWidth:'250px',
    marginTop:'2em',
    marginBottom:'1em',
    paddingBottom:'1em',
    borderBottom:'1px solid black'
}
const specialOfferings={
    background:'linear-gradient(to right,rgba(255,0,0,0.1),rgba(0,0,255,0.1))',
}
const text={
    textAlign:'center',
    fontSize:'1.5em',
    padding:'0 0 0.7em',
    letterSpacing:'0.2em'
}

class SpecialOfferings extends React.Component{
    render(){
        return (
            <div style={specialOfferings}>
                <img src={icon} style={mystyle}/>
                <p style={text}>Special Offerings</p>
            </div>
        )
    }
}

export default SpecialOfferings