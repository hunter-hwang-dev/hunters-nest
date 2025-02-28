require("dotenv").config();
const url = process.env.MONGO_DB_URI;
const express = require("express");
const path = require("path"); // path 모듈 불러오기
const app = express();

app.use(express.static(path.join(__dirname, "public"))); // public 폴더가 정적 파일로 제공됨

const { MongoClient } = require("mongodb");

let db;
new MongoClient(url)
  .connect()
  .then((client) => {
    console.log("DB연결성공");
    db = client.db("forum");
  })
  .catch((err) => {
    console.log(err);
  });

// 서버 실행
app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
