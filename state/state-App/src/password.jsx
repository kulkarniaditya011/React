import { useState } from "react";
import "./passwordToggle.css"

function PasswordToggle(){
    const [show, setShow]= useState(false);

    return (
        <div className="password-toggle-container">
        <input type={show ? "text":"password"} placeholder="Enter password"/>
        <button onClick={()=> setShow(!show)}>
            {show ? "hide": "show"}
        </button>

        </div>
    );
}
export default PasswordToggle;