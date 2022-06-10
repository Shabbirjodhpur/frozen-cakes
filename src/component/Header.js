import React from "react"
import '../App.css';
import logo from '../images/logo.jpg'

//const logo = "https://instagram.fhyd2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/109120360_861881941001017_22808372588888015_n.jpg?_nc_ht=instagram.fhyd2-1.fna.fbcdn.net&_nc_ohc=3affQu3yTC8AX8NUggv&tp=1&oh=1594c61ef19b0245fcb5e2ff05730700&oe=600A29AD"
const brandName = "Frozen Cakes"
const header_bg = "url(https://cakeomatic53.web.app/images/b22.png)"

class Header extends React.Component{
    render(){
        const myStyles={
            background:`${header_bg}`,
            // background:`blue`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            display: 'flex',
            flexDirection: 'column',
            width:'100vw',
            position: 'fixed',
            top:'0',
            zIndex:100,
            border:0
        }
        return (
            <div className="header" style={myStyles}>
                    <img className="brandLogo" src={logo}/>
                    <p className="brandText">{brandName}</p>
            </div>
        )
    }
}

export default Header