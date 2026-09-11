# 🐍 JavaScript Snake Game: HTML5 Canvas & LocalStorage

<div align="center">
  <img src="https://img.shields.io/github/repo-size/Muhammad-Zubair796/Snake" alt="Repo Size" />
  <img src="https://img.shields.io/github/downloads/Muhammad-Zubair796/Snake/total" alt="Downloads" />
  <img src="https://img.shields.io/github/stars/Muhammad-Zubair796/Snake?style=social" alt="Stars" />
  <img src="https://img.shields.io/badge/Built%20With-Vanilla%20JS-yellow" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Platform-Web%20%7C%20Windows%20%7C%20Android-green" alt="Platforms" />
  <br />
  <a href="https://www.mzubair.online">
    <img src="https://img.shields.io/badge/Official_Portfolio-mzubair.online-blue?style=for-the-badge&logo=vercel" alt="Muhammad Zubair Portfolio" />
  </a>
</div>

---

**Snake** is a highly optimized, modern recreation of the classic arcade game, built entirely with **Vanilla JavaScript** and the **HTML5 Canvas API**. Developed by **[Muhammad Zubair](https://www.mzubair.online)**, this open-source game features wrap-around mechanics, dynamic color customization, and persistent high scores using Web Storage.

Whether you are looking to play a nostalgic game or explore clean, efficient 2D game loop logic in JavaScript, this repository serves as a perfect example of modern web game development.

---

## 🎮 Play Live

Experience the fluid 60FPS gameplay directly on my official portfolio:

👉 **[Play Snake Online - Official Website](https://www.mzubair.online/play/snake)**  

---

## 📱💻 Download Native Apps (Windows & Android)

[![Download EXE](https://img.shields.io/badge/Download-Windows_EXE-blue?style=for-the-badge&logo=windows)](https://github.com/Muhammad-Zubair796/Snake/releases/download/v1.0.0/Snake.by.M.Zubair.1.0.0.exe)
[![Download APK](https://img.shields.io/badge/Download-Android_APK-green?style=for-the-badge&logo=android)](https://github.com/Muhammad-Zubair796/Snake/releases/download/v1.0.0/Snake.apk)

*   **Windows:** Packaged using Electron for a standalone desktop experience.
*   **Android:** Built with Cordova/WebView for full-screen mobile gameplay.

---

## 🕹️ Core Game Features

*   **Wrap-Around Board Mechanics:** Unlike traditional snake games, hitting the wall doesn't kill you. The snake seamlessly teleports to the opposite side of the canvas!
*   **Customizable Snake Colors:** Use the built-in color picker to change your snake's appearance. The head uses your chosen base color, while the body dynamically lightens for a 3D-like effect.
*   **Persistent High Scores:** Your highest score and custom color preferences are automatically saved to your browser's `LocalStorage`.
*   **Immersive Audio:** Integrated HTML5 Audio for eating food (`eat.mp3`) and game over states (`gameover.mp3`).
*   **Self-Collision Detection:** Precise array-based collision logic ensures the game ends only when the snake bites its own tail.

---

## ⌨️ Controls

*   **↑ Up Arrow** → Move Up
*   **↓ Down Arrow** → Move Down
*   **← Left Arrow** → Move Left
*   **→ Right Arrow** → Move Right
*   **Restart Button** → Resets the board after a Game Over.

---

## 🛠️ Tech Stack & Architecture

This project is built without any external game engines or heavy libraries, ensuring maximum performance and SEO-friendly load times.

*   **Core Logic:** Vanilla JavaScript (ES6+)
*   **Rendering Engine:** HTML5 `<canvas>` API (`getContext("2d")`)
*   **Data Persistence:** Browser `LocalStorage` API
*   **Audio:** HTML5 `<audio>` elements
*   **Desktop/Mobile Wrappers:** Electron.js & Apache Cordova

### Code Snippet: Wrap-Around Logic
<pre><code>// Seamlessly wrap the snake around the canvas edges
if(head.x < 0) head.x = canvas.width - box;
else if(head.x >= canvas.width) head.x = 0;

if(head.y < 0) head.y = canvas.height - box;
else if(head.y >= canvas.height) head.y = 0;
</code></pre>

---

## 🚀 Future Roadmap

*   [ ] **Progressive Web App (PWA):** Offline support for browser play.
*   [ ] **Difficulty Scaling:** Game speed increases as the snake grows longer.
*   [ ] **Touch Controls:** On-screen D-Pad for better mobile browser support.
*   [ ] **Global Leaderboards:** Backend integration for worldwide high scores.

---

## 👨‍💻 About the Developer

**Muhammad Zubair**  
*Software Engineer | Web Game Developer | AI Infrastructure*

I specialize in building scalable web applications and interactive JavaScript experiences. If you found this source code helpful for learning HTML5 Canvas or game development, please consider giving the repository a ⭐!

🌐 **Official Website:** [www.mzubair.online](https://www.mzubair.online)  
🔗 **LinkedIn:** [Muhammad Zubair](https://linkedin.com/in/muhammad-zubair-6230a1285)

---

## 📜 License

This project is open-source and available under the MIT License. Feel free to fork, modify, and use it for your own learning and experimentation.
