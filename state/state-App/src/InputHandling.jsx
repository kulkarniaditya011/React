import { useState } from "react";
import "./inputTxtStyle.css";

function InputText(){
    const [text, setText] = useState("");

    return (

        <div className="input-container">
            <input className="inputText" 
            value={text}
            onChange={(e)=> setText(e.target.value)} />
            <p>You Typed: {text}</p>
        </div>

    );

}

export default InputText;