import React from 'react'
import './Feedback.css'
import Avatar from '../../image/image.png'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Feedback = () => {
  return (
    <div className='feedback_block'>
        <div className="kLgniI each-slide">
            <div className="review-box">
                <div className="lIJBGyG">
                    <div className='KMcChjL'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita perspiciatis in eum ducimus aliquam nesciunt consequuntur recusandae? Eaque ratione vero nesciunt. Perspiciatis dolores ducimus at facilis sit fuga consectetur.</p>
                    </div>

                    <div className='rIhgBGV'>
                        <img src={Avatar} alt="" srcset="" />
                    </div>

                    <div className='lbuIoP'>
                        <p>Melissa</p>
                    </div>
                </div>

                <div className="lIJBGyG">
                    <div className='KMcChjL'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita perspiciatis in eum ducimus aliquam nesciunt consequuntur recusandae? Eaque ratione vero nesciunt. Perspiciatis dolores ducimus at facilis sit fuga consectetur.</p>
                    </div>

                    <div className='rIhgBGV'>
                        <img src={Avatar} alt="" srcset="" />
                    </div>

                    <div className='lbuIoP'>
                        <p>Melissa</p>
                    </div>
                </div>
            </div>           
        </div> 
    </div>
  )
}

export default Feedback