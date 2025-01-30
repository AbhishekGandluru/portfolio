import React from 'react'
import MyProfileConstants from '../../assets/MyPortfolioConstants';
import './Content.css'

const AboutMe = ({setActiveItem}) => {
    const downloadFromUrl = (url, fileName) => {
        const link = document.createElement('a');
        link.href = url;
        if(fileName)
            link.download=fileName;
        link.click();
    }

    return (
        <section id="About">
        <div className="contact-me">
            <button className="primary" onClick={()=>setActiveItem("Contact")}>Contact me</button>
            <button className="secondary" onClick={()=>{downloadFromUrl(MyProfileConstants.downloadResumeUrl, MyProfileConstants.downloadName)}}><i className="fas fa-download"></i> Resume</button>
        </div>
        <div id="about_me">
            <div className="name heading">{MyProfileConstants.name}</div>
            <div className="introduction">{MyProfileConstants.intro}</div>
            <div className="summary">{MyProfileConstants.summary}</div>
        </div>
        </section>
    )
}

export default AboutMe