// fetch 진행(이름 가져오기)
const fetchName = (pokeUrl) =>
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeUrl}/`, {
    // GET 요청 받음
    method: "GET",
    // application/json 요청
    headers: { "Content-type": "applicaion/json" },
  })
    //   받은 대답을 json => 객체로 변환
    .then((res) => res.json())
    // 객체로 변환한 데이터를 받고,
    .then((data) => {
      // 내보낼 이름
      // 초기화
      let resultName;
      // 전체 데이터 확인
      // console.log(data);

      // // 이름 출력
      // console.log(data.names);

      // 이름을 무조건 가져오게 하기
      data.names.find((element) => {
        // 언어 이름 지정
        const languageName = element.language.name;
        // 한국어 지정 시에
        if (languageName == "ko") {
          // 해당 이름 출력
          const krName = element.name;
          // console.log(krName);
          // 지정
          resultName = krName;
        }
      });

      // resultName 반환
      return resultName;
      // console.log(data.names[2].name);
    });

// 내보내기
export default fetchName;
