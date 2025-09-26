
🧑‍💻 React + TypeScript + Vite User Directory
A responsive and interactive user directory built with React, TypeScript, and Vite. It features search, sorting, and animated detail views using modern frontend technologies.

🚀 Getting Started
Installation
bash
npm install
Development Server
bash
npm run dev
Once the server is running, open http://localhost:5173/ in your browser to view the app.

📄 Features
🏠 Home Page
Displays a list of users fetched from an API.

Each user is listed with their name and username.

🔍 Search
Search users by Name or Username.

Case-sensitive: Ensure the first letter is capitalized when searching.

↕️ Sorting
Click on the Name or Username column headers to sort the list.

Sorting toggles between ascending and descending order, indicated by arrow icons.

👁️ Detail View
Click on a user's underlined name to view detailed information.

The detail view appears with a smooth Framer Motion transition.

Use the Back button to return to the home page.

🛠️ Tech Stack
Technology	Purpose
React	UI development
Vite	Fast build tool and dev server
TypeScript	Type safety and better developer tooling
TailwindCSS	Utility-first styling
Framer Motion	Animation effects
Axios	API integration and data fetching
React Router DOM	Routing between pages

💡 Notes
Ensure your API endpoint is correctly configured in the Axios service.

The search functionality is case-sensitive by design.
