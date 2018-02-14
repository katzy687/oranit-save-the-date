import React from 'react';
import {Pie} from 'react-chartjs-2';
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
          data: getAnswerTotals(this.props.allDbAnswers, question.choices)[questionIndex],
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
      return (
      <li key={question.id} style={styles.li}>
        <h2>{question.text}</h2>
        <p>The right answer is <span style={{textDecoration: 'underline', fontStyle: 'bold', fontSize: '1.2rem'}}>{correctChoice.text}</span></p>
        <p>Here's how others answered</p>
        <Pie data={pieData} 
             width={200}
            
        />
      </li>
      )
    })


    const percent = (this.props.score / this.props.questions.length * 100);
    let message;
    if (percent > 80) {
      message = 'You did awesome!';
    } else if (percent < 80 && percent > 60) {
      message = 'You did just fine';
    } else {
      message = 'You did horrible, sorry';
    }
    return (
      <div className="well">
        <h4>You got {this.props.score} out of {this.props.questions.length}</h4>
        <h2>{percent}% - {message}</h2>
        <a className="btn btn-primary" href="https://julianbetancourt.github.io/react-simple-quiz/app/">Take test again</a>
        <ul style={styles.ul}>
          {correctAnswers}
        </ul>
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

function getAnswerTotals(dbAnswers, questionList) {
  // init matrix of empty values same length as question list
  const answerTotals = questionList.map(question => [0, 0, 0 ,0]);

  dbAnswers.forEach((dbAnswerSet, setIndex) => {
    dbAnswerSet.answers.forEach((answer, answerIndex) => {
      switch (answer){
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
  return answerTotals;
}

//// ===================== styles ===========================


const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding:0
  },
  li: {
    padding: '1rem',
    borderRadius: '4px',
    margin: '0 auto 1rem',
    backgroundColor: '#00bcd43d',
    maxWidth: '500px',
  }
}