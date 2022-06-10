import React from "react"
import '../App.css';
import butterscotch from '../images/butterscotch.jpg'
import chocolate from '../images/chocolate.jfif'
import redvelvet from '../images/redvelvet.jfif'

var cakeImages = {butterscotch,chocolate,redvelvet}

class Card extends React.Component{
    handleClick(t){
        t.preventDefault()
        //window.location.href="https://www.instagram.com/frozen_cakes_/"
    }
    render(){
        // const cardBg="red";
        const cardBg=`url(${this.props.bg})`;
        return (
            <div className="card-wrapper">
                <div className="card" style={{background:cardBg}}>
                    <img className="cake" src={cakeImages[this.props.data.name]}/>
                    <div className="card-name">{this.props.data.name}</div>
                    <div className="card-desc">{this.props.data.description}</div>
                    <div>
                        <button className="buy" onClick={this.handleClick}>Buy Now</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card