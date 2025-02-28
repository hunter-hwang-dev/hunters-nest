require("dotenv").config();

const url = process.env.MONGO_DB_URI;
const express = require("express");
const path = require("path"); // path 모듈 불러오기
const app = express();

app.use(express.static(path.join(__dirname, "public"))); // public 폴더가 정적 파일로 제공됨
app.use(express.json()); // JSON 요청 본문을 파싱할 수 있도록 설정

const { MongoClient } = require("mongodb");

let db;
new MongoClient(url)
  .connect()
  .then((client) => {
    console.log("DB 연결 성공!");
    db = client.db("blog");

    // 서버 실행
    app.listen(8080, () => {
      console.log("Server is running on http://localhost:8080");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/save-data", async (req, res) => {
  await db.collection("tiptap").insertOne(req.body);
});
