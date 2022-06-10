import React from 'react'

class AboutUs extends React.Component{
    render(){
        const img={
            height:"50vh",
            width:"70vw",
            background:"crimson"
        }
        const container={
            display:'flex',
            flexDirection:'row',
            marginTop:'3vh'
        }
        const text={
            width:"50vw",
            display:'flex',
            background:'rgba(0,0,0,0)',
            alignItems:'center',
        }
        const content={
            background:'#ececec',
            border:'1px solid black',
            boxShadow:'8px 8px 16px 16px rgba(0,0,0,0.5)',
            padding:'1.5em',
            fontSize:'1em',
            fontWeight:'bold',
            position:'relative',
            marginLeft:'-70%',
            borderRadius:'16px'
        }
        return(
            <div style={container}>
                <div style={img}></div>
                <div style={text}>
                    <span style={content}>
                        We are fkwnn fewjnfw jfjwsdnv ksjcjsdnkvj s kwsnfbswdv s ifswbvdsfv
                    </span>
                </div>
            </div>
        )
    }
}

export default AboutUs