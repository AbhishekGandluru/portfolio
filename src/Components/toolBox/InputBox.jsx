import "./InputBox.css";
import { useState } from "react";

const InputBox = ({ LabelName, containerId, name, isRequired, type}) => {
    LabelName = LabelName ? LabelName : "Input";
    type = type ? type : "text";
    const [value, setValue] = useState("");
    const checkIsEmpty = e => {
        setValue(e.target.value)
        if(e.target.value == "")
            e.target.classList.add("empty")
        else
            e.target.classList.remove("empty")        

    }
    return (
        <div className="wave-group">
            <input required={isRequired} type="text" className="input empty" id={containerId} name={name} value={value} onChange={(e)=>{checkIsEmpty(e)}}/>
            <label className="label" htmlFor={containerId}>
                {LabelName.split("").map((item, index) =>
                    <span key={index} className="label-char" style={{ "--index": index }}>{item === " " ? "\u00A0" : item}</span>
                )}
            </label>
        </div>);
};

export default InputBox;
