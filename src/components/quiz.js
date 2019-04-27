
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./quiz.css"
import Intro from "../components/intro"
import FinalScore from "../components/finalScore"

class Quiz extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionNumber: 0,
      numberOfQuestions: 2,
      startQuiz : false,
      quizFinished: false,
      correctAnswers:0,
      incorrectAnswers:0,
      actualQuestionNumber:1,
      actualNumberOfQuestions:3
    }
    this.getAnswers = this.getAnswers.bind(this);
    this.getQuestion = this.getQuestion.bind(this);
    this.getImage = this.getImage.bind(this);
    this.answerClicked = this.answerClicked.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
    this.finishQuiz = this.finishQuiz.bind(this);
    this.restartQuiz = this.restartQuiz.bind(this);
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
           currentQuestionNumber: prevState.currentQuestionNumber + 1,
           actualQuestionNumber: prevState.actualQuestionNumber + 1
         }));
       }.bind(this), 800);

     }else{
       setTimeout(function(){
         this.setState(() => ({
           currentQuestionNumber: 0,
           actualQuestionNumber: 1
         }));
       }.bind(this), 800);
       this.checkAnswer(e,data,questionNumber,answer);
       this.finishQuiz();
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
      this.setState({
        correctAnswers: this.state.correctAnswers +1
      })
      e.target.classList.add("green")
    }else{
      e.target.classList.add("red")
      this.setState({
        incorrectAnswers: this.state.incorrectAnswers +1
      })
    }
  }

  finishQuiz(){
    setTimeout(function(){
      this.setState({
        quizFinished: !this.state.quizFinished
      })
    }.bind(this), 700);
  }

  startQuiz(){
    this.setState({
      startQuiz: !this.state.startQuiz,
      correctAnswers:0,
      incorrectAnswers:0
    })
  }

  restartQuiz(){
    this.setState({
      currentQuestionNumber: 0,
      actualQuestionNumber:1,
      startQuiz : false,
      quizFinished: false,
      correctAnswers:0,
      incorrectAnswers:0
    })
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
            { !this.state.startQuiz ? <Intro startQuiz={this.startQuiz}/> :
              <div>
                { !this.state.quizFinished ?
                  <div>
                    <h1 className="question">{this.getQuestion(data, this.state.currentQuestionNumber)}</h1>
                    <img className="question-image" src={this.getImage(data, this.state.currentQuestionNumber)}
                         alt="question"/>
                    <div className="answers-container">{this.getAnswers(data, this.state.currentQuestionNumber)}</div>
                    <div className="score">
                      <p>question {this.state.actualQuestionNumber}/{this.state.actualNumberOfQuestions}</p>
                      <p>correct: {this.state.correctAnswers}</p>
                      <p>incorrect: {this.state.incorrectAnswers}</p>
                    </div>
                  </div>
                :
                <FinalScore restartQuiz={this.restartQuiz} correctAnswers={this.state.correctAnswers} incorrectAnswers={this.state.incorrectAnswers}/>
                }
              </div>
            }
          </>
        )}
      />
    )
  }
}

export default Quiz
