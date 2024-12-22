import React from 'react'
import './Programs.css'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import program1_icon from '../../assets/program-icon-1.png'
import program2_icon from '../../assets/program-icon-2.png'
import program3_icon from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program1}/>
            <div className='caption'>
                <img src={program1_icon}/>
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program2}/>
            <div className='caption'>
                <img src={program2_icon}/>
                <p>Masters Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program3}/>
            <div className='caption'>
                <img src={program3_icon}/>
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}

export default Programs