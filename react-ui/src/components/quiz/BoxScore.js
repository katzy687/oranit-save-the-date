import React from 'react';

class BoxScore extends React.Component {
  render() {
    return(
      <div className="well trans-card" style={{width: '200px', margin: '0 auto', fontSize: '1.5rem'}}>
        {this.props.current + 1} / {this.props.questions.length} שאלה
      </div>
    );
  }
}

export default BoxScore;
