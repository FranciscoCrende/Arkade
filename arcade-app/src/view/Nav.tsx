import React from "react";

function Nav() {
    return (
        <div id="nav" className="topBar">
            <div className="title">
                <h1 className="titleText" >Arkade</h1>
            </div>
            <div className="titleBarBtns">
                <button id="closeBtn" className="topBtn closeBtn"></button>
                <button id="maxResBtn" className="topBtn maximizeBtn"></button>
                <button id="minimizeBtn" className="topBtn minimizeBtn"></button>

            </div>
        </div>
    )
}
export default Nav;