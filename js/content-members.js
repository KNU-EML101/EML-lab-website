/* =========================================================
   MEMBERS 페이지 내용
   ---------------------------------------------------------
   현재 테스트용 캐릭터 이미지는 images 폴더의 JPG 파일을 사용합니다.

   필요한 파일명:
   - images/shinchan.jpg
   - images/himawari.jpg
   - images/bochan.jpg
   - images/kazama.jpg

   실제 연구실 사진으로 바꿀 때는 photo 경로만 변경하면 됩니다.
   ========================================================= */
window.PAGE_CONTENT = {
  pageTitle: "Members",
  pageDescription: "Meet the members of Energy Materials Laboratory.",
  members: [
    { name: "짱구", position: "Ph.D. Candidate", research: "Li–S Batteries", photo: "images/shinchan.jpg" },
    { name: "짱아", position: "M.S. Candidate", research: "Porous Carbon", photo: "images/himawari.jpg" },
    { name: "맹구", position: "M.S. Candidate", research: "Interface Chemistry", photo: "images/bochan.jpg" },
    { name: "철수", position: "Undergraduate Researcher", research: "", photo: "images/kazama.jpg" }
  ]
};
