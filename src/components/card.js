import React from 'react'

export default function card(props) {
    let btn_status = " ";
    if (props.status === "light") {
        btn_status = "disabled";
    }
    return (

        <div className={` card border bg-${props.status} border-4 `}
            style={{ width: "18rem", height: "25rem" }}>
            <div className="card-body d-flex flex-column justify-content-between ">
                <h5 className="card-title shadow-lg p-2  bg-body rounded">{props.player}</h5>
                <p className="shadow-lg p-5 bg-body rounded" style={{ fontSize: "3pc", }}>{props.score}</p>
                <div className="d-flex flex-row justify-content-around">
                    <button className={`btn btn-primary p-3 shadow-lg ${btn_status} ${props.Rbtn_status}`}
                        onClick={() => { props.onclick_roll() }} >Roll &#127756;</button>
                    <button className={`btn btn-success p-3 shadow-lg ${btn_status} ${props.Rbtn_status === "disabled" ? " " : "disabled"}`}
                        onClick={() => { props.Add() }}>Add &#10133;</button>
                </div>

                <button className={`btn btn-danger p-3 my-2 shadow-lg ${btn_status}`}
                    onClick={() => { props.onclick_Switch() }}>Transfer</button>

            </div>
        </div>


    )
}
