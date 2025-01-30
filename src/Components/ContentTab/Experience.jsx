import MyPortfolioConstants from "../../assets/MyPortfolioConstants";
import './Content.css'

const Experience = () => {
    const experiences = MyPortfolioConstants.experiences;
    return (
        <section id="Experience">
        <div id="experience">
            <div className='heading'>Experience</div>
            <ul>
            {experiences && experiences.map((experience, index)=>
                <li className="experience">
                    <div className="text-left">
                        <div className="university">{experience.jobRole}</div>
                        <div className="organisation">{experience.organisation + ' - '+experience.team}</div>
                        <div className="qualification">{experience.description}</div>
                    </div>
                    <div className="text-right">
                        <div className='period'>{experience.period}</div>
                        <div><i className="fas fa-map-marker-alt"></i>{" "+experience.location}</div>
                    </div>
                </li>
            )}
            </ul>
        </div>
        </section>
    )
}

export default Experience;