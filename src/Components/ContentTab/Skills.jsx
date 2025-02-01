import MyPortfolioConstants from "../../constants/MyPortfolioConstants";
import "./Content.css";

const Skills = () => {
    return (
        <section id="Skills">
            <div className="skills">
                <div className="heading">Skills</div>
                {
                    Object.entries(MyPortfolioConstants.skills).map(([key, value]) => (
                        <div key={key}>
                            <div className="skillTitle">{key}</div>
                            <ul className="itemContainer">
                                {value.map((item, index) => (
                                    <li className="skillContent" key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
        </section>
    )
}

export default Skills

