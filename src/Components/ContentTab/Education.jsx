import React from 'react'
import MyProfileConstants from '../../constants/MyPortfolioConstants';
import './Content.css'

const Education = () => {
    return (
        <section id="Education">
        <div id="myEducation">
            <div className='heading'>Education</div>
            <ul>
            {
                MyProfileConstants.myEducation.map((item, index) => 
                    <li className="education" key={index}>
                        <div className='text-left'>
                            <div className="university">{item.university}</div>
                            <div className="qualification">{item.qualification}</div>
                            {item.subject && <div className="subject qualification">{item.subject}</div>}
                            <div className="gpa">{item.gpa}</div>
                        </div>
                        <div className='period'>{item.period}</div>
                    </li>
                )   
            }
            </ul>
        </div>
        </section>
    )
}

export default Education