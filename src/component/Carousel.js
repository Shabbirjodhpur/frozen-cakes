import React from "react"
import '../App.css';
import c1 from "../images/c1.png"
import c2 from "../images/c2.png"
import c3 from "../images/c3.png"
import c11 from "../images/carousel1.jpg"
const fancy = 'https://cakeomatic53.web.app/images/pc.jpg'

const myimage={
    width:'90vw',
    height:'auto',
    minHeight:'30vh',
   borderRadius:'5vh',
    marginTop:'2em',
    marginBottom:'3em',
    paddingTop:'1em',
    maxWidth:'1000px'
}

const mycarousel = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'linear-gradient(to right,rgba(0,0,255,0.1),rgba(0,255,0,0.1))'
}
const text={
    fontWeight:'bold',
    letterSpacing:'0.1rem',
    padding:'2rem',
    color:'black',
    borderBottom:'2px solid black',
    background:'linear-gradient(to right,rgba(0,0,255,0.1),rgba(0,255,0,0.1))'
}
const text1={
    fontSize:'1em',
    textAlign:'center',
    paddingBottom:'0.5rem',
}
const text2={
    fontSize:'1em',
    textAlign:'center',
}

class Carousel extends React.Component{
    render(){
        return (
            <div>
                <div style={text}>
                    <p style={text1}>Hundred of cakes baked!</p>
                    <p style={text2}>Thousands of smiles spread!</p>
                </div>
                <div style={mycarousel}>
                    <img src={c11} style={myimage}/>
                    {/* <img src={c2} style={myimage}/>
                    <img src={c3} style={myimage}/> */}
                </div>
                <div style={{height:"1vh"}}></div>
            </div>
        )
    }
}

export default Carousel