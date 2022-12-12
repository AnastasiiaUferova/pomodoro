import React, { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../context/SettingsContext";

const CountdownAnimation = ({ timer=20, children}) => {

    const {stopTimer, startAnimation, pomodoro} = useContext(SettingsContext)

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
        }}
        >
        {children}
        </CountdownCircleTimer>
    )
}

export default CountdownAnimation