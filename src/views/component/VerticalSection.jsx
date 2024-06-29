import React from 'react'
import './VerticalSection.css'


const VerticalSection = (props) => {
  return (
    <div className='projects-vertical' data-aos="flip-up">
        <div className='ghKDMbi-vertical'>
            <div className='texts'>
              <h3>{props.title}</h3>
              <p>This is the landing page for a mobile application that allows you to deposit and withdraw cash and crypto assets with Hifast, explore a world of boundless opportunities and get unlimited access to a better financial experience</p>
             
             
              <div className='Kl89ba6'>
                <span>Laravel</span>
                <span>css</span>
              </div>

              <div className='project-view'>
                <a href='/' className='jLLMBy9'>
                  View Live
                    <div class="project-arrows">
                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_98_55)"><path d="M9.83334 17.1667L16.5 10.5L9.83334 3.83335" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_98_55"><rect width="20" height="17.3207" fill="white" transform="translate(0.679291 20.5) rotate(-90)"></rect></clipPath></defs></svg>
                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_98_55)"><path d="M9.83334 17.1667L16.5 10.5L9.83334 3.83335" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_98_55"><rect width="20" height="17.3207" fill="white" transform="translate(0.679291 20.5) rotate(-90)"></rect></clipPath></defs></svg>
                    </div>
                </a>
              </div>

            </div>

            <div className="project-image-vertical">
                <img src={props.image} />
            </div>

        </div>
    </div>
  )
}

export default VerticalSection