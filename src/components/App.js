import React, { useContext, useEffect } from 'react';
import Button from './Button';
import SetPomodoro from './SetPomodoro';
import CountdownAnimation from './CountdownAnimation';
import { SettingsContext } from '../context/SettingsContext';


function App() {
  const {
    pomodoro, 
    executing, 
    setCurrentTimer, 
    SettingsBtn, 
    children,
    startAnimation,
    startTimer,
    pauseTimer,
    updateExecute} = useContext(SettingsContext);

    useEffect(() => updateExecute(executing), [executing, startAnimation])

  return (
    <div className="App">
      <h1>Pomodoro</h1>
      <small>Be productive the right way</small>
      {pomodoro ===0 ?
      <SetPomodoro /> : 
      <>
    <ul className='labels'>
      <li>
        <Button 
        title="Work"
        activeClass={executing.active === 'work' && 'active-label'}
        _callback = {() => setCurrentTimer('work')}
        />
      </li>

      <li>
        <Button 
        title="Short Break"
        activeClass={executing.active === 'short' && 'active-label'}
        _callback = {() => setCurrentTimer('short')}
        />
      </li>

      <li>
        <Button 
        title="Long Break"
        activeClass={executing.active === 'long' && 'active-label'}
        _callback = {() => setCurrentTimer('long')}
        />
      </li>
    </ul>
    <Button title="Settings" _callback={SettingsBtn} />
    <div className="time-container">
        <div className='time-wrapper'>
             <CountdownAnimation
                  key={pomodoro}
                  timer={pomodoro}
                  animate={startAnimation}>
                    {children}
           
             </CountdownAnimation>
        </div>
    </div>
    <div className='button-wrapper'>
      <Button title="Start" actuveClass= {!startAnimation && "active"} _callback={startTimer} />
      <Button title="Pause" actuveClass= {startAnimation && "active"} _callback={pauseTimer} />
    </div>
      </>
}
   

     
    </div>
  );
}


export default App;
