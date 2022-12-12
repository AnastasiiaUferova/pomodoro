import React, { useContext, useEffect, useState } from 'react';
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

    useEffect(() => updateExecute(executing), [executing, startAnimation]);

    const [key, setKey] = useState(pomodoro);

  return (
    <div className="App">
      <h1>Pomodoro</h1>
      <small>Be productive the right way</small>
      {pomodoro === 0 ?
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
                  timer={pomodoro}
                  key={key}
                  animate={startAnimation}>
                    {children}
           
             </CountdownAnimation>
        </div>
    </div>
    <div className='button-wrapper'>
      <Button title="Start" activeClass= {startAnimation && "active-label"} _callback={startTimer} />
      <Button title="Pause" activeClass= {!startAnimation && "active-label"} _callback={pauseTimer} />
      <Button title="Restart"  _callback={() => setKey(prevKey => prevKey + 1)} />
    </div>
      </>
}
   

     
    </div>
  );
}


export default App;
