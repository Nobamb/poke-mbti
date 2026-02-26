// mbti 가져옴
import MBTI from "./mbti.js";
// pokemon 가져옴
import pokemon from "./pokemon.js";

// 버튼 요소를 받음
const formButton = document.querySelector("form>button");

// 버튼 연결 테스트
// console.log(formButton)

// 포켓몬 데이터를 먼저 받아보기

// 버튼 받을 경우
formButton.addEventListener("click", (e) => {
  // 이벤트 막기
  // 새로고침 방지
  // ajax
  e.preventDefault();

  // data 받기
  const inputValue = document.querySelector("form>input").value;

  // data의 값을 보정(무조건 대문자로 보정)
  const getMBTIValue = inputValue.toUpperCase();

  // mbti 출력 테스트
  // console.log(getMBTI)

  // 포켓몬과 mbti 변수 초기화
  let getPokemon;
  let getMBTIData;

  // getMBTIValue를 가져와서 mbti와 pokemon의 mbti값 비교

  // pokemon과 비교
  pokemon.forEach((element) => {
    // 만약에 element의 mbti와
    // getMBTIValue가 동일하다면
    if (element.mbti === getMBTIValue) {
    
      // getPokemon을 저장
      getPokemon = element
    
    }
  });

  // mbti와 비교
  MBTI.forEach((element) => {
    // 만약에 element의 mbti와
    // getMBTIValue가 동일하다면
    if (element.mbti === getMBTIValue) {
    
      // getPokemon을 저장
      getMBTIData = element
    
    }
  });

  // 결과 출력 테스트
  // 포켓몬(이름 출력하게 해봄)
  console.log(getPokemon.name)
  // MBTI(설명 출력하게 해봄)
  console.log(getMBTIData.description)

  // fetch 진행
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${inputValue}/`, {
    // GET 요청 받음
    method: "GET",
    // application/json 요청
    headers: { "Content-type": "applicaion/json" },
  })
    //   받은 대답을 json => 객체로 변환
    .then((res) => res.json())
    // 객체로 변환한 데이터를 받고,
    .then((data) => {
      // 이름 출력
      console.log(data.names[2].name);
    });
});
