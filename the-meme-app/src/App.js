import React, {Component} from "react";
import Header from "./components/header";
import Meme from "./components/inputboxes";



class App extends Component{
    render(){
        return(
            <>
            <div>
            <Header/>
            <Meme/>
            </div>
            </>
        )
    }
}

export default App
