/* =========================================================
   AEM LAB - 공통 정보
   ---------------------------------------------------------
   이 파일은 모든 페이지에서 공통으로 사용하는 정보입니다.
   연구실 이름, 교수 정보, Footer, 연락처 등을 여기서 수정하세요.

   [사진 넣는 법]
   1) images 폴더 안에 사진 파일을 넣습니다.
      예: images/professor.jpg
   2) photo: "images/professor.jpg" 처럼 경로를 입력합니다.
   3) 파일명은 영문/숫자/하이픈(-) 사용을 권장합니다.
   ========================================================= */
window.COMMON_CONTENT = {
  siteTitle: "AEM Lab | Advanced Energy Materials Laboratory",
  shortName: "AEM",
  labName: "Advanced Energy Materials Laboratory",

  professor: {
    name: "Prof. [교수님 성함]",
    affiliation: "Department of [학과명], [대학교명]",
    quote: "We design functional interfaces and porous architectures to solve fundamental limitations in next-generation batteries.",
    photo: "" // 예: "images/professor.jpg"
  },

  footerAffiliation: "[대학교명] [학과명]",
  contact: {
    room: "[건물명 / 연구실 호수]",
    address: "[대학교 주소]",
    email: "professor@university.ac.kr",
    tel: "02-0000-0000"
  }
};
