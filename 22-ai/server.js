const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 8000;

app.use(express.json());

// GEMINI 설정
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

// router
app.post("/chat", async (req, res) => {
    const {prompt} = req.body;
    console.log(prompt);

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        console.log(result);
        res.json({response: text});
    } catch (error) {
        res.status(500).json({response: "오류"});
    }
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})


