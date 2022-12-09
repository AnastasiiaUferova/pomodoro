import React, {createContext, useState} from 'react';
export const SettingsContext = createContext()

const SettingsContextProvider = (props) => {
    
    const [pomodoro, setPomodoro] = useState(0);
    const [executing, setExecuting] = useState({});
    const [startAnimation, setStartAnimation] = useState(false);

    function startTimer() {
        setStartAnimation(true);
    }

    function pauseTimer() {
        setStartAnimation(false);
    }

    function stopTimer() {
        setStartAnimation(false);
    }

    const SettingsBtn = () => {
        setExecuting({})
        setPomodoro(0)
    }

    //update the settings of the timer
    const updateExecute = (updatedSettings) => {
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings)
    }

    function setCurrentTimer(active_state){
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)
    }

    const setTimerTime = evaluate => {
        switch(evaluate.active) {
            case 'work':
                setPomodoro(evaluate.work)
                break;
            case 'short':
                setPomodoro(evaluate.short)
                break;
            case 'long':
                setPomodoro(evaluate.long)
                break;
            default:
                setPomodoro(0)
                break;
        }
    }

    const children = ({remainingTime}) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60
        return `${minutes}:${seconds}`
    }


    return(
    <SettingsContext.Provider value ={{
        stopTimer, 
        updateExecute,
        pomodoro,
        executing,
        startAnimation,
        startTimer,
        SettingsBtn,
        setCurrentTimer,
        pauseTimer,
        children
        }}>
        {props.children}
    </SettingsContext.Provider>
    )
}

export default SettingsContextProvider;