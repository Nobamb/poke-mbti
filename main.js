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
  const getMBTI = inputValue.toUpperCase()

  // mbti 출력 테스트
  // console.log(getMBTI)


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
