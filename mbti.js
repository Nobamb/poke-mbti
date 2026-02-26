// mbti 관련 클래스
class MbtiInfo {
  constructor(mbti, description) {
    ((this.mbti = mbti), (this.description = description));
  }
}

// 분석형 (NT - 합리적, 논리적)
// INTJ (전략가): 상상력이 풍부하며 철저한 계획가
// INTP (논리술사): 지적 호기심이 많은 사색가
// ENTJ (통치자): 담대하고 상상력이 풍부한 지도자
// ENTP (변론가): 지적 도전을 즐기는 똑똑한 호기심쟁이
// 외교형 (NF - 이상주의적, 따뜻함)
// INFJ (옹호자): 조용하고 신비로우며 샘솟는 영감
// INFP (중재자): 상냥한 이타주의자
// ENFJ (선도자): 청중을 사로잡는 카리스마 지도자
// ENFP (활동가): 창의적이고 자유로운 영혼
// 관리자형 (SJ - 현실적, 체계적)
// ISTJ (현실주의자): 사실을 근거로 철저하게 관리
// ISFJ (수호자): 헌신적이고 따뜻한 보호자
// ESTJ (경영자): 효율적이고 체계적인 관리자
// ESFJ (집정관): 인기 많은 사교적인 성격
// 탐험가형 (SP - 자율적, 경험 중심)
// ISTP (장인): 대담하고 현실적인 기술자
// ISFP (예술가): 호기심 많은 예술가
// ESTP (사업가): 영리하고 에너지가 넘치는 사람
// ESFP (연예인): 즉흥적이고 열정적인 사람

// mbti 목록
const ISTJ = new MbtiInfo("ISTJ", "(현실주의자): 사실을 근거로 철저하게 관리");
const ISTP = new MbtiInfo("ISTP", "(장인): 대담하고 현실적인 기술자");
const ISFJ = new MbtiInfo("ISFJ", "(수호자): 헌신적이고 따뜻한 보호자");
const ISFP = new MbtiInfo("ISFP", "(예술가): 호기심 많은 예술가");
const INTJ = new MbtiInfo("INTJ", "(전략가): 상상력이 풍부하며 철저한 계획가");
const INTP = new MbtiInfo("INTP", "(논리술사): 지적 호기심이 많은 사색가");
const INFJ = new MbtiInfo("INFJ", "(옹호자): 조용하고 신비로우며 샘솟는 영감");
const INFP = new MbtiInfo("INFP", "(중재자): 상냥한 이타주의자");
const ESTJ = new MbtiInfo("ESTJ", "(경영자): 효율적이고 체계적인 관리자");
const ESTP = new MbtiInfo("ESTP", "(사업가): 영리하고 에너지가 넘치는 사람");
const ESFJ = new MbtiInfo("ESFJ", "(집정관): 인기 많은 사교적인 성격");
const ESFP = new MbtiInfo("ESFP", "(연예인): 즉흥적이고 열정적인 사람");
const ENTJ = new MbtiInfo("ENTJ", "(통치자): 담대하고 상상력이 풍부한 지도자");
const ENTP = new MbtiInfo("ENTP", "(변론가): 지적 도전을 즐기는 똑똑한 호기심쟁이");
const ENFJ = new MbtiInfo("ENFJ", "(선도자): 청중을 사로잡는 카리스마 지도자");
const ENFP = new MbtiInfo("ENFP", "(활동가): 창의적이고 자유로운 영혼");

// MBTI를 전부 넣음
const MBTI = [
  ISTJ,
  ISTP,
  ISFJ,
  ISFP,
  INTJ,
  INTP,
  INFJ,
  INFP,
  ESTJ,
  ESTP,
  ESFJ,
  ESFP,
  ENTJ,
  ENTP,
  ENFJ,
  ENFP,
];


MBTI.forEach((one)=>{

    console.log(one.mbti)

})



// MBTI export
export default MBTI