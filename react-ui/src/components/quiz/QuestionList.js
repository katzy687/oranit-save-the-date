import React from 'react';
import Question from './Question.js';

class QuestionList extends React.Component {
  render() {    
    // console.log(this.props);
    const currentQuestion = this.props.questions.map(question => {
      if (this.props.current === question.id) {
        return <Question key={question.id} question={question}  {...this.props}/>
      }
    })

    return(
      <div className="CurrentQuestion">
        { currentQuestion }
      </div>
    );
  }
}

export default QuestionList;
