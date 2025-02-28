const express = require("express");
const path = require("path"); // path 모듈 불러오기
const app = express();

app.listen(8080, () => {
  console.log("http://localhost:8080");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html")); //서버 속 경로랑 헷갈리지 않게 절대경로로 작성
});
