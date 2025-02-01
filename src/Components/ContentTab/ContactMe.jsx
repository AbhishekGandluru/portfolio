import React from 'react'
import MyProfileConstants from '../../constants/MyPortfolioConstants';
import './Content.css'
import InputBox from '../toolBox/InputBox';

const ContactMe = () => {
    const contactMe = MyProfileConstants.contactMe;
    const downloadFromUrl = (url, fileName) => {
        const link = document.createElement('a');
        link.href = url;
        if(fileName)
            link.download=fileName;
        link.click();
    }
    
    return (
        <section id="Contact">
        <div id="contact-me">
            <div className="heading">Get in Touch</div>
            {contactMe.intro && <span className="summary">{contactMe.intro}</span>}
            <div className="contact">
                <div className="contact-left">
                    <span className="title">Reach Out</span>
                    <form
                        id="contactForm"
                        action="https://docs.google.com/forms/d/e/1FAIpQLSfwKKGAwiZXcVtn8uicIBwtht0NpnUUH5buE-cH089k4S2_BQ/formResponse"
                        method="POST"
                        target="_blank"
                    >
                        <InputBox LabelName="Name" containerId="name" name="entry.2005620554" isRequired={true}/>
                        <InputBox LabelName="Email Address" containerId="email" name="entry.1045781291" isRequired={true}/>
                        <InputBox LabelName="Phone Number" containerId="phoneNumber" name="entry.1166974658" isRequired={false} type="tel"/>
                        <InputBox LabelName="Comments" containerId="comments" name="entry.839337160" isRequired={true}/>
                        <div className='submitButtons'>
                        <button className='primary' type="submit"><i className="fas fa-paper-plane"></i>{" Send Message"}</button>
                        </div>
                    </form>
                </div>
                <div className="contact-right">
                <div className="title">Contact Information</div>
                    <div className="contactInfo">
                    <a href={"mailto:"+contactMe.emailId}>
                        <i className="fas fa-envelope"></i>
                        <span>{contactMe.emailId}</span>
                    </a>
                    </div>
                    <div className="contactInfo">
                    <a href="javascript:void(0);">
                        <i className="fas fa-phone"></i>
                        <span>{contactMe.mobile}</span>
                    </a>
                    </div>
                    <div className="contactInfo">
                    <a href="javascript:void(0);">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{contactMe.location}</span>
                    </a>
                    </div>
                    <div className="contactInfo QuickLinks">
                    <a href={contactMe.linkedIn} target="_blank">
                        <i className="fab fa-linkedin" ></i>
                    </a>
                    <a href={contactMe.github} target="_blank">
                        <i className="fab fa-github" ></i>
                    </a>
                    </div>
                    <div className='downloadResumeBtn'>
                    <button className="secondary" onClick={()=>{downloadFromUrl(MyProfileConstants.downloadResumeUrl, MyProfileConstants.downloadName)}}><i className="fas fa-download"></i> Resume</button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default ContactMe