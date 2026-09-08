/* =========================================================
   PUBLICATIONS 페이지 내용 - publications.html
   ---------------------------------------------------------
   [논문 추가 방법]
   가장 최신 논문을 publications 배열의 맨 위에 추가하는 것을 권장합니다.

   {
     year: "2026",
     title: "논문 제목",
     authors: "A. Author, B. Author, et al.",
     journal: "Journal Name",
     doi: "https://doi.org/10.xxxx/xxxxx",
     type: "Article"
   },

   DOI가 아직 없으면 doi: "" 로 두면 링크가 생성되지 않습니다.
   type 예: Article / Review / Communication / Conference
   ========================================================= */
window.PAGE_CONTENT = {
  pageTitle: "Publications",
  pageDescription: "Selected publications from our laboratory.",
  publications: [
    { year: "2026", title: "Functionalized Mesoporous Carbon Hosts for High-Performance Lithium–Sulfur Batteries", authors: "J. Kim, J. Park, et al.", journal: "Advanced Energy Materials", doi: "", type: "Article" },
    { year: "2025", title: "Interfacial Regulation of Polysulfides by Primary Amine Chemistry", authors: "J. Park, et al.", journal: "Energy Storage Materials", doi: "", type: "Article" },
    { year: "2024", title: "Large-Pore Carbon Architectures for Sulfur Confinement and Fast Mass Transport", authors: "A. Lee, et al.", journal: "Journal of Power Sources", doi: "", type: "Article" }
  ]
};
