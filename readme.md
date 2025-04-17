# ✨ Modern Todo Application

A sleek and modern Todo application built with React, TypeScript, and Tailwind CSS, featuring a beautiful UI and smooth interactions.

![Todo App Preview](./public/assets/Screenshot%202025-04-17%20094440.png)

## 🚀 Features

- **Beautiful UI**: Gradient backgrounds and modern design
- **Real-time Updates**: Instant todo management
- **Timestamp Tracking**: Each todo includes creation time
- **Smooth Animations**: Polished user interactions
- **Responsive Design**: Works on all devices
- **Accessibility**: Built with a11y in mind

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Type Safety**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Radix UI
- **Build Tool**: Vite
- **Package Manager**: npm

## 🏃‍♂️ Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser and visit**
```
http://localhost:5173/
```

## 💡 Usage
- Add a new todo by typing in the input field and pressing Enter or clicking Add
- Mark todos as complete by clicking the checkbox
- Delete todos by clicking the trash icon (visible on hover)
- View creation time for each todo

## 🎨 Customization
The app uses Tailwind CSS for styling. You can customize the look by modifying:

- tailwind.config.js for theme configuration
- Component-level styles in individual files
- Color schemes in the gradient backgrounds


## 📝 Project Structure

src/
├── components/         # React components
│   ├── TodoInput.tsx  # Input component for new todos
│   ├── TodoList.tsx   # List of todos
│   ├── TodoItem.tsx   # Individual todo item
│   └── ui/            # Shared UI components
├── lib/               # Utility functions
└── App.tsx           # Main application component

## ✨ Contributing
1. Fork the repository
2. Create your feature branch ( git checkout -b feature/amazing-feature )
3. Commit your changes ( git commit -m 'Add some amazing feature' )
4. Push to the branch ( git push origin feature/amazing-feature )
5. Open a Pull Request


## 🙏 Acknowledgments
- Radix UI for accessible components
- Tailwind CSS for styling
- Vite for the build system