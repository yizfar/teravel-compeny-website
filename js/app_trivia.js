import {question_ar} from "./dataTrivia.js"
import {declareTriviaElements, showQuestion} from "./questionAnswers.js"
let counter = 0;

let q_ar // מערך משתנה של כל השאלות
window.onload = () => {
  init();
}

const init = () => {
  // _ -> קשור ללאו דש ברגע שחיברנו את הקובץ
  // ל הטמל אוטומטית יש הגדרה שהוא גלובלי בכל הקוד
  
  // מערבב את המערך המקורי רק בהתחלה של האפליקצהי
  q_ar = _.shuffle(question_ar);
  
  declareTriviaElements()
  showNextQuestion()

}

export const showNextQuestion = () => {
  console.log(question_ar);
  console.log(q_ar);

  showQuestion(q_ar[counter])

  counter++;
}