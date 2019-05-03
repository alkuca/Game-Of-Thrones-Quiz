
import React from "react"
import "./finalScore.css"


import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  EmailShareButton,
} from 'react-share';

import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  EmailIcon,
} from 'react-share';

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
    const url = "https://gameofthronequiz.com";
    const title = "The hardest Game of thrones quiz"

    return (
      <div className="final-score-container">
        <div className="final-score-inner-container">
          <h1>{this.makeScoreText(this.props.correctAnswers)}</h1>
          <h2>You got {this.props.correctAnswers} questions right out of 25</h2>
          <p className="social-share-text">Share your score on social media and challenge your friends!</p>
          <div className="social-share-container">
            <FacebookShareButton url={url} quote={"I just answered " + this.props.correctAnswers + " questions right out of 25" }>
              <FacebookIcon size={42} round={true}/>
            </FacebookShareButton>
            <WhatsappShareButton url={url} title={title}>
              <WhatsappIcon size={42} round={true}/>
            </WhatsappShareButton>
            <TwitterShareButton title={title} url={url}>
              <TwitterIcon size={42} round={true}/>
            </TwitterShareButton>
            <ViberShareButton title={title} url={url}>
              <ViberIcon size={42} round={true}/>
            </ViberShareButton>
            <RedditShareButton title={title} url={url}>
              <RedditIcon size={42} round={true}/>
            </RedditShareButton>
          </div>
          <button onClick={this.props.restartQuiz} className="try-again-button">Try Again</button>
        </div>
      </div>
    )
  }
}

export default FinalScore
