// fetch 진행(이름 가져오기)
const fetchNameDescription = (pokeUrl) =>
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
      // 내보낼 이름과 설명
      let result = {

        name : "",
        description : ""

      };
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
          result.name = krName;
        }
      });

      // 설명도 가져오게 하기
      data.flavor_text_entries.find((element)=>{
        // language의 name 지정
        const langaugeName = element.language.name;
        // langaugeName이 ko일 때
        if(langaugeName === "ko"){
          // 한국어 설명 지정
          const krDescription = element.flavor_text;
          // 지정
          result.description = krDescription
        }

      })


      // result 반환
      return result;
      // console.log(data.names[2].name);
    });

// 내보내기
export default fetchNameDescription;
