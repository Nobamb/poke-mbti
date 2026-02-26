// fetch 진행(이미지 받기)
const fetchImg = (pokeUrl) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeUrl}/`, {
    // GET 요청 받음
    method: "GET",
    // application/json 요청
    headers: { "Content-type": "applicaion/json" },
  })
    //   받은 대답을 json => 객체로 변환
    .then((res) => res.json())
    // 객체로 변환한 데이터를 받고,
    .then((data) => {
      // 전체 데이터 확인
      // console.log(data);

      // 전체 데이터에서
      // 이미지를 불러옴
      // sprites.front_default 가져옴
      const sprite = data.sprites.front_default;

      // 출력 테스트
      // console.log(sprite)

      // 반환
      return sprite;
    });

    // export하기
    export default fetchImg