import React, { useState, useContext } from 'react';
import Button from "./Button";
import { SettingsContext } from "../context/SettingsContext";
import image from "../images/Pic.svg"

const SetPomodoro = () => {

    const {updateExecute} = useContext(SettingsContext) //take function updateExecute from context

    const [newTimer, setNewTimer] = useState({
        work: 25,
        short: 5,
        long: 25,
        active: 'work'
    }) //time settings

    const handleChange = input => {
        const {name, value} = input.target
        switch (name) {
            case "work":
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case "shortBreak":
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case "longBreak":
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
            break;
                default:
                    break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateExecute(newTimer)
    }

    return (
        
        <div className="form-container">
            <form noValidate>
            <img src={image} />
                <div className="input-wrapper">
                    <input className="input" name="work" onChange={handleChange} value={newTimer.work | 0}/>
                    <input className="input" name="shortBreak" onChange={handleChange} value={newTimer.short | 0} />
                    <input className="input" name="longBreak" onChange={handleChange} value={newTimer.long | 0}/>
                </div>
                <Button title="Set Timer"  _callback={handleSubmit}/>
            </form>

        </div>

    )
}

export default SetPomodoro;