require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

app.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const result = await model.generateContent(message);
        const response = await result.response;
        const text = response.text();

        res.json({ reply: text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Xato API kaliti" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Gemini API ga o'tdi va ushbu serverda yurmoqda: ${PORT}`));