# 🌲 Skill Tree — Java Learning Roadmap

An interactive skill tree that visualizes a real learning journey — built with React, styled as a forest of connected skills instead of a generic checklist. Mark topics as not started, in progress, or mastered, and watch dependent skills unlock as their prerequisites are completed.

🔗 Live Demo: _add your Vercel URL here after deploying_
📦 Repository: _add your GitHub URL here_

## ✨ Overview

Most "learning tracker" apps are just checklists. Skill Tree instead models learning the way it actually works — some topics unlock only after others are mastered. It's seeded with a real Java/placement-prep curriculum (Foundations → Core → Advanced → Placement Ready), but the data model is generic enough to track any subject.

## 🚀 Features

- 🌳 **Tiered Skill Tree** — Skills are organized into four tiers with prerequisite connections drawn as branching lines between nodes.
- 🔓 **Dependency-Based Unlocking** — A skill can only be started once every prerequisite is marked "Mastered."
- 📊 **Live Progress Tracker** — A gradient progress bar shows overall completion percentage in real time.
- 💾 **Persistent Storage** — Progress is saved to `localStorage`, so it survives refreshes.
- 🎯 **Detail Panel** — Click any node to see its description, prerequisites, and update its status.
- 📱 **Responsive Design** — Tree and detail panel adapt to a single column on smaller screens.

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Frontend Framework | React (Vite) |
| Data Storage | localStorage |
| Version Control | Git & GitHub |
| Deployment | Vercel |

## 📂 Project Structure

```
skilltree/
├── src/
│   ├── components/     # SkillNode, TreeCanvas, DetailPanel
│   ├── data/            # skills.js — the tree's data model
│   ├── hooks/           # useLocalStorage
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## ⚙️ Getting Started

### Prerequisites
- Node.js & npm
- Git

### Installation

```bash
git clone https://github.com/<your-username>/skilltree.git
cd skilltree
npm install
npm run dev
```

Open http://localhost:5173 in your browser to view the app.

## 🧪 Usage

1. Click any skill node to open its detail panel.
2. Skills with a dashed border are unlocked and ready to start.
3. Mark a skill "In progress" or "Mastered" from the detail panel.
4. Once all of a skill's prerequisites are mastered, its connecting line turns gold and the next tier opens up.
5. Watch the top progress bar track your overall completion.

## ✏️ Customizing the tree

Edit `src/data/skills.js` to track your own subject — each skill needs an `id`, `tier`, `name`, `description`, and a `prereqs` array of other skill ids.

## 🌐 Deployment

This project is built for deployment on Vercel.

```bash
npm run build
```

Then deploy the `dist` folder using Vercel or Netlify.

## 🗺️ Roadmap / Future Enhancements

- [ ] Custom tree editor (add/remove skills from the UI)
- [ ] Multiple saved trees (Java, DSA, System Design, etc.)
- [ ] Export/import progress as JSON
- [ ] Shareable read-only tree links

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Saba Teradal
GitHub: [@SabaTeradal](https://github.com/SabaTeradal)
