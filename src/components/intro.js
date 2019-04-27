
import React from "react"
import "./intro.css"

class Intro extends React.Component{
  constructor(props) {
    super(props);
    this.state = {


    }

  }



  render() {
    return (
      <div className="intro-container">
        <div className="intro-inner-container">
          <h1 className="intro-title"> You are about to play the hardest Game of thrones Quiz out there.</h1>
          <p className="intro-warrning">Take your time to think and try not to guess.</p>
          <p>Are you ready?</p>
          <button className="intro-button" onClick={this.props.startQuiz}>START QUIZ</button>
        </div>
      </div>
    )
  }
}

export default Intro
