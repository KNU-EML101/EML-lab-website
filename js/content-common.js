/* =========================================================
   EML LAB - 공통 정보
   ---------------------------------------------------------
   연구실 공식 표기를 EML 기준으로 수정한 버전입니다.
   - 헤더 좌측 상단에 업로드한 EML 로고를 표시합니다.
   - shortName / siteTitle / labName을 모두 EML 기준으로 변경했습니다.

   [교수 사진 넣는 법]
   images/professor.jpg 파일을 넣고 아래 photo 경로를 유지하면 됩니다.
   ========================================================= */
window.COMMON_CONTENT = {
  siteTitle: "EML Lab | Energy Materials Laboratory",
  shortName: "EML",
  labName: "Energy Materials Laboratory",
  logoPath: "images/eml-logo-wordmark.png",
  logoAlt: "EML logo",

  professor: {
    name: "Prof. Jin Joo (주진)",
    affiliation: "Department of Applied Chemistry, Kyungpook National University",
    quote: "Research in lithium-ion batteries, inorganic chemistry, and nanomaterials.",
    photo: "images/professor.jpg"
  },

  professorProfile: {
    education: [
      "Ph.D., Seoul National University (2005)",
      "M.A., Seoul National University (2001)",
      "B.A., Seoul National University (1999)"
    ],
    experience: [
      "Professor, Kyungpook National University (2009–Present)",
      "Postdoctoral Researcher, Los Alamos National Laboratory, USA (2006–2009)",
      "Postdoctoral Researcher, Seoul National University (2005–2006)"
    ]
  },

  footerAffiliation: "Kyungpook National University · College of Engineering · Department of Applied Chemistry",

  contact: {
    room: "",
    address: "80 Daehak-ro, Buk-gu, Daegu 41566, Republic of Korea",
    email: "joojin@knu.ac.kr",
    tel: "+82-53-950-5585",
    fax: "+82-53-950-6594"
  }
};
