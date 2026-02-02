# Raul Victor Rosa - Portfolio

A modern, responsive portfolio website built with React, Vite, TanStack Router, and Shadcn UI.

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: TanStack Router
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Code Quality**: Biome (linting & formatting)
- **Package Manager**: Bun

## ✨ Features

- 🎨 Modern, clean design with gradient accents
- 🌓 Light and dark theme support
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Lightning-fast performance with Vite
- 🎯 Type-safe routing with TanStack Router
- ♿ Accessible components from Shadcn UI
- 🎭 Smooth animations and transitions

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/raulvictorrosa/raulvictorrosa.git
cd raulvictorrosa
\`\`\`

2. Install dependencies:
\`\`\`bash
bun install
\`\`\`

3. Start the development server:
\`\`\`bash
bun dev
\`\`\`

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📝 Available Scripts

- \`bun dev\` - Start development server
- \`bun build\` - Build for production
- \`bun preview\` - Preview production build
- \`bun lint\` - Run Biome linter
- \`bun lint:fix\` - Fix linting issues
- \`bun format\` - Format code with Biome

## 📁 Project Structure

\`\`\`
src/
├── components/         # Reusable components
│   ├── ui/            # Shadcn UI components
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── data/              # Portfolio data
│   └── portfolio.ts
├── lib/               # Utility functions
│   └── utils.ts
├── pages/             # Page components
│   └── Home.tsx
├── routes/            # TanStack Router routes
│   ├── __root.tsx
│   └── index.tsx
├── index.css          # Global styles
└── main.tsx           # App entry point
\`\`\`

## 🎨 Customization

### Update Your Information

Edit \`src/data/portfolio.ts\` to update:
- Personal information
- Skills and expertise
- Work experience
- Education

### Modify Theme Colors

Edit \`src/index.css\` to customize the color scheme for light and dark themes.

### Add New Sections

Create new components in \`src/pages/Home.tsx\` or create separate page components.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Netlify

1. Build the project: \`bun build\`
2. Deploy the \`dist\` folder to Netlify

### Manual

\`\`\`bash
bun build
\`\`\`

Upload the \`dist\` folder to your hosting provider.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Contact

Raul Victor Rosa
- Email: raulvictorrosa@gmail.com
- LinkedIn: [raulvictorrosa](https://www.linkedin.com/in/raulvictorrosa)
- GitHub: [@raulvictorrosa](https://github.com/raulvictorrosa)
- Twitter: [@rauulrosa](https://twitter.com/rauulrosa)
