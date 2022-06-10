import React from "react"
import '../App.css';
import home from '../images/home.svg'
import aboutus from '../images/aboutus.svg'
import review from '../images/review.svg'

class Nav extends React.Component{
    getStyle(num) {
        if(this.props.page == num){
            return {
                background:"rgba(0,255,0,0.3)"
            }
        }
    }
    handleClick(t){
        t.preventDefault()
        window.location.href="https://www.instagram.com/web_developer__/"
    }
    render(){
        return (
            <div className="bottom">
                <ul className="nav">
                    <li className="nav-links" style={this.getStyle(1)} onClick={e=>this.props.handleClick(1)}><img src={home}/></li>
                    <li className="nav-links" style={this.getStyle(2)} onClick={e=>this.props.handleClick(2)}><img src={review}/></li>
                    <li className="nav-links" style={this.getStyle(3)} onClick={e=>this.props.handleClick(3)}><img src={aboutus}/></li>
                </ul>
                {/* <div>
                    <p className="contact">Want a website?? Contact us at</p>
                    <p className="contact">
                        <div className="main" onClick={this.handleClick}>
                            <img src="https://cakeomatic53.web.app/images/insta_logo.png" style={{width:'1.5em'}}/>
                            @web_developer__
                        </div>
                    </p>
                </div> */}
            </div>
        )
    }
}

export default Nav