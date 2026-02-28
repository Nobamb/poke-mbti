// 전체 기능 export 하도록 함수로 감쌈
// questionDatas 가져옴
import questionDatas from "./data/questionDatas.js";
// newQuestion 실행하도록 가져옴
import newQuestion from "./func/newQuestion.js";

const question = () => {

  
  // 로딩시에
  document.addEventListener("DOMContentLoaded", () => {
    // mbtiindex라는 인덱스 지정
    newQuestion(questionDatas.MBTIIndex);
  });


};




// export
export default question;
