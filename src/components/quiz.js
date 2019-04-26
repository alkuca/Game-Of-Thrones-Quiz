
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./quiz.css"

class Quiz extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionNumber: 0,
      numberOfQuestions: 2  // all questions number - 1
    }
    this.getAnswers = this.getAnswers.bind(this);
    this.getQuestion = this.getQuestion.bind(this);
    this.getImage = this.getImage.bind(this);
    this.answerClicked = this.answerClicked.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  answerClicked(e, answer, questionNumber,data){
    let answers = document.getElementsByClassName("answers");
    for (let i = 0; i < answers.length; i++) {
      answers[i].style.pointerEvents = "none";
    }
     if(questionNumber < this.state.numberOfQuestions) {
       this.checkAnswer(e,data,questionNumber,answer);

       setTimeout(function(){
         this.setState((prevState) => ({
           currentQuestionNumber: prevState.currentQuestionNumber + 1
         }));
       }.bind(this), 800);

     }else{
       setTimeout(function(){
         this.setState((prevState) => ({
           currentQuestionNumber: 0
         }));
       }.bind(this), 800);
       this.checkAnswer(e,data,questionNumber,answer);
     }
  }

  getAnswers(data,currentQuestionNumber){
    let currentQuestionAnswers = [];
    data.allQuestionsJson.edges[currentQuestionNumber].node.answers.forEach(answer =>
    currentQuestionAnswers.push(
      <h2
        onClick={((e) => this.answerClicked(e, answer,currentQuestionNumber,data))} key={answer} className="answers">
        {answer}
      </h2>
    ))
    return (currentQuestionAnswers)
  }

  getQuestion(data,currentQuestionNumber){
    let currentQuestion = data.allQuestionsJson.edges[currentQuestionNumber].node.question;
    return (currentQuestion)
  }

  getImage(data,currentQuestionNumber){
    let currentImage = data.allQuestionsJson.edges[currentQuestionNumber].node.image;
    return(require(`../images/${currentImage}`))
  }

  checkAnswer(e,data,questionNumber,answer){
    let correctAnwser = data.allQuestionsJson.edges[questionNumber].node.correctAnswer;
    if(answer === correctAnwser){
      console.log(e.target.classList)
      e.target.classList.add("green")
    }else{
      e.target.classList.add("red")
    }
  }



  render() {
    return (
      <StaticQuery
        query={graphql`
      query QuizItemsQuery {
        allQuestionsJson {
          edges {
            node {
              image
              question
              answers
              correctAnswer
            }
          }
         }
      }
    `}
        render={data => (
          <>
            <h1 className="question">{this.getQuestion(data,this.state.currentQuestionNumber)}</h1>
            <img className="question-image" src={this.getImage(data,this.state.currentQuestionNumber)} alt={"question image"}/>
            <div className="answers-container">{this.getAnswers(data,this.state.currentQuestionNumber)}</div>
          </>
        )}
      />
    )
  }
}

export default Quiz
