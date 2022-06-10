import React from "react"
import '../App.css';
import Card from "./Card"

class Products extends React.Component{
    render(){
        const bo ={
            background:'linear-gradient(to right,rgba(255,0,0,0.2),rgba(0,0,255,0.2))',
            width:'100vw',
            // display:'flex',
            // flexDirection:'row',
            // overscrollY:'true',
            display:'grid',
            gridTemplateColumns:'repeat(1,100vw)',
            // alignContent:'space-around',
            justifyContent:'space-between'
        }

        const bgArray=["https://cakeomatic53.web.app/images/b11.png","https://cakeomatic53.web.app/images/pc.jpg","https://cakeomatic53.web.app/images/b22.png"]
        
        let i =0;
        const cardList = this.props.data.map(d => {
            i++;
            if(i>=bgArray.length){
                i = 0;
            }
            return(
                <Card bg={bgArray[i]} data={d} key={d}/>
            )
        })

        return (
            <div style={bo}>
                {cardList}   
            </div>
        )
    }
}

export default Products