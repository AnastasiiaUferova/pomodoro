import React, {useContext} from 'react';
import { SettingsContext } from "../context/SettingsContext";

const Button = ({title, activeClass, _callback}) => {

    const {startAnimation} = useContext(SettingsContext) 

     const classStart = `${startAnimation ? "active-label" : ""}`
     const classPause = `${!startAnimation ? "active-label" : ""}`

     const className = () => {
        if (title==="Start") {
            return classStart
        }
        else if (title==="Pause"){
            return classPause
        }
     }

    return(
        <button className={className()} onClick={_callback}>{title}</button>
    )
}

export default Button;