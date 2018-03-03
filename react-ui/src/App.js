import React, { Component } from 'react';
import './App.css';
import {questionData, dummyDBData} from './data/questionData';

// quiz imports
import BoxScore from './components/quiz/BoxScore.js';
import QuestionList from './components/quiz/QuestionList.js';
import Results from './components/quiz/Results.js';

import bgPic from './assets/pictures/bg.jpeg';
import headerBGPic from './assets/pictures/headerBG.jpeg';

import background from './assets/pictures/bg-1.svg';
import header from './assets/pictures/header.svg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true,
      score: 0,
      current: 0,
      // current: 5, // dummy testing
      questions: questionData,
      answers: [],
      allDbAnswers: [],
      // allDbAnswers: dummyDBData,
      dbFetching: true
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  componentDidUpdate() {
    
    if (this.state.current > this.state.questions.length - 1 && this.state.dbFetching ) {
      this.postDataThenGetDb();
      // console.log('theoretically posting to db while I manage graphs');
    }
    
    console.log('updated answers are:', this.state.answers);
    console.log('db answers are:', this.state.allDbAnswers);
    console.log(this.state);
    
  }

  setCurrent(current) {
    this.setState({ current });
  }
  setScore(score) {
    this.setState({ score });
  }
  storeAnswer(answer) {
    this.setState(prevState => ({
      answers: [...prevState.answers, answer]
    }));
  }

  // mongo post stuff
  postDataThenGetDb() {
    fetch('/answers', {
      method: 'POST', 
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({answers: this.state.answers, score: this.state.score})
    }).then(res => res.json())
    .then(data => console.log(data))
    .then(() => this.getData())
    .catch(err => console.log(err))
  }

  getData() {
    console.log('getting data son!');
    fetch('/answers')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({
          allDbAnswers: json.answers,
          dbFetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          dbFetching: false
        });
      })
  }


  render() {
    let boxscore, results;
    if (this.state.current > this.state.questions.length - 1) {
       boxscore = '';
       results = <Results {...this.state} />
    } else {
       boxscore = <BoxScore {...this.state} />
       results = '';
    }

    return (
      <div className="App" style={{ background: `url(${background})` }}>
        <div className="App-intro" style={styles.header}>
          {/* {this.state.fetching
            ? 'Fetching message from API'
            : this.state.message} */}
            {/* <div style={styles.headerBG}></div> */}
            {/* <div className="header-content" style={styles.headerContent}>
              <h1 style={{fontFamily: 'courier'}}>Oranit & Ben</h1>
              <h3 style={{ fontStyle: 'italic' }}>Save The Date</h3>
              <h5 style={{ fontWeight: 700 }}>13.03.2018</h5>
            </div> */}
          <div className="header-content" style={{ maxWidth: '400px', margin: '0 auto'}}>
            <img  src={header} style={{ width: '100%'}} alt="header-image"/>
          </div>
        </div>
            
        <div className="question-section" style={styles.questionSection}>
          {boxscore}
          <QuestionList storeAnswer={this.storeAnswer.bind(this)} setScore={this.setScore.bind(this)} setCurrent={this.setCurrent.bind(this)} {...this.state} />
          {results}
        </div>

      </div>
    );
  }
}

export default App;


//// ===================== CSS ===========================

const styles = {
  header: {
    // background: `url(${headerBGPic})`,
    // backgroundPosition: 'center',
    // height: '200px',
    // backgroundSize: 'contain',
    margin: 0,
    textAlign: 'center',
    fontFamily: 'Helvetica',
    color: 'black',
    position: 'relative',
    padding: '1rem'
  },
  headerBG: {
    // background: `url(${headerBGPic})`,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100vw',
    backgroundSize: 'contain',
    opacity: '0.3',
    // zIndex: '-5'
  },
  headerContent: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#424242',
    background: '#fafafa',
    width: '310px',
    opacity: '0.8',
    borderRadius: '4px',
    padding: '0 0.5rem'

  },
  questionSection: {
    // background: `url(${bgPic})`,
    padding: '1rem 0'
  }
}