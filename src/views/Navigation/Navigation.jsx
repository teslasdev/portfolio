import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className='SHsDDsd daSIiSs'>
        <div className='navigationLayout'>

            {/* Navigation Logo */}
            <div className="Logo">
                <a href='/'>
                  <h6 className="w">T</h6>
                  <h6 className="w">E</h6>
                  <h6 className="w">S</h6>
                  <h6 className="w">L</h6>
                  <h6 className="w">A</h6>
                  <h6 className="w">S</h6>
                  <h6 className="y" style={{marginLeft : 3}}>D</h6>
                  <h6 className="y">E</h6>
                  <h6 className="y">V</h6>
                </a>
            </div>


            {/* Navigation Menu */}


            <div className="navigationMenu shDFmVI">
              <div className='td-saUsyY ShSiSt'>
                <li>Projects
                  <span></span>
                </li>
                <li>About
                  <span></span>
                </li>
                <li>Resume
                  <span></span>
                </li>
                <li>Feedback
                  <span></span>
                </li>
                <li>Blog
                  <span></span>
                </li>
                <li>Contact Me
                  <span></span>
                </li>
              </div>

              <div class="td-iCfMLu cIcsXw">
                <div class="first"></div>
                <div class="second"></div>
                <div class="third"></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation