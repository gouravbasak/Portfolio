import React from 'react'
import './Techstack.css';
import vscode from '../../assets/vscode.png';
import yarnnpm from '../../assets/yarn.png';
import github from '../../assets/git.png';
import azure from '../../assets/ado.png';
import netlify from '../../assets/netlify.png';
import cicd from '../../assets/cicd.png';
import figma from '../../assets/figma.png';
import jest from '../../assets/jest.png';
const Tools = () => {
  return (
    <div className='cr_body tools'>
        <span>TOOLS</span>
        <hr style={{ width: '100%', margin: '6px 0', borderColor: '#C3DAE3' }} />
    <div className='stack_content'>
        <div className="stack">
          <img src={vscode} alt="VSCode" />
          <span>VSCode</span>
        </div>
        <div className="stack">
          <img src={yarnnpm} alt="Yarn/NPM" />
          <span>Yarn/ NPM</span>
        </div>
        <div className="stack">
          <img src={github} alt="Git/GitHub" />
          <span>Git/GitHub</span>
        </div>
        <div className="stack">
          <img src={azure} alt="Azure DevOps" />
          <span>Azure devops</span>
        </div>
        <div className="stack">
          <img src={netlify} alt="Netlify" />
          <span>Netlify</span>
        </div>
        <div className="stack">
          <img src={cicd} alt="CI/CD" />
          <span>CI/CD</span>
        </div>
        <div className="stack">
          <img src={figma} alt="Figma" />
          <span>Figma</span>
        </div>
        <div className="stack">
          <img src={jest} alt="Jest" />
          <span>Jest</span>
        </div>
      </div>
      </div>
  )
}

export default Tools