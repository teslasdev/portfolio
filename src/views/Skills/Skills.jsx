import React from 'react'
import './Skills.css'
import skill from '../data/skill.json'

const Skills = () => {
  return (
    <div className='skill_block'>
        <div className="kKHDUui">
            <div className='skill_text'>
                <p>In my 2+ years of frontend development, I've worked on a variety of projects, laying up UI with great attention to details. I've also had the chance to work with the React framework, and I'm always learning new things to better my skills.</p>
                <p>I currently have a background in user experience design, thus I'm used to building for while maintaining a high level of user experience.</p>
                <p> In addition, I am a mobile-first developer. I actively ensure that each component I develop is totally responsive on all devices before moving to the next component.</p>
            </div>

            <div className='skill_tools'>
                <div className='BuhiOTR'>
                    { skill.map(item => {
                        return (
                            <span>{item.type}</span>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills