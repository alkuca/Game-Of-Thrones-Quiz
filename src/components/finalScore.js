
import React from "react"
import "./finalScore.css"

class FinalScore extends React.Component{
  constructor(props) {
    super(props);
    this.state = {


    }
    this.makeScoreText = this.makeScoreText.bind(this);
  }

  makeScoreText(answers){
    let scoreText;
    if(answers < 5){
      scoreText = "Please try again!"
    }
    else if(answers < 10){
      scoreText = "Not impressive, Try again!"
    }
    else if(answers < 15){
      scoreText = "Not bad"
    }
    else if(answers < 20){
      scoreText = "Well done!"
    }
    else if(answers === 24){
      scoreText = "WOW, you missed only one question. Great job!"
    }
    else if(answers === 25){
      scoreText = "CONGRATULATIONS! You answered everything right. You are a true Game of thrones superfan!"
    }
    return scoreText;
  }


  render() {
    return (
      <div className="final-score-container">
        <div className="final-score-inner-container">
          <h1>{this.makeScoreText(this.props.correctAnswers)}</h1>
          <h2>You got {this.props.correctAnswers} questions right out of 25</h2>
          <button onClick={this.props.restartQuiz} className="try-again-button">Try Again</button>
        </div>
      </div>
    )
  }
}

export default FinalScore
