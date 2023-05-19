import React, {Component} from "react";
import me from "../images/trollface.png"

class Header extends Component{
    render(){
        return(
            <>
        
        <header className="header">
            <img alt="" src={me} className="header--image" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
            </>
        )
    }
}

export default Header