import React from 'react'

export default function dice(props) {
    let dice = {
        fontSize: "3pc",
        display: "flex",
        flexDirection: "column",
        color: "black",
        backgroundColor: "wheat",
        width: "5pc",
        height: "5pc",
        justifyContent: "center",
        border: "2px solid black",
        borderRadius: "1.8pc",
        boxShadow: "0px 0px 30px #3569dce3",
        opacity: 1,

    }
    return (
        <div style={{display:'flex', flexDirection:"column", justifyContent:"center", backgroundColor: "rgba(255,255,255,0.3)",}}>
            <div  style={dice}>{props.Dice_value}</div>
        </div >
    )
}
