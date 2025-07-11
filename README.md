# AI Tools Directory

A comprehensive, open-source directory of AI tools for professionals. Built with Astro, TypeScript, and Tailwind CSS.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01)](https://astro.build/)

## ✨ Features

- **40+ AI Tools**: Curated collection of the best AI tools across different categories
- **Advanced Filtering**: Filter by pricing (free, freemium, paid) and source type (open-source, closed-source)
- **Smart Search**: Real-time search across tool names, descriptions, and tags
- **Sorting Options**: Sort by rating, name, or category
- **Category Navigation**: Browse tools by categories like Chat, Code Assistants, Image Generation, etc.
- **Responsive Design**: Beautiful, mobile-first design with fuchsia accent theme
- **Open Source**: MIT licensed for maximum community contribution

## 🚀 Live Demo

Visit the live site at: [aitools.vercel.app](https://aitools.vercel.app)

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Typography**: [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin) - Beautiful prose styling
- **Fonts**: [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) + [Outfit](https://fonts.google.com/specimen/Outfit)
- **Content**: Markdown-based tool entries with frontmatter
- **Deployment**: [Vercel](https://vercel.com/)

## 📂 Project Structure

```text
/
├── public/                 # Static assets
│   └── images/
│       └── tools/         # Tool logos and icons
├── src/
│   ├── components/        # Reusable components
│   │   ├── CategoryFilter.astro
│   │   ├── SearchBar.astro
│   │   └── ToolGrid.astro
│   ├── content/
│   │   ├── config.ts     # Content collection schema
│   │   └── tools/        # Tool entries (Markdown)
│   ├── layouts/          # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── ToolLayout.astro
│   ├── pages/            # Routes
│   │   ├── index.astro   # Homepage
│   │   ├── tools.astro   # All tools page
│   │   └── tools/[slug].astro # Individual tool pages
│   └── styles/
│       └── global.css    # Global styles and custom classes
├── LICENSE               # MIT License
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-tools-directory.git
   cd ai-tools-directory
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🧞 Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `pnpm install`    | Install dependencies                         |
| `pnpm dev`        | Start local dev server at `localhost:3000`  |
| `pnpm build`      | Build production site to `./dist/`          |
| `pnpm preview`    | Preview your build locally                   |

## ➕ Adding New Tools

To add a new AI tool to the directory:

1. **Create a new Markdown file** in `src/content/tools/`
   ```bash
   touch src/content/tools/your-tool-name.md
   ```

2. **Add the frontmatter and content**
   ```markdown
   ---
   title: "Your Tool Name"
   description: "Brief description of what the tool does"
   category: "chat" # chat, code-assistant, image-generation, etc.
   subcategory: "conversational-ai"
   pricing: "freemium" # free, freemium, paid
   source: "closed-source" # open-source, closed-source
   website: "https://yourtool.com"
   logo: "/images/tools/yourtool.svg"
   tags: ["ai", "productivity", "automation"]
   features:
     - "Feature 1"
     - "Feature 2"
   pricing_details:
     free: "Free tier description"
     paid: "Paid tier description"
   api_available: true
   mobile_app: false
   integrations: ["API", "Slack", "Discord"]
   last_updated: "2025-07-10"
   rating: 4.5
   user_count: "1M+"
   ---

   ## Overview
   Detailed description of the tool...

   ## Key Features
   - Feature descriptions...

   ## Use Cases
   - Use case examples...

   ## Pricing
   - Pricing information...
   ```

3. **Add the tool logo** to `public/images/tools/`

4. **Test locally** and submit a pull request!

## 🎨 Design System

- **Primary Color**: Fuchsia (`#c026d3`)
- **Text Colors**: Slate scale (`slate-900`, `slate-600`, etc.)
- **Fonts**: 
  - Headings: Instrument Serif
  - Body: Outfit
- **Spacing**: Tailwind's spacing scale
- **Shadows**: Subtle shadows with hover effects

## 🤝 Contributing

We welcome contributions! Here's how you can help:

- **Add new tools**: Follow the guide above
- **Improve existing entries**: Update descriptions, pricing, features
- **Fix bugs**: Report issues or submit fixes
- **Enhance features**: Suggest new filtering options or UI improvements
- **Update documentation**: Help improve this README

### Contribution Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test locally (`pnpm dev`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Star ⭐ this repo if you find it helpful!**
