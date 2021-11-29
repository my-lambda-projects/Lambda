import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getTrivia, triviaAnsweredWith } from "../actions";
let shuffledAnswers = [];

const Trivia = (props) => {
  console.log(props);
  const shuffleAnswers = () => {
    const answerList = [
      ...props.triviaQuestion.incorrect_answers,
      props.triviaQuestion.correct_answer,
    ];

    if (
      JSON.stringify(shuffledAnswers.sort()) !==
      JSON.stringify(answerList.sort())
    ) {
      var currentIndex = answerList.length,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [answerList[currentIndex], answerList[randomIndex]] = [
          answerList[randomIndex],
          answerList[currentIndex],
        ];
      }

      return answerList;
    } else return shuffledAnswers;
  };
  shuffledAnswers = shuffleAnswers();

  useEffect(() => {
    props.onFetchTrivia();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const verifyAnswer = (ev) => {
    ev.preventDefault();
    console.log(ev.target.value, props.triviaQuestion.correct_answer);
    if (props.correct === null) {
      if (ev.target.value === props.triviaQuestion.correct_answer) {
        props.onTriviaAnswered(true);
      } else {
        props.onTriviaAnswered(false);
      }
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{atob(props.triviaQuestion.question)}</Card.Title>
        {shuffledAnswers.map((answer) => {
          return (
            <Button
              onClick={verifyAnswer}
              block
              value={answer}
              size="lg"
              variant="primary"
            >
              {atob(answer)}
            </Button>
          );
        })}
        <Card.Footer>
          <strong>
            {(() => {
              if (props.correct !== null) {
                return props.correct ? "Correct!" : "Incorrect!";
              } else return null;
            })()}
          </strong>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    triviaQuestion: state.triviaQuestion,
    correct: state.correct,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    onFetchTrivia: () => {
      dispatch(getTrivia());
    },
    onTriviaAnswered: (correct) => {
      dispatch(triviaAnsweredWith(correct));
    },
  };
};
export default connect(mapStateToProps, mapDispatchProps)(Trivia);
