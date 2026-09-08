/* =========================================================
   NEWS 페이지 내용 - news.html
   ---------------------------------------------------------
   [뉴스 추가 방법]
   최신 뉴스를 news 배열의 맨 위에 추가하세요.

   {
     date: "OCT 2026",
     title: "새로운 뉴스 제목",
     description: "뉴스 내용을 간단히 적습니다.",
     featured: false
   },

   featured: true  → 큰 대표 카드로 표시
   featured: false → 일반 카드로 표시

   대표 뉴스는 1개만 true로 두는 것을 권장합니다.
   개수 제한은 없으며, 추가한 뉴스가 전부 표시됩니다.
   ========================================================= */
window.PAGE_CONTENT = {
  pageTitle: "News & Highlights",
  pageDescription: "Publications, awards, conferences, projects, and lab updates.",
  news: [
    { date: "SEP 2026", title: "Our latest lithium–sulfur battery study has been published.", description: "연구실의 새로운 연구 성과와 핵심 결과를 간단히 소개하세요.", featured: true },
    { date: "AUG 2026", title: "Conference Presentation", description: "OO학회에서 연구 결과를 발표했습니다.", featured: false },
    { date: "MAR 2026", title: "Welcome New Members", description: "새로운 대학원생이 연구실에 합류했습니다.", featured: false },
    { date: "JAN 2026", title: "New Research Project", description: "새로운 연구과제를 시작했습니다.", featured: false }
  ]
};
