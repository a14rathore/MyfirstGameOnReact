import React, { useState, useEffect } from 'react';
import "../App.css";
import Card from './card';
import Dice from './dice';
export default function Background() {

    const [scores, setscores] = useState({
        p1_score: 0,
        p2_score: 0,
    })
    const [status, setstatus] = useState({
        p1_staus: "dark",
        p2_status: "light",
    });

    const [Rbtn_status, setRbtn_status] = useState(" ")
    const [Dice_value, setDice_value] = useState(0)


        const onclick_roll = () => {

            setDice_value(Math.floor(Math.random() * 11));

            setRbtn_status("disabled");
            if (Dice_value === 7 && status.p1_staus === "dark") {
                setscores((e) => { return { p1_score: 0, p2_score: e.p2_score } });
                setstatus({ p1_staus: "light", p2_status: "dark", });
                setRbtn_status(" ");
            } else if (Dice_value === 7 && status.p2_status === "dark") {
                setscores((e) => { return { p1_score: e.p1_score, p2_score: 0 } });
                setstatus({ p1_staus: "dark", p2_status: "light", });
                setRbtn_status(" ");
            }
        }

    let gamePoint = 50;
    const Add = () => {
        if (scores.p1_score >= gamePoint) {
            setDice_value(0);
            setRbtn_status(" ");
            setscores({ p1_score: 0, p2_score: 0 });
            setstatus({ p1_staus: "dark", p2_status: "light", });
            alert("player 1 won the Game");
            return;
        }
        else if (scores.p2_score >= gamePoint) {
            setDice_value(0);
            setRbtn_status(" ");
            setscores({ p1_score: 0, p2_score: 0 });
            setstatus({ p1_staus: "light", p2_status: "dark", });
            alert("player 2 won the Game");
            return;
        };
        status.p1_staus === "dark" ?
            setscores((e) => { return { p1_score: scores.p1_score + Dice_value, p2_score: e.p2_score } }) :
            setscores((e) => { return { p1_score: e.p1_score, p2_score: scores.p2_score + Dice_value } });
        setRbtn_status(" ");
    };

    const onclick_Switch = () => {
        if (status.p1_staus === "dark") {
            setstatus({ p1_staus: "light", p2_status: "dark", })
            setDice_value(0);
        } else {
            setstatus({ p1_staus: "dark", p2_status: "light", })
            setDice_value(0);
        }
        setRbtn_status(" ");
    };
    return (
        <div className="d-flex justify-content-center my-5 ">
            <Card player={"Player-1"} score={scores.p1_score}
                onclick_roll={onclick_roll}
                onclick_Switch={onclick_Switch}
                status={status.p1_staus}
                Add={Add}
                Rbtn_status={Rbtn_status}
            />
            {/* Abtn_status={Abtn_status}     */}
            <Dice Dice_value={Dice_value} />
            <Card player={"Player-2"} score={scores.p2_score}
                onclick_roll={onclick_roll}
                onclick_Switch={onclick_Switch} status={status.p2_status}
                Add={Add}
                Rbtn_status={Rbtn_status}
            />
            {/* Abtn_status={Abtn_status} */}
        </div>
    )
}
