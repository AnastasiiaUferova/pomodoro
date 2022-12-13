import React, { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../context/SettingsContext";
import useSound from 'use-sound';
import Alarm from "../sounds/Alarm.wav"

const CountdownAnimation = ({ timer=20, children}) => {

    const {stopTimer, startAnimation, pomodoro, setOpen} = useContext(SettingsContext);
    const [play] = useSound(Alarm,  { volume: 0.25 });

    return (
        <CountdownCircleTimer
        key={pomodoro}
        isPlaying={startAnimation}
        duration={timer * 60}
        colors={['#fe6f6b', 0.33]}
        strokeWidth={6}
        size={220}
        trailColor="#151932"
        onComplete={()=>{
            stopTimer() 
            setOpen(true)
            play()
        }}
        >
        {children}
        </CountdownCircleTimer>
    )
}

export default CountdownAnimation