import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import QuestionList from './QuestionList';

const data = {
  labels: [
    'a',
    'b',
    'c',
    'd'
  ],
  datasets: [{
    data: [300, 50, 100, 200],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#4CAF50'
    ],
    hoverBackgroundColor: [
      '#FF6385',
      '#36A2EC',
      '#FFCE57',
      '#4CAF55'
    ]
  }]
};

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerTotals: this.props.questions.map(question => [0, 0, 0, 0])
    }
  }

  componentDidUpdate() {
    this.getAnswerTotals();
  }

  getAnswerTotals() {

    if (this.props.allDbAnswers.length > 0) {
      // init matrix of empty values same length as question list
      const answerTotals = this.props.questions.map(question => [0, 0, 0, 0]);

      this.props.allDbAnswers.forEach((dbAnswerSet, setIndex) => {
        dbAnswerSet.answers.forEach((answer, answerIndex) => {
          switch (answer) {
            case 'a':
              answerTotals[answerIndex][0]++;
              break;
            case 'b':
              answerTotals[answerIndex][1]++;
              break;
            case 'c':
              answerTotals[answerIndex][2]++;
              break;
            case 'd':
              answerTotals[answerIndex][3]++;
              break;
          }
        })
      })

      console.log('answerTotals', answerTotals);
      // return answerTotals;
      if (this.state.answerTotals[0][0] === 0) {
        this.setState({ answerTotals: answerTotals });
      }
    }
  }


  render() {
    console.log('allDbAnswers yayhuz', this.props.allDbAnswers);
    // const transformedAnswers = this.props.allDbAnswers.map(answerSet => {
    //   const 
    // })

    const correctAnswers = this.props.questions.map((question, questionIndex) => {
      const correctChoice = getCorrectChoice(question.correct, question.choices);

      const pieData = {
        labels: getChoicesText(question.choices),
        datasets: [{
          data: this.state.answerTotals[questionIndex],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4CAF50'
          ],
          hoverBackgroundColor: [
            '#f4272a',
            '#3642eb',
            '#f4b929',
            '#18ad2e'
          ]
        }]
      };

      const myAnswer = this.props.questions[questionIndex].choices.find((choice) => {
        return choice.id === this.props.answers[questionIndex]
      }).text;
      console.log('myAnswer', this.props.answers[questionIndex]);
      console.log('myanswer2', myAnswer);

      return (
        <li key={question.id} style={styles.li}>
          <h2>{question.text}</h2>
          {/* <p>The right answer is <span style={{textDecoration: 'underline', fontStyle: 'bold', fontSize: '1.2rem'}}>{correctChoice.text}</span></p> */}
          <p>{`ענית "${myAnswer}"`}</p>
          <p>ככה ענו הקהל</p>
          <HorizontalBar data={pieData}
            width={200}
            options={
              {
                legend: { display: false },
                scales: {
                  yAxes: [{
                    ticks: {
                      fontColor: 'white'
                    }
                  }],
                  xAxes: [{
                    ticks: {
                      fontColor: 'white'
                    }
                  }]
                }
              }
            }
          />
        </li>
      )
    })


    const percent = (this.props.score / this.props.questions.length * 100);
    let message;
    if (percent > 80) {
      message = 'מצוין!';
    } else if (percent < 80 && percent > 60) {
      message = 'סביר';
    } else {
      message = 'חחחח';
    }
    return (
      <div className="well" style={{ direction: 'rtl', color: 'white' }} >
        {/* <h4>ק'בלת {this.props.score} מתוך {this.props.questions.length}</h4> */}
        {/* <h2>{percent}% - {message}</h2> */}
        <h1 className="well trans-card" style={{ width: '200px', margin: '1.5rem auto', fontSize: '3rem' }}>
          תוצאות
        </h1>
        <ul style={styles.ul}>
          {correctAnswers}
        </ul>
        <h1 style={{ color: 'white', fontSize: '3rem', display: 'inline-block', borderRadius: '4px', background: '#BA68C8', padding: '0 1.5rem' }}>נתראה תיכף חברים!</h1>
      </div>
    );
  }
}

export default Results;

//// ===================== helpers ===========================

function getCorrectChoice(correctId, choices) {
  const correctChoice = choices.filter(choice => choice.id === correctId);
  console.log('correcthoice', correctChoice);
  return correctChoice[0];
}

function getChoicesText(choices) {
  return choices.map(choice => choice.text);
}



//// ===================== styles ===========================


const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  li: {
    padding: '1rem',
    borderRadius: '4px',
    margin: '0 auto 1rem',
    backgroundColor: '#00bcd43d',
    maxWidth: '500px',
  }
}