
import React from "react"
import "./finalScore.css"

class FinalScore extends React.Component{
  constructor(props) {
    super(props);
    this.state = {


    }

  }



  render() {
    return (
      <div className="final-score-container">
        <div className="final-score-inner-container">
          <h1>WOW</h1>
          <h2>Your Score is:</h2>
          <h3>Correct answers: {this.props.correctAnswers}</h3>
          <h3>Incorrect answers: {this.props.incorrectAnswers}</h3>
          <button onClick={this.props.restartQuiz} className="try-again-button">Try Again</button>
        </div>
      </div>
    )
  }
}

export default FinalScore
