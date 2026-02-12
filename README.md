# EduNation Sri Lanka

EduNation Sri Lanka is a community-driven initiative dedicated to uplifting underprivileged students by collecting and redistributing used books and providing educational resources.

## 🌟 Project Overview

This is the official repository for the EduNation Sri Lanka website. The platform serves as a hub for:
- Collecting book donations ("Breathing Letters" campaign).
- Recruiting volunteers.
- Facilitating monetary donations.
- Providing transparent updates on our activities.

## 🚀 Features

- **Modern & Responsive Design**: Built with React, Tailwind CSS, and Shadcn UI for a premium, accessible experience.
- **Supabase Integration**:
  - Securely stores volunteer sign-ups.
  - Manages book donation pledges.
  - Includes Row Level Security (RLS) for data privacy.
- **Dynamic Content**:
  - Auto-sliding image galleries for event updates.
  - Interactive forms with real-time feedback.
  - WhatsApp integration for easy sharing.
- **Multi-language Support**: Structure in place for English, Sinhala, and Tamil content.

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn UI, Lucide Icons
- **Backend / Database**: Supabase (PostgreSQL)
- **Deployment**: GitHub Pages

## 📦 Installation & Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/lowecho/EduNation-Sri-Lanka.git
   cd EduNation-Sri-Lanka
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
   *Note: Ensure you have created the `volunteers` and `book_donations` tables in your Supabase project as per the schema.*

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🚢 Deployment

The site is deployed to GitHub Pages.

To deploy a new version:
```bash
npm run deploy
```
This command builds the project and pushes the `dist` folder to the `gh-pages` branch.

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
