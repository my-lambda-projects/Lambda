import {
  FETCH_TRIVIA_START,
  FETCH_TRIVIA_FAIL,
  FETCH_TRIVIA_SUCCESS,
  TRIVIA_ANSWERED,
} from "../actions";

const initialState = {
  //#region
  triviaQuestion: {
    category: "RW50ZXJ0YWlubWVudDogVmlkZW8gR2FtZXM=",
    type: "bXVsdGlwbGU=",
    difficulty: "bWVkaXVt",
    question:
      "V2hhdCB3YXMgdGhlIGNoYXJhY3RlciBLaXJieSBvcmlnaW5hbGx5IGdvaW5nIHRvIGJlIG5hbWVkPw==",
    correct_answer: "UG9wb3Bv",
    incorrect_answers: ["RGVkZWRl", "V2FkZGxlIERlZQ==", "UHJpbmNlIFB1ZmY="],
  },
  //#endregion
  error: "",
  isFetching: false,
  correct: null,
};

const reducer = (state = initialState, action) => {
  console.log("reducer @", action);
  switch (action.type) {
    case FETCH_TRIVIA_START:
      return {
        ...state,
        isFetching: true,
        correct: null,
        error: "",
      };
    case FETCH_TRIVIA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        triviaQuestion: action.payload,
      };
    case FETCH_TRIVIA_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case TRIVIA_ANSWERED:
      console.log("TRIVIA ANSWERED!");
      return {
        ...state,
        correct: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
