import React from 'react';
import './question.css';

// import ReactAudioPlayer from 'react-audio-player';
// import shakira from '../../assets/audio/chantaje_snip.mp3';

class Question extends React.Component {

  handleChange(e) {
    const { setCurrent, setScore, question, storeAnswer } = this.props;
    e.preventDefault();
    const selected = e.target.value;
    if (selected === question.correct) {
      setScore(this.props.score + 1);
    }
    // save answers to array in state
    storeAnswer(selected);
    setTimeout(() => {
      setCurrent(this.props.current + 1);
    }, 500);
  }

  handleMouseEnter = (index) => {
    this.handlePlay(index);
  }

  handleMouseExit = (index) => {
    this.handlePause(index);
  }

  handlePlay = (index) => {
    if (this['audio'+index]) {
      this['audio'+index].play();
    } else {
      return;
    }
  }

  handlePause = (index) => {
    if (this['audio'+index]) {
      this['audio' + index].pause();
      this['audio' + index].currentTime = 0;
    } else {
      return;
    }

  }

  setBG(e) {
    // e.preventDefault();
    const selected = e.target;
    console.log(selected);

    selected.style.backgroundColor = 'steelblue';
  }

  render() {
    console.log(this.props);
    const { question } = this.props;
    return (
      <div className="question-container animated bounceInLeft">
        <h3>{question.text}</h3>
        <hr />
        <ul className="quiz-list">
          {
            question.choices.map((choice, index) => {
              const audioTag = choice.audioURL ? <audio ref={(audio) => { this['audio'+index] = audio }} src={choice.audioURL}></audio> : null;
              return (
                <li onMouseEnter={() => this.handleMouseEnter(index)} 
                    onMouseLeave={() => this.handleMouseExit(index)}
                    className="list-group-item quiz-item card" 
                    key={choice.id} 
                    tabIndex={index + 1}>
                  <label className="radio-label">
                    <input onChange={this.handleChange.bind(this)} type="radio" name={question.id} value={choice.id} />
                    <div>
                      <p> {choice.text} </p>
                      <div className="quiz-img-container">
                        <img src={choice.imgUrl ? choice.imgUrl : "https://a.playmoss.com//uploads/images/r/e/g/reggaeton-2.jpg"} alt="" />
                      </div>
                    </div>
                  </label>
                  {audioTag}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Question;