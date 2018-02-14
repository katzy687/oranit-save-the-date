import React, { Component } from 'react';
import './App.css';
import {questionData, dummyDBData} from './data/questionData';

// quiz imports
import BoxScore from './components/quiz/BoxScore.js';
import QuestionList from './components/quiz/QuestionList.js';
import Results from './components/quiz/Results.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true,
      score: 0,
      // current: 0,
      current: 4, // dummy testing
      questions: questionData,
      answers: [],
      // allDbAnswers: [],
      allDbAnswers: dummyDBData,
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
    console.log('updated answers are:', this.state.answers);
    console.log('db answers are:', this.state.allDbAnswers);
    console.log(this.state);
    
    if (this.state.current > this.state.questions.length - 1 && this.state.dbFetching ) {
      // this.postDataThenGetDb();
      console.log('theoretically posting to db while I manage graphs');
    }
    
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
      <div className="App">
        <p className="App-intro">
          {this.state.fetching
            ? 'Fetching message from API'
            : this.state.message}
        </p>
            
        <div>
          {boxscore}
          <QuestionList storeAnswer={this.storeAnswer.bind(this)} setScore={this.setScore.bind(this)} setCurrent={this.setCurrent.bind(this)} {...this.state} />
          {results}
        </div>

      </div>
    );
  }
}

export default App;
