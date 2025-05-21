# 📝 Task Manager App

A full-featured, performant, and modular **Task Management App** built using **React 19**, **Vite**, and modern React Hooks with persistent storage.

## Features

- ✅ Create, edit, and delete tasks
- 🔍 Filter tasks by status (All, Active, Completed)
- 💾 Persist tasks in `localStorage`
- ♻️ Optimized rendering using `React.memo`, `useMemo`, and `useCallback`
- 🧩 Custom hooks for form handling and task management
- 🧪 Unit tested with Vitest + React Testing Library
- 🎨 Styled with basic CSS

## 🛠️ Technologies Used

- React 19
- Vite
- React Hooks (`useState`, `useEffect`, `useCallback`, `useMemo`)
- Custom Hooks
- CSS Modules / Plain CSS
- `localStorage` for persistent state
- Vitest + React Testing Library

## 📦 Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Setup

```bash
# Create project using Vite
npm create vite@latest task-manager-app --template react

cd task-manager-app

# Replace src/ with the provided code files
# Then install dependencies
npm install

# Run dev server
npm run dev
