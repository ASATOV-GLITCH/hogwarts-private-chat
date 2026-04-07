Hogwarts Chat: Minimal AI Web Application
This project is a minimal, secure, and functional AI-powered web chat application built for the Private AI System Case Study. It demonstrates the integration of a frontend interface with a secure Node.js backend using the Google Gemini AI API.

🚀 Overview
The application allows users to send messages through a web interface and receive real-time responses from an AI model. It is designed with a focus on security, ensuring that sensitive API keys are never exposed to the client side.

🛠️ Tech Stack
Frontend: HTML5, CSS3 (Custom Dark Tech Theme), Vanilla JavaScript.

Backend: Node.js, Express.js.

AI Engine: Google Gemini 1.5 Flash API.

Environment Management: Dotenv (for secure API key storage).

🛡️ Security Features
Backend Proxying: All API requests are handled by the server. The client-side code never communicates with the AI provider directly, preventing API key leakage.

Environment Variables: API keys are stored in a protected .env file, which is excluded from version control via .gitignore.

## 📂 Project Structure

```text
private-ai-chat/
├── public/
│   └── index.html      # Frontend: User interface & Chat logic
├── .env.example        # Template for API keys
├── .gitignore          # Security: Prevents .env from being uploaded
├── package.json        # Project dependencies
├── server.js           # Backend: Express server & Gemini API
└── README.md           # Documentation
⚙️ Installation & Setup
Clone the repository:

Bash
git clone https://github.com/yourusername/private-ai-chat.git
cd private-ai-chat
Install dependencies:

Bash
npm install
Configure Environment Variables:

Create a file named .env in the root directory.

Add your Google AI Studio API key:

Code fragment
GOOGLE_API_KEY=your_actual_api_key_here
PORT=3000
Run the application:

Bash
node server.js
Access the Chat:

Open http://localhost:3000 (if serving static files through Express) or simply open public/index.html in your browser.

🧠 Research & Learning
Statistical Engines: As noted in my research sketches, LLMs function as statistical prediction machines rather than factual databases.

Pivot Experience: During development, I successfully transitioned from OpenAI to Google Gemini due to quota constraints, demonstrating architectural flexibility.

(It was created speacial for case study from Hogwarts School, thanks to this good experience)
