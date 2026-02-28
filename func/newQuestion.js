import questionDatas from "../data/questionDatas.js";
import getResultAPI from "./getResultAPI.js";


const newQuestion = (index) => {
  // console.log("연결 성공");
  // 질문들 모음
  const questionIE = questionDatas.MBTIQustions[index];

  // mbti question1 지정
  // section
  const mbtiQuestionSection = document.createElement("section");

  // ul 지정
  // section 내부에 ul 깔아두기
  const mbtiQuestionUl = document.createElement("ul");

  // questionIE에 있는 문구들을 나눔
  questionIE.forEach((element) => {
    // li 생성
    const mbtiLi = document.createElement("li");

    // li에 넣을 checkbox 지정
    const mbtiCheckbox = document.createElement("input");

    // 체크 박스의 설정 지정
    // checkbox는 type checkbox로 지정
    mbtiCheckbox.type = "checkbox";

    // li에 값을 넣음
    mbtiLi.innerText = element;

    // mbtiQuestionUl(ul)에 mbtiLi(li)를 넣기
    mbtiQuestionUl.append(mbtiLi);
    // li에는 checkbox도 넣음
    mbtiLi.append(mbtiCheckbox);
  });

  // poke-mbti에
  // mbtiQuestionSection을 넣기
  questionDatas.pokeMBTI.insertAdjacentElement("afterbegin", mbtiQuestionSection);

  // form 지정
  const mbtiQuestionForm = document.createElement("form");

  // mbti question form에 질문들 넣기
  mbtiQuestionForm.append(mbtiQuestionUl);

  // form을 section에 넣음
  mbtiQuestionSection.append(mbtiQuestionForm);

  // button 지정
  const nextButton = document.createElement("button");

  // button에 텍스트 지정
  nextButton.innerText = "다음";

  // button을 form에 넣기
  mbtiQuestionForm.append(nextButton);

  // button에 새롭게 newQuestion 실행
  nextButton.addEventListener("click", (e) => {
    // 이벤트 방지
    e.preventDefault();

    // mbtiQuestionForm의 전체 체크 파악
    const maxMBTI = mbtiQuestionForm.length - 1;

    // 전체 체크에서 절반 지정
    // round로 반올림
    const averageMBTI = Math.round(maxMBTI / 2);

    // console.log
    console.log(averageMBTI);

    // 체크된 mbti의 개수 지정
    let MBTICheck = 0;

    // mbtiQuestionUl 안의 input 순회함

    const mbtiInputValues = mbtiQuestionUl.querySelectorAll("input");

    mbtiInputValues.forEach((element) => {
      // console.log(element.checked)
      // 만약에 element가 checked되었을 때
      if (element.checked) {
        // mbtiCheck값 1 증가
        MBTICheck++;
      }
    });

    // mbtiCheck의 값에 따라 결정
    // mbtiCheck의 값이 maxMBTI의 절반 이상일 때
    if (MBTICheck >= averageMBTI) {
      questionDatas.sendMBTIResult += questionDatas.mbtiList[questionDatas.MBTIIndex][0];
    }
    // 그러지 않을 때
    else {
      questionDatas.sendMBTIResult += questionDatas.mbtiList[questionDatas.MBTIIndex][1];
    }

    // 최대 인덱스 지정
    const maxIndex = questionDatas.MBTIQustions.length - 1;
    // poke-mbti에 innerhtml 제거
    questionDatas.pokeMBTI.innerHTML = "";
    // 만약에 mbtiindex가
    // MBTIQustions의 length - 1(최대 인덱스) 미만이라면
    if (questionDatas.MBTIIndex < maxIndex) {
      // mbti 1증가
      questionDatas.MBTIIndex++;
      // newQuestion 실행
      newQuestion(questionDatas.MBTIIndex);
    }
    //아니라면
    else {
      // getresultapi 실행
      getResultAPI(questionDatas.sendMBTIResult);


    }
  });
};

// export
export default newQuestion;
