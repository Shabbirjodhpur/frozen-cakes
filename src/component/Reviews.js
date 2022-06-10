import React from 'react'
import Feedback from '../Feedback'


function ReviewCard(props){
    const index = props.id
    if(index>=props.bg.length){
        index = index%props.bg.length
    }
    const card={
        height:'auto',
        background:"rgba(0,0,0,0.1)",
        padding:'1.5em',
        margin:'1em',
        borderRadius:'3vh',
        maxWidth:'475px',
    }
    const description ={
        textAlign:'left',
        fontSize:'1.5em',
        padding:'0 0.5em 0 0.5em'
    }
    const name={
        paddingTop:'1em',
        textAlign:'right',
        fontSize:'1em',
        fontWeight:'bold'
    }
    const cardWrapper={
        background:`url(${props.bg[index]})`,
        padding:"2em",
        display:'flex',
        justifyContent:'center'
    }
    return (
        <div style={cardWrapper}>
            <div style={card}>
                <p style={description}>{props.feedback}</p>
                <p style={name}>-{props.name}</p>
            </div>
        </div>
    )
}

class Review extends React.Component{
    constructor(){
        super()
        this.state={
            bg:["https://cakeomatic53.web.app/images/b11.png","https://cakeomatic53.web.app/images/pc.jpg","https://cakeomatic53.web.app/images/b22.png"]
        }
    }
    render(){
        const reviewList = Feedback.map(
            data => 
                <ReviewCard 
                    key={data.feedback} 
                    feedback={data.feedback} 
                    name={data.name}
                    id={data.id}
                    bg={this.state.bg}
                />
            )
        return(
            <div>
                {reviewList}
            </div>
        )
    }
}

export default Review