# PromptApp

PromptApp is a modern web application designed to enhance the sharing and discovery of AI prompts. Built with a cutting-edge tech stack, it provides users with a seamless experience for creating, sharing, and managing AI prompts within a community-driven platform.

## Tech Stack

- **Next.js**: A powerful React framework for building server-side rendered and statically generated web applications.
- **MongoDB**: A NoSQL database for scalable and flexible data storage.
- **NextAuth**: A comprehensive authentication library for secure Google authentication.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.

---

## 🔋 Features

### 👉 Modern Design with Glassmorphism Trend Style
A visually striking and contemporary design inspired by the glassmorphism trend, providing a clean and elegant user interface.

### 👉 Discover and Share AI Prompts
Users can explore a variety of AI prompts shared by the community and contribute their own prompts for others to discover.

### 👉 Edit and Delete Created Prompts
Allows users to manage their content with full control over editing and deleting their shared prompts.

### 👉 Profile Page
Each user has a personalized profile page showcasing all the prompts they have created, offering a clear summary of their contributions.

### 👉 View Other People’s Profiles
Fosters a sense of community by enabling users to browse profiles of other creators and explore their shared prompts.

### 👉 Copy to Clipboard
Provides a convenient "Copy to Clipboard" functionality, making it easy for users to copy AI prompts for their own use.

### 👉 Search Prompts by Specific Tag
Users can efficiently find relevant prompts by searching for specific tags, enhancing the discovery experience.

### 👉 Google Authentication using NextAuth
Ensures a secure and streamlined login experience through Google authentication powered by NextAuth.

### 👉 Responsive Website
Delivers a fully responsive design, guaranteeing optimal user experiences across a range of devices, including desktops, tablets, and smartphones.

### 👉 Code Architecture and Reusability
Built with a focus on modularity, reusability, and clean architecture to ensure maintainability and scalability.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Manav-Chudasama/promptApp.git
   cd promptapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and configure the following environment variables:
   ```env
   GOOGLE_CLIENT_ID=""
   GOOGLE_CLIENT_SECRET=""
   MONGODB_URI=""
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_URL_INTERNAL="http://localhost:3000"
   NEXTAUTH_URL_SECRET=""
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## Contributing

Contributions are welcome! Feel free to fork the repository, create a new branch, and submit a pull request.

---

