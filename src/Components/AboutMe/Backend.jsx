import React from 'react'
import './Techstack.css';
import node from '../../assets/nodejs.png';
import mongo from '../../assets/mongodb.png';
import express from '../../assets/express.png';
import sql from '../../assets/sql.png';
import vercel from '../../assets/vercel.png';
import rest from '../../assets/rest.png';
import postman from '../../assets/postman.png';
const Backend = () => {
  return (
    <div className='cr_body backend'>
      <span>BACKEND & API</span>
      <hr style={{ width: '100%', margin: '6px 0', borderColor: '#C3DAE3' }} />
      <div className='stack_content'>
        <div className="stack">
          <img src={node} />
          <span>Node Js</span>
        </div>
        <div className="stack">
          <img src={mongo} />
          <span>Mongo DB</span>
        </div>
        <div className="stack">
          <img src={express} />
          <span>Express Js</span>
        </div>
        <div className="stack">
          <img src={sql} />
          <span>SQL</span>
        </div>
        <div className="stack">
          <img src={vercel} />
          <span>Vercel</span>
        </div>
      <hr style={{ width: '100%', margin: '6px 0', borderColor: '#C3DAE3' }} />
        <div className="stack">
          <img src={rest} />
          <span>REST</span>
        </div>
        <div className="stack">
          <img src={postman} />
          <span>POSTMAN</span>
        </div>
      </div>
    </div>
  )
}

export default Backend