import React, { Component } from 'react';
import CategoryName from './categoryName';
import BackButton from './backButton';
import NextQuestionButton from './nextQuestionButton'
import GetAnswerButton from './getAnswerButton';
import QuestionBox from './questionBox'
import { Link } from "react-router-dom";


class QuestionPage extends Component {
  render() {
    return <div>
      <div style={styles.categoryName}>
        <CategoryName />
      </div>
      <div style={styles.questionBox}>
        <QuestionBox />
      </div>
      <div style={styles.getAnswerButton}>
        <Link to="/answerpage">
          <GetAnswerButton />
        </Link>
      </div>
      <div style={styles.backButton}>
        <BackButton />
      </div>
      <div style={styles.nextQuestionButton}>
        <NextQuestionButton />
      </div>
    </div>
  }
}

const styles = {
  categoryName: {
    display: 'flex',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 810,
    left: 50,
  },
  nextQuestionButton: {
    position: 'absolute',
    top: 810,
    left: 1390,
  },
  getAnswerButton: {
    position: 'absolute',
    top: 750,
    left: 320,
  },
  questionBox: {
    position: 'absolute',
    top: 180,
    left: 320,
  }
}
export default QuestionPage;
