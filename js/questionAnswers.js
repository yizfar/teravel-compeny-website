import {showNextQuestion} from "./app_trivia.js"

// קובץ שיהיה אחראי על הצגת השאלות
// ועל האירועים של לחיצת התשובות

let q , a1, a2, a3, a4;
let correctAnswer

export const declareTriviaElements = () => {
  q = document.querySelector("#id_q");
  a1 = document.querySelector("#id_a1");
  a2 = document.querySelector("#id_a2");
  a3 = document.querySelector("#id_a3");
  a4 = document.querySelector("#id_a4");

  a1.addEventListener("click" , () => {
    if(a1.innerHTML == correctAnswer){
      alert("Correct answer")
      showNextQuestion()
    }
    else{
      alert("no,you worng,try again!!!!")
    }
  })
  a2.addEventListener("click" , () => {
    if(a2.innerHTML == correctAnswer){
      alert("you right")
      showNextQuestion()
    }
    else{
      alert("no,you worng!!!!")
    }
  })
  a3.addEventListener("click" , () => {
    if(a3.innerHTML == correctAnswer){
      alert("ok")
      showNextQuestion()
    }
    else{
      alert("no,you worng,try again!!!!!!!!")
    }
  })
  a4.addEventListener("click" , () => {
    if(a4.innerHTML == correctAnswer){
      alert("Correct")
      showNextQuestion()
    }
    else{
      alert("no, try again!!!!")
    }
  })
  
}



export const showQuestion = (_itemQ) => {
  // itemQ = השאלה עצמה עם 5 מאפיינים
  // מייצר מערך מקומי בשביל לערבב את התשובות
  let ar = [_itemQ.a1,_itemQ.a2,_itemQ.a3,_itemQ.a4]
  ar = _.shuffle(ar);

  // מגדיר שהמשתנה הנל שהוא גלובלי לקובץ שווה
  // לתשובה הנכונה
  // _itemQ.a1 -> איי 1 תמיד הוא התשובה הנכונה
  correctAnswer = _itemQ.a1;

  q.innerHTML = _itemQ.q;
  // מדפיס את התשובות לפי הסדר החדש של הערבוב במערך
  a1.innerHTML = ar[0];
  a2.innerHTML = ar[1];
  a3.innerHTML = ar[2];
  a4.innerHTML = ar[3];
}