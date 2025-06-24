# 🧠 ALARA - AI Companion

![Alara](./public/images/Alara---Desktop-girl2.jpg?raw=true "Meet a Bartender")

**AI Companion** is a dynamic web-based chatbot interface powered by cutting-edge AI models. Built with Next.js and hosted on Vercel, it provides users with a simple, elegant, and interactive way to engage with artificial intelligence in real time.

**Scenario**: You’ve just arrived at a bar solo. You take a seat and notice the bartender noticing you. Whether you’re shy or always up for social interaction, it’s time to impress this girl and see where the night takes you.

You’ll meet a random bartender — and each one has a different personality. This gives you the exciting challenge of navigating unique interactions every time you use this service.

But there’s a twist: you only have 3 minutes. She’s busy, and there’s plenty of competition around you! Don’t forget to order your drink before you lose her attention.

[🌐 Visit Live Site](https://ai-companion-navy.vercel.app)

---

## ✨ Features

- 💬 Real-time AI chat with streaming responses  
- 🧠 Support for multiple AI providers (e.g. OpenAI, Claude, etc.)  
- 💡 Clean, responsive UI with dark/light mode  
- 💾 Persistent chat history using local storage  
- ⚡ Fast edge deployment with Vercel  
- 🔁 Auto-scroll, typing indicators, and smooth UX

---

## 🔧 Tech Stack

- **Framework**: Next.js (React)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **AI API**: OpenAI (or configurable providers)
- **State**: React hooks

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ai-companion.git
cd ai-companion
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env.local` file

```env
NEXT_PUBLIC_AI_PROVIDER=openai
OPENAI_API_KEY=your_openai_api_key_here
```

> You can modify to use different providers if the codebase supports them.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

---

## 🗂 Project Structure

```
ai-companion/
├── components/          # Reusable React components
├── pages/               # Next.js routing
│   └── api/             # API endpoints for AI
├── public/              # Static files (icons, images)
├── styles/              # Tailwind/global CSS
├── lib/                 # Helper functions (e.g., AI request logic)
├── .env.local           # Environment variables
└── README.md            # Project documentation
```

---

## 🧪 Testing

Testing coming soon. You can use tools like:

```bash
npm install --save-dev jest @testing-library/react
```

---

## 📌 Roadmap

- [x] MVP launch with OpenAI support
- [ ] Mobile-first optimizations
- [ ] Paid Subscription for prolonged experience
- [ ] Add model selection UI
- [ ] Take the experience to a second date or take the bartender home **(explicit)**
- [ ] Image Transition (expression, location, added emerion)
- [ ] Voice interaction support
- [ ] Male Companion Integration
- [ ] Motion Video of Companion intead of images

---

## 🤝 Contributing

1. Fork the project  
2. Create your feature branch (`git checkout -b feature/feature-name`)  
3. Commit your changes (`git commit -m 'Add feature'`)  
4. Push to the branch (`git push origin feature/feature-name`)  
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See `LICENSE` for more information.

---

## 🙋‍♂️ Contact

Created by **Eric Dumas** – reach out on [LinkedIn](https://www.linkedin.com/in/designgawd/) or [Email Me](mailto:ericdumas1980@gmail.com).

---

## ⭐️ Show Your Support

If you like this project, please star the repo and share it!