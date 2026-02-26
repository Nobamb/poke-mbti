// pokeMBTIdatas 가져옴
import pokeMBTIdatas from "../data/pokeMBTIdatas.js";


const getDatas = (value, pokemon, mbti) => {
  // 배열을 지정
  // pokemon, mbti
  const datas = [pokemon, mbti];

  // data를 모두 순회하여 foreach실행
  datas.forEach((elements, index) => {
    // 인덱스 지정
    const dataIndex = index;

    elements.forEach((element) => {
      // 만약에 dataIndex가 0이고
      // 해당 mbti가 동일 할 때
      if (dataIndex === 0 && element.mbti === value) {
        // getPokemon을 저장
        pokeMBTIdatas.getPokemon = element;
      }
      // 만약에 dataIndex가 1이고
      // 해당 mbti가 동일 할 때
      if (dataIndex === 1 && element.mbti === value) {
        // getMBTIData를 저장
        pokeMBTIdatas.getMBTIData = element;
      }
    });
  });
};

// getDatas export하기
export default getDatas