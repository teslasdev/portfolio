import React from 'react'
import HorizonSection from '../component/HorizonSection'
import VerticalSection from '../component/VerticalSection'
import './Sections.css'
import projects from '../data/projectHorizon.json'
import projectsVertical from '../data/projectVertical.json'
import Skills from '../Skills/Skills'
import Feedback from '../Feedback/Feedback'


const Sections = () => {
  return (
    <div>
        <div className='projects'>
            <div className='fhJDKDh'>
                <div className='dHuhsIO'>
                    <h4>Selected project</h4>
                    <h1>Projects</h1>
                </div>
            { projects.map(item => {
                var id = item.id;
                var title = item.title;
                var image = item.image;
                return(
                    <div className='sections' key={id}>
                        <HorizonSection  title={title}  image={image}/>
                    </div>        
                )   
            })}

            <div className='sections-vertical'>
            { projectsVertical.map(itemVertical => {
                var title = itemVertical.title
                var image = itemVertical.image
                return(
                   
                    <VerticalSection  title={title}  image={image}/>
                )
            })}
            </div>

            </div>
        </div>

        {/* Skills */}
         
        <div className='Skills'>
            <div className='fhJDKDh'>
                <div className='dHuhsIO'>
                    <h4>Selected Skills</h4>
                    <h1>Skills</h1>
                </div>

                <Skills />
            
            </div>
         </div>


         {/* Feedback */}
         
        <div className='feedback'>
            <div className='fhJDKDh'>
                <div className='dHuhsIO'>
                    <h4>Selected Feedback</h4>
                    <h1>Feedback</h1>
                </div>
                <Feedback />            
            </div>
         </div>


    </div>
   

    
  )
}

export default Sections