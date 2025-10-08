# 🎥 Nxt Watch

A fully functional **YouTube-like video streaming platform** built using **React.js**, where users can browse, search, and watch videos with authentication, theme switching, and saved video management.

---

## 🚀 Live Demo

> [Add your deployed link here once you deploy to Netlify or Vercel]

---

## 🧠 Project Overview

**Nxt Watch** replicates a real-world video streaming experience. It includes features like login authentication, dark/light mode, responsive design, video playback using `react-player`, and protected routes.

This project demonstrates **React Router**, **Context API**, **Authentication Flow**, **API Integration**, and **Styled Components** in action.

---

## 🖼️ Demo Previews

### ✅ Success View

[https://assets.ccbp.in/frontend/content/react-js/nxt-watch-output-v0.mp4](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-output-v0.mp4)

### ❌ Failure View

[https://assets.ccbp.in/frontend/content/react-js/nxt-watch-failure-output-v0.mp4](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-failure-output-v0.mp4)

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Hooks, Context API, React Router)
* **Styling:** Styled Components
* **API Handling:** Fetch API + JWT Authentication
* **Video Playback:** `react-player`
* **Utilities:** `date-fns` for date formatting
* **Deployment:** Netlify / Vercel (recommended)

---

## ⚙️ Installation & Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/AshleshBathina/nxt-watch-app.git
cd nxt-watch-app
npm install
npm start
```

### ✅ Test Credentials

```
username: rahul
password: rahul@2021
```

---

## 🌗 Features

* 🔐 **JWT Authentication**
  Secure login using APIs with cookies.

* 🏠 **Home Page**
  Displays video feed with search and banner section.

* 🔥 **Trending Page**
  Shows trending videos with dedicated theme styling.

* 🎮 **Gaming Page**
  Lists popular gaming content.

* 💾 **Saved Videos**
  Manage saved videos across sessions.

* 🎬 **Video Details**
  Watch videos with like/dislike/save functionality using `react-player`.

* 🌙 **Dark & Light Theme Support**

* 📱 **Responsive Design**
  Optimized for all devices.

---

## 🌐 API Endpoints

| Feature         | Method | Endpoint                                  |
| --------------- | ------ | ----------------------------------------- |
| Login           | POST   | `https://apis.ccbp.in/login`              |
| Home Videos     | GET    | `https://apis.ccbp.in/videos/all?search=` |
| Trending Videos | GET    | `https://apis.ccbp.in/videos/trending`    |
| Gaming Videos   | GET    | `https://apis.ccbp.in/videos/gaming`      |
| Video Details   | GET    | `https://apis.ccbp.in/videos/:id`         |

---

## 🧩 Folder Structure

```
nxt-watch-app/
│
├── src/
│   ├── components/
│   │   ├── Login
│   │   ├── Home
│   │   ├── Trending
│   │   ├── Gaming
│   │   ├── SavedVideos
│   │   ├── VideoItemDetails
│   │   ├── NotFound
│   │   └── Header / Sidebar / ThemeContext
│   ├── App.js
│   ├── index.js
│   └── themeContext.js
│
└── package.json
```

---

## 🧠 Concepts Applied

* **React Router DOM v6**
* **Protected Routes**
* **React Context API for Theme & Saved Videos**
* **Styled Components**
* **Fetch API Integration**
* **Date formatting with date-fns**
* **Conditional Rendering**
* **Responsive CSS design**

---

## 📸 Design References

You can view all reference designs and mockups for various routes (Login, Home, Trending, Gaming, Saved, Not Found) under the **Design Files** section provided [here](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-login-sm-outputs.png).

---

## 🧾 License

This project is open-sourced under the MIT License.
Feel free to use, modify, and distribute.

---

## 👨‍💻 Developed by

**Ashlesh Bathina**
💼 Aspiring Software Engineer
🌐 [GitHub](https://github.com/AshleshBathina)
