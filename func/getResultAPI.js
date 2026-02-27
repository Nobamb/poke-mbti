// mbti 가져옴
import MBTI from "../data/mbti.js"
// pokemon 가져옴
import pokemon from "../data/pokemon.js";

// fetch 관련 함수들 가져옴
import fetchImg from "../fetchFunc/fetchImg.js";
import fetchNameDescription from "../fetchFunc/fetchNameDescription.js";

// pokeMBTIdatas 가져옴
import pokeMBTIdatas from "../data/pokeMBTIdatas.js";
// getDatas 가져옴
import getDatas from "../func/getDatas.js";


// 포켓몬 api를 받는 함수
const getResultAPI = (mbtiValue) => {
//   // 버튼 요소를 받음
//   const formButton = document.querySelector("form>button");

//   // 버튼 연결 테스트
//   // console.log(formButton)

//   // 포켓몬 데이터를 먼저 받아보기

//   // 버튼 받을 경우
//   formButton.addEventListener("click", (e) => {
    // 이벤트 막기
    // 새로고침 방지
    // ajax
    // e.preventDefault();

    // data 받기
    // const inputValue = document.querySelector("form>input").value;

    // data의 값을 보정(무조건 대문자로 보정)
    // const getMBTIValue = inputValue.toUpperCase();
    const getMBTIValue = mbtiValue.toUpperCase();


    // mbti 출력 테스트
    // console.log(getMBTI)

    // 포켓몬과 mbti 변수 초기화

    // let getPokemon;
    // let getMBTIData;

    // 객체 지정
    // 포켓몬,mbti관련 데이터
    // const pokeMBTIdatas = {
    //   getPokemon: "",
    //   getMBTIData: "",
    // };

    // getMBTIValue를 가져와서 mbti와 pokemon의 mbti값 비교
    // value(클라이언트에서 지정한 mbti 값), pokemon, mbti 지정

    // const getDatas = (value, pokemon, mbti) => {
    //   // 배열을 지정
    //   // pokemon, mbti
    //   const datas = [pokemon, mbti];

    //   // data를 모두 순회하여 foreach실행
    //   datas.forEach((elements, index) => {
    //     // 인덱스 지정
    //     const dataIndex = index;

    //     elements.forEach((element) => {
    //       // 만약에 dataIndex가 0이고
    //       // 해당 mbti가 동일 할 때
    //       if (dataIndex === 0 && element.mbti === value) {
    //         // getPokemon을 저장
    //         pokeMBTIdatas.getPokemon = element;
    //       }
    //       // 만약에 dataIndex가 1이고
    //       // 해당 mbti가 동일 할 때
    //       if (dataIndex === 1 && element.mbti === value) {
    //         // getMBTIData를 저장
    //         pokeMBTIdatas.getMBTIData = element;
    //       }
    //     });
    //   });
    // };

    // getdatas 실행
    // getDatas(getMBTIValue, pokemon, MBTI);

    getDatas(getMBTIValue, pokemon, MBTI);


    // // getPokemon출력해보기
    // console.log(pokeMBTIdatas.getPokemon);
    // // getMBTIData출력해보기
    // console.log(pokeMBTIdatas.getMBTIData);

    // // pokemon과 비교
    // pokemon.forEach((element) => {
    //   // 만약에 element의 mbti와
    //   // getMBTIValue가 동일하다면
    //   if (element.mbti === getMBTIValue) {

    //     // getPokemon을 저장
    //     getPokemon = element

    //   }
    // });

    // // mbti와 비교
    // MBTI.forEach((element) => {
    //   // 만약에 element의 mbti와
    //   // getMBTIValue가 동일하다면
    //   if (element.mbti === getMBTIValue) {

    //     // getPokemon을 저장
    //     getMBTIData = element

    //   }
    // });

    // // 결과 출력 테스트
    // // 포켓몬(이름 출력하게 해봄)
    // console.log(getPokemon.name)
    // // MBTI(설명 출력하게 해봄)
    // console.log(getMBTIData.description)

    // 특정 포켓몬의 주소 지정
    // getPokemon의 id로 결정
    const pokeUrl = pokeMBTIdatas.getPokemon.id;

    // console.log(pokeUrl);

    // // fetch 진행(이름 가져오기)
    // const fetchName = (pokeUrl) =>
    //   fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeUrl}/`, {
    //     // GET 요청 받음
    //     method: "GET",
    //     // application/json 요청
    //     headers: { "Content-type": "applicaion/json" },
    //   })
    //     //   받은 대답을 json => 객체로 변환
    //     .then((res) => res.json())
    //     // 객체로 변환한 데이터를 받고,
    //     .then((data) => {
    //       // 내보낼 이름
    //       // 초기화
    //       let resultName;
    //       // 전체 데이터 확인
    //       // console.log(data);

    //       // // 이름 출력
    //       // console.log(data.names);

    //       // 이름을 무조건 가져오게 하기
    //       data.names.find((element) => {
    //         // 언어 이름 지정
    //         const languageName = element.language.name;
    //         // 한국어 지정 시에
    //         if (languageName == "ko") {
    //           // 해당 이름 출력
    //           const krName = element.name;
    //           // console.log(krName);
    //           // 지정
    //           resultName = krName;
    //         }
    //       });

    //       // resultName 반환
    //       return resultName;
    //       // console.log(data.names[2].name);
    //     });

    // // fetch 진행(이미지 받기)
    // const fetchImg = (pokeUrl) =>
    //   fetch(`https://pokeapi.co/api/v2/pokemon/${pokeUrl}/`, {
    //     // GET 요청 받음
    //     method: "GET",
    //     // application/json 요청
    //     headers: { "Content-type": "applicaion/json" },
    //   })
    //     //   받은 대답을 json => 객체로 변환
    //     .then((res) => res.json())
    //     // 객체로 변환한 데이터를 받고,
    //     .then((data) => {
    //       // 전체 데이터 확인
    //       // console.log(data);

    //       // 전체 데이터에서
    //       // 이미지를 불러옴
    //       // sprites.front_default 가져옴
    //       const sprite = data.sprites.front_default;

    //       // 출력 테스트
    //       // console.log(sprite)

    //       // 반환
    //       return sprite;
    //     });

    // Promise.all 진행
    Promise.all([fetchNameDescription(pokeUrl), fetchImg(pokeUrl)]).then(
      (data) => {
        // console.log(data);
        // 요소 생성
        const newElement = {
          // 이미지
          pokeResultImg: document.createElement("img"),
          // 포켓몬 이름
          pokeName: document.createElement("span"),
          // 포켓몬 설명
          pokeDescription: document.createElement("p"),
          // mbti
          MBTIName: document.createElement("span"),
          // mbti설명
          MBTIDescription: document.createElement("p"),
        };

        // img의 src 지정
        newElement.pokeResultImg.src = data[1];

        // 포켓몬 이름 지정
        newElement.pokeName.innerHTML = data[0].name;

        // 포켓몬 설명 지정
        newElement.pokeDescription.innerHTML = data[0].description;

        // mbti 지정
        newElement.MBTIName.innerHTML = pokeMBTIdatas.getMBTIData.mbti;

        // mbti 설명 지정
        newElement.MBTIDescription.innerHTML =
          pokeMBTIdatas.getMBTIData.description;

        // value 값들을 모두 배열 처리
        const elementArr = Object.values(newElement);
        // poke-result 요소 가져옴
        const pokeResult = document.getElementById("poke-result");

        // 요소 초기화
        pokeResult.innerHTML = "";

        // poke-result에 각각의 요소들 다때려넣음
        elementArr.forEach((element) => {
          // 요소들 하나씩 추가
          pokeResult.append(element);
        });
      },
    );
//   });
};


// export 진행
export default getResultAPI