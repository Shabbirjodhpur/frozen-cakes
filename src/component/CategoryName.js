import React from "react"
import '../App.css';

class CategoryName extends React.Component{
    getStyle(num) {
        if(num == this.props.category) {
            return {
                backgroundColor:"#3498db",
                color:'#FFF',
                fontWeight:'bold'
            }
        }
    }
    render(){
        const buttonStyle={

        };
        return (
            <div className="categoryName">
                <div onClick={e => this.props.handleClick(1)} className="category" style={this.getStyle(1)}>Latest Flavours</div>
                <div onClick={e => this.props.handleClick(2)} className="category" style={this.getStyle(2)}>Our Special</div>
                {/* <div onClick={e => this.props.handleClick(3)} className="category" style={this.getStyle(3)}>Category 3</div> */}
                {/* <div onClick={e => this.props.handleClick(4)} className="category" style={this.getStyle(4)}>Category 4</div> */}
            </div>
        )
    }
}

export default CategoryName