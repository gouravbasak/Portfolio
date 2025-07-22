import React from 'react';
import './Techstack.css';
import rj from '../../assets/react.png';
import rd from '../../assets/Redux.png'; 
import next from '../../assets/next.png'
import vite from '../../assets/Vitejs.png'
import mui from '../../assets/material-ui.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
const Frontend = () => {
  return (
    <div className='cr_body front'>
        <span>FRONTEND</span>
        <hr style={{ width: '100%', margin: '6px 0', borderColor: '#C3DAE3' }} />
        <div className='stack_content'>
          <div className="stack">
            <img src={rj} /> 
            <span>React Js</span>
          </div>
          <div className="stack">
            <img src={rd} /> 
            <span>Redux</span>
          </div>
          <div className="stack">
            <img src={next} /> 
            <span>Next js</span>
          </div>
          <div className="stack">
            <img src={vite} /> 
            <span>Vite</span>
          </div>
          <div className="stack">
            <img src={mui} /> 
            <span>Material UI</span>
          </div>
          <div className="stack">
            <img src={html} /> 
            <span>HTML</span>
          </div>
          <div className="stack">
            <img src={js} /> 
            <span>JavaScript</span>
          </div>
          <div className="stack">
            <img src={css} /> 
            <span>CSS</span>
          </div>
        </div>
    </div>
  )
}

export default Frontend