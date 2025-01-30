import { useEffect, useState } from "react";
import myPortfolioConstants from "../../assets/MyPortfolioConstants";
import "./Content.css";

const Awards = () => {
    const [selectedPic, setSelectedPic] = useState("");
    useEffect(()=> {
        const handleEsc = (e)=>{
            if(e.key == "Escape")
                setSelectedPic(null);
        }
        if(selectedPic)
            window.addEventListener("keydown",handleEsc);
        return ()=>{window.removeEventListener("keydown",handleEsc)};

    },[selectedPic]);
    const awards = myPortfolioConstants.Awards;
    return (
        <>
        <section id="Awards">
            <div className='heading'>Awards</div>
            <div className="grid-container">
                {awards.map( award => 
                    <div className="grid-items"
                        style={{height:award.height?award.height+"px":"160px",width:award.width?award.width+"px":"160px"}}
                    >
                        <div className="hover-overlay" onClick={()=>{setSelectedPic(award)}}>
                            <div className="description">{award.description}</div>
                        </div>
                        <img src={(`/src/assets/${award.awardPath}`)} alt="Award" height={award.height?String(award.height):"160px"} width={award.width?String(award.width):"160px"}/>
                    </div>
                )}
            </div>
        </section>
        {selectedPic && (
        <>
            <div
                className="popupOverlay"
                onClick={() => setSelectedPic(null)}
            ></div>

            <div className="popupPic">
                <i
                    className="fa-solid fa-x"
                    onClick={() => setSelectedPic(null)}
                ></i>
                <img
                    src={`/src/assets/${selectedPic.awardPath}`}
                    alt="Award"
                    height={selectedPic.height * 5 || "800px"}
                    width={selectedPic.width * 5 || "800px"}
                />
            </div>
        </>
    )}
        </>
    )
}

export default Awards

