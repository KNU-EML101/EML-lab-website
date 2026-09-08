/* =========================================================
   MEMBERS 페이지 내용 - members.html
   ---------------------------------------------------------
   [구성원 추가 방법]
   아래 형식을 members 배열 안에 추가하세요.

   {
     name: "홍길동",
     position: "M.S. Candidate",
     research: "Li–S Batteries",
     photo: "images/hong-gildong.jpg"
   },

   photo를 ""로 두면 기본 빈 이미지 카드가 표시됩니다.
   사진은 images 폴더에 넣는 것을 권장합니다.
   ========================================================= */
window.PAGE_CONTENT = {
  pageTitle: "Members",
  pageDescription: "Meet the researchers of the Advanced Energy Materials Laboratory.",
  members: [
    { name: "[이름]", position: "Ph.D. Candidate", research: "Li–S Batteries", photo: "" },
    { name: "[이름]", position: "M.S. Candidate", research: "Porous Carbon", photo: "" },
    { name: "[이름]", position: "M.S. Candidate", research: "Interface Chemistry", photo: "" },
    { name: "[이름]", position: "Undergraduate Researcher", research: "", photo: "" }
  ]
};
